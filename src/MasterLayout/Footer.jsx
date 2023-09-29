import { FaFacebook, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer text-white ">
        <footer className="md:bg-gray-800 bg-gray-700 ">
          <div className="bg-gray-700  md:flex  container mx-auto justify-between gap-10 p-5 basis-12">
            <div className="">
              <div className="p-4 text-center md:text-left">
                <h1 className="text-2xl pb-5 text-white font-bold">
                  Design<span className="text-yellow-400">Agency</span>
                </h1>
                <p className="md:w-[255px] p-6 md:p-1 text-center md:text-left">
                  Some footer text about the Agency. Just a little description
                  to help people understand you better
                </p>
              </div>
              <div className="flex justify-center md:justify-start gap-4 pb-6 md:py-5 md:pl-3 ">
                <div>
                  <FaFacebook className="h-8 w-8 hover:text-blue-600 " />
                </div>
                <div>
                  <FaYoutube className="h-8 w-8 hover:text-red-600" />
                </div>
                <div>
                  <FaGithub className="h-8 w-8 hover:text-gray-600 hover:bg-white hover:rounded-full" />
                </div>
                <div>
                  <FaTwitter className="h-8 w-8 hover:text-indigo-600" />
                </div>
              </div>
            </div>
            <div className="text-center md:text-start">
              <p className="text-xl text-green-400 pb-4">Quick Links</p>
              <ul>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="text-center md:text-start pt-2 md:pt-0">
              <p className="text-xl text-green-400 pb-4">Address</p>
              <p>
                Design Agency Head Office,
                <br /> Airport Road <br /> United Arab Emirate
              </p>
            </div>
          </div>
          <p className="p-4 text-center text-sm text-white">
            Copyright Design Agency@2023
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
