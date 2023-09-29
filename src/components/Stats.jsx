import { FaHeart } from "react-icons/fa6";

const Stats = () => {
  return (
    <>
      <div className="main">
        <div className="container mx-auto my-8">
          <div className="stats md:flex justify-center gap-4">
            <div className="shadow px-20 py-10 text-center">
              <span className="bg-green-100 p-5 rounded-lg inline-block">
                <FaHeart className="h-6 w-6" />
              </span>
              <p className="my-3 text-2xl font-bold">240452</p>
              <span className="font-semibold text-sm">Followers</span>
            </div>
            <div className="shadow px-20 py-10 text-center">
              <span className="bg-green-100 p-5 rounded-lg inline-block">
                <FaHeart className="h-6 w-6" />
              </span>
              <p className="my-3 text-2xl font-bold">240452</p>
              <span className="font-semibold text-sm">Followers</span>
            </div>
            <div className="shadow px-20 py-10 text-center">
              <span className="bg-green-100 p-5 rounded-lg inline-block">
                <FaHeart className="h-6 w-6" />
              </span>
              <p className="my-3 text-2xl font-bold">240452</p>
              <span className="font-semibold text-sm">Followers</span>
            </div>
            <div className="shadow px-20 py-10 text-center">
              <span className="bg-green-100 p-5 rounded-lg inline-block">
                <FaHeart className="h-6 w-6" />
              </span>
              <p className="my-3 text-2xl font-bold">240452</p>
              <span className="font-semibold text-sm">Followers</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
