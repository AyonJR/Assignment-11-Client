const HomeVideo = () => {
  return (
    <div>
      <div className="flex justify-around mx-20 items-center custom-font">
        <div>
          <h2 className="text-4xl font-semibold">Enjoy every bit of Google Pixel</h2>
          <div className="flex justify-center">
          <img src="https://i.ibb.co.com/dr1YkSQ/images-49-removebg-preview.png" alt="" />

          </div>
        </div>

        {/* video phone */}
        <div className="relative flex justify-center h-[400px] w-[210px] border-4 border-black rounded-2xl shadow-lg">
          <video
            src="/HomeVideo.mp4"
            className="h-full w-full rounded-xl object-cover z-40"
            autoPlay
            loop
            muted
          />
          <span className="absolute top-0 border border-black bg-black w-20 h-2 z-50 rounded-br-xl rounded-bl-xl"></span>
          <span className="absolute -right-2 top-14 border-4 border-black z-50 h-7 rounded-md"></span>
          <span className="absolute -right-2 bottom-36 border-4 z-50 border-black h-10 rounded-md"></span>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
