import  { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.css";

const Register = () => {
    const { createUser }  = useContext(AuthContext)
    const [showSwal, setShowSwal] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = async (e) => { 
        console.log("yes im clicking")
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;


        try {
            await createUser(email, password);
            Swal.fire({
                title: 'Success!',
                text: 'Registered successfully',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                setShowSwal(true);
                navigate(location?.state ? location.state : "/");
            });
        } catch (error) {
            console.error("Registration error:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Registration failed',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            setShowSwal(true);
        }
    };

    return (
        <div className="flex justify-center">
           <div className="flex flex-col lg:w-[500px] max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm dark:text-gray-600">Sign up with your account</p>
	</div>
	<form  onSubmit={handleSignUp} className="space-y-12">
		<div className="space-y-4">
        <div>
				<label  className="block mb-2 text-sm">Your Name </label>
				<input type="text" name="name" id="name" placeholder="name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label  className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label className="text-sm">Password</label>
				
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
            <div>
				<label  className="block mb-2 text-sm">Photo Url </label>
				<input type="text" name="photo" id="phpto" placeholder="photo url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
        
		<div className="space-y-2">
			<div>
				<button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-gray-700 dark:text-gray-50">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600">Already have an account
				<Link to={"/login"}>
                <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Login</a>.
                </Link>
			</p>
		</div>
	</form>
</div>
        </div>
    );
};

export default Register;
