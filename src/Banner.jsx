import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className='lg:mx-16 mx-3' >
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Krxdz7Y/pexels-fauxels-3184451.jpg" className="w-full lg:h-[100vh] filter brightness-75" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn glass ">❮</a>
                        <a href="#slide2" className="btn glass ">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-normal">
                        <Typewriter
                            words={['Empowering Innovation.....']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/K9qXfKZ/ady-teenagerinro-V8-MNPJe8-Nt8-unsplash.jpg" className="w-full lg:h-[100vh] filter brightness-60" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn glass ">❮</a>
                        <a href="#slide3" className="btn glass ">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-normal">
                        <Typewriter
                            words={['Empowering Innovation.....']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Xjdxf3X/hector-martinez-EG49v-Tt-Kdv-I-unsplash.jpg" className="w-full lg:h-[100vh] filter brightness-60" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7))' }} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn  glass ">❮</a>
                        <a href="#slide1" className="btn glass ">❯</a>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-normal">
                        <Typewriter
                            words={['Empowering Innovation.....']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>

            </div>

        



      <div className="relative lg:w-[900px] bg-gradient-to-r from-gray-300 to-gray-600 mx-auto bottom-16 lg:bottom-40">
      <img
        src="https://i.ibb.co/gdCrVNZ/cover-and-banner-of-working-desk-with-gadget-top-view-of-table-working-and-free-space-for-text-with.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl lg:ml-16 mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Solution is near.. <br className="hidden md:block" />
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Find your best gadget solution through our website....
              </p>
             <Link to={'/Queries'}>
             <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-white" 
              >
                All Queries
             
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>





        </div>
    );
};

export default Banner;
