import Advertise from "./Advertise";

const Banner = () => {

    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* Video element instead of the image */}
                    <video
                        src="/TechQuery.mp4"
                        className="w-full lg:h-[100vh] object-cover"
                        autoPlay
                        loop
                        muted
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="text-center text-white p-5">
                            <h1 className="text-4xl lg:text-4xl font-normal mb-4
                             text-white custom-font animate-pulse">
                                Get your Tech Solutions
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;
