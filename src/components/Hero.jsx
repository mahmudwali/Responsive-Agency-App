import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mainHero md:flex gap-4 my-[100px]">
          <div className="title flex-1 md:pr-24 text-center md:text-left">
            <h1 className="text-[40px] md:text-[65px] leading-[45px] md:leading-[70px]  font-bold mb-5">
              Increase Your Customers Loyality and Satisfaction
            </h1>
            <p className="text-sm md:text-xl p-4 md:p-0 ">
              We help business like yours earn more customes, standout from
              competitors, make more money
            </p>
            <button className="mt-3 md:mt-10 px-5 py-2 font-semibold text-white border border-green-500 bg-green-500 rounded-lg">
              Get Started
            </button>
          </div>
          <div className="titleImg md:flex-1">
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-3 gap-4 p-8">
              <div className="img col-span-8 row-span-2">
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/bK1pzGc/Rectangle1241.png"
                    alt="Rectangle1241"
                    border="0"
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="img col-span-4 row-span-2 col-end-auto">
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/QDTWG85/Rectangle1242.png"
                    alt="Rectangle1242"
                    border="0"
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="img col-span-5 row-span-2">
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/M7QL6VV/Rectangle1243.png"
                    alt="Rectangle1243"
                    border="0"
                    className="h-full w-full"
                  />
                </a>
              </div>
              <div className="img col-span-7 row-span-2">
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/Ny8BV4B/Rectangle1244.png"
                    alt="Rectangle1244"
                    border="0"
                    className="h-full w-full object-fill"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
