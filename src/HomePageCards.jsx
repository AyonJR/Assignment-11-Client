import { useState, useEffect } from "react";
import HomeSingleCard from "./HomeSingleCard";

const HomePageCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/queries')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setCards(data.slice(0,6));
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []); 

    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    cards.map(card => <HomeSingleCard key={card._id} card={card}></HomeSingleCard>)
                }
            </div>
        </div>
    );
};

export default HomePageCards;
