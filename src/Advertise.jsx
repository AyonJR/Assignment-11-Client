import Marquee from "react-fast-marquee";

const Advertise = () => {
  return (
    <div className="mx-5 text-white">
      <Marquee>
        <div className="mx-10">
          <img
            className="h-16"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
          />
        </div>
        <div className="mx-10">
          <img
            className="h-16"
            src="https://i.ibb.co.com/txFtNMq/dell-logo-design-1-preview.jpg"
            alt="Dell"
          />
        </div>
        <div className="mx-10">
          <img
            className="h-16"
            src="https://i.ibb.co.com/cYzvNzS/Logo-1-dont.jpg"
            alt="HP"
          />
        </div>
        <div className="mx-10">
          <img
            className="h-16"
            src="https://i.ibb.co.com/T1MfSrH/Jbl-logo.jpg"
            alt="JBL"
          />
        </div>
        <div className="mx-10">
          <img
            className="h-16"
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
            alt="Samsung"
          />
        </div>
        <div className="mx-10">
            <img className="h-16" src="https://i.ibb.co.com/YDpDttd/640px-Boat-Logo-webp.png" alt="" />
        </div>

        <div className="mx-10">
            <img className="h-16" src="https://i.ibb.co.com/KjjRBVT/215d6413a825a2ef5b8f1797404b8003.jpg" alt="" />
        </div>
      </Marquee>


    </div>
  );
};

export default Advertise;



// <div
//   className="relative flex justify-center h-[300px] w-[160px] border-4 border-black rounded-2xl bg-gray-50 shadow-lg"
// >
//   <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"></span>

//   <span className="absolute -right-2 top-14 border-4 border-black h-7 rounded-md"></span>
//   <span className="absolute -right-2 bottom-36 border-4 border-black h-10 rounded-md"></span>
// </div>
