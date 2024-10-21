import { useState, useEffect } from "react";
import HomeSingleCard from "./HomeSingleCard";
import "animate.css";

const HomePageCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-pi.vercel.app/queries")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCards(data.slice(0, 8));
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center  ">
        <h2 className="text-4xl text-black custom-font font-semibold animate__animated animate__bounce">
          Current Inquiries from the Community{" "}
        </h2>
      </div>
      <div className="flex justify-center mt-4">
        <hr className="w-56 bg-black border-black border-t-[3px]" />
      </div>

      <div className="grid lg:grid-cols-4 mx-3 mt-16 md:grid-cols-2 grid-cols-1 gap-3 ">
        {cards.map((card) => (
          <HomeSingleCard key={card._id} card={card}></HomeSingleCard>
        ))}
      </div>
    </div>
  );
};

export default HomePageCards;
