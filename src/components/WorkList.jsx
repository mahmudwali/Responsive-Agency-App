import { FaHeart, FaArrowRightLong } from "react-icons/fa6";

const WorkList = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="main py-[67px] text-center md:text-start">
          <div className="title ">
            <h1 className="text-green-500 uppercase">Work List</h1>
            <p className="px-5 md:px-0 text-center md:text-start pt-[15px] pb-[40px] font-bold md:w-[370px] text-2xl">
              We Provide the Perfect Solution to your business growth
            </p>
          </div>
          <div className="card gap-2 md:flex justify-center">
            <div className="card-1 rounded-lg shadow p-[30px]">
              <div className="icon pb-[15px] ">
              <span className="bg-green-100 p-5 rounded-lg inline-block"><FaHeart className="h-6 w-6"/></span>
              </div>
              <div className="text pb-[43px] ">
                <h1 className="pb-[15px] text-2xl font-semibold">Grow Your Business</h1>
                <p className="md:w-[235px]">We help identify the best ways to improve your business</p>
              </div>
              <div>
                <button className="flex items-center gap-2">Learn More <FaArrowRightLong/> </button>
              </div>
            </div>
            <div className="card-1 rounded-lg shadow p-[30px]">
              <div className="icon pb-[15px] ">
              <span className="bg-green-100 p-5 rounded-lg inline-block"><FaHeart className="h-6 w-6"/></span>
              </div>
              <div className="text pb-[43px] ">
                <h1 className="pb-[15px] text-2xl font-semibold">Grow Your Business</h1>
                <p className="md:w-[235px]">We help identify the best ways to improve your business</p>
              </div>
              <div>
                <button className="flex items-center gap-2">Learn More <FaArrowRightLong/> </button>
              </div>
            </div>
            <div className="card-1 rounded-lg shadow p-[30px]">
              <div className="icon pb-[15px] ">
              <span className="bg-green-100 p-5 rounded-lg inline-block"><FaHeart className="h-6 w-6"/></span>
              </div>
              <div className="text pb-[43px] ">
                <h1 className="pb-[15px] text-2xl font-semibold">Grow Your Business</h1>
                <p className="md:w-[235px]">We help identify the best ways to improve your business</p>
              </div>
              <div>
                <button className="flex items-center gap-2">Learn More <FaArrowRightLong/> </button>
              </div>
            </div>
            <div className="card-1 rounded-lg shadow p-[30px]">
              <div className="icon pb-[15px] ">
              <span className="bg-green-100 p-5 rounded-lg inline-block"><FaHeart className="h-6 w-6"/></span>
              </div>
              <div className="text pb-[43px] ">
                <h1 className="pb-[15px] text-2xl font-semibold">Grow Your Business</h1>
                <p className="md:w-[235px]">We help identify the best ways to improve your business</p>
              </div>
              <div>
                <button className="flex items-center gap-2">Learn More <FaArrowRightLong/> </button>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkList;
