import styles from "./FeatureProject.module.css";

import Mask1 from "../assets/images/Project/Mask1.png";
import Mask2 from "../assets/images/Project/Mask2.png";
import Mask3 from "../assets/images/Project/Mask3.png";
import Mask4 from "../assets/images/Project/Mask4.png";
import Mask5 from "../assets/images/Project/Mask5.png";

const FeatureProject = () => {
  return (
    <>
      <div className="container mx-auto my-20">
        <div>
          <div className="title text-center md:text-start">
            <h1 className="text-green-500 uppercase">Featured Project</h1>
            <p className="pt-[15px] pb-[40px] font-bold md:w-[370px] text-2xl">
              We Provide the Perfect Solution to your business growth
            </p>
          </div>
          <div className="project grid gap-6 md:grid-flow-col lg:grid-cols-12 lg:grid-rows-2 md:py-5">
            <div className="project1  col-span-6 row-span-2 ">
              <img src={Mask1} alt="" className=" w-[100%]" />
              <p className="text-sm py-4 text-gray-400">
                App Design - June 20, 2022
              </p>
              <p className="text-xl font-bold">App Redesign</p>
            </div>
            <div className="project2 col-span-3 ">
              <img src={Mask2} alt="" className=" w-[100%]" />
              <p className="text-sm py-4 text-gray-400">
                App Design - June 20, 2022
              </p>
              <p className="text-xl font-bold">
                Redesign Channel Website Landing Page
              </p>
            </div>
            <div className="project3 col-span-3">
              <img src={Mask3} alt="" className=" w-[100%]" />
              <p className="text-sm py-4 text-gray-400">
                App Design - June 20, 2022
              </p>
              <p className="text-xl font-bold">
                Redesign Channel Website Landing Page
              </p>
            </div>
            <div className="project4 col-span-3">
              <img src={Mask4} alt="" className=" w-[100%]" />
              <p className="text-sm py-4 text-gray-400">
                App Design - June 20, 2022
              </p>
              <p className="text-xl font-bold">
                Redesign Channel Website Landing Page
              </p>
            </div>
            <div className="project5 col-span-3">
              <img src={Mask5} alt="" className=" w-[100%]" />
              <p className="text-sm py-4 text-gray-400">
                App Design - June 20, 2022
              </p>
              <p className="text-xl font-bold">
                Redesign Channel Website Landing Page
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProject;
