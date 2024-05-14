import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut,  } from "firebase/auth"; // Import signOut function
import app from "./firebase/firebase.config";
import axios from "axios";
// import app from "./firebase.config.js/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
             
            const userEmail = user?.email
            const loggedUser = { email : userEmail }

             
            setUser(user);
            // console.log(user)
            setLoading(false);
            // if user exists issue a token
            if(user){
                axios.post('https://assignment-11-pi.vercel.app/jwt', loggedUser , { withCredentials:true }) 
                // .then(res => {
                //     // console.log( 'token response',res.data)
                // }
                // )
            } 
            else{
              axios.post('https://assignment-11-pi.vercel.app/logout' , loggedUser , {
                withCredentials:true
              }) 
              .then(res => {
                console.log(res.data)
              })
            }
        });

        return () => unsubscribe();
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const loginUserWithGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    };


  


    const logoutUser = async () => {
        try { 
            setLoading(true)
            await signOut(auth);
            setUser(null);
        } catch (error) {
            throw error;
        }
    };

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginUserWithGoogle,
        logoutUser 
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
