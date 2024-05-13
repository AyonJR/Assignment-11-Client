
const CTAsection = () => {
    return (
        <div>
           <section className="relative bg-cover bg-center bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 py-20 overflow-hidden" style={{backgroundImage: 'url("https://i.ibb.co/Qpw5rrp/people-with-gadgets-banner-vector-27669655.jpg")'}}>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">Find Your Perfect Match</h2>
                <p className="text-lg text-white mb-10 animate-fade-in-up">Discover alternative products that meet your needs and preferences.</p>
                <form className="max-w-md mx-auto animate-fade-in">
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4" placeholder="Enter product name or category" required />
                    <button type="submit" className="bg-gray-800 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 animate-bounce">Search Now</button>
                </form>
            </div>
            <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
            <div className="absolute inset-x-0 bottom-0 z-0">
                <svg className="text-blue-800 h-16 w-full" viewBox="0 0 1440 320">
                    <path fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,170.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1048,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
        </div>
    );
};

export default CTAsection;