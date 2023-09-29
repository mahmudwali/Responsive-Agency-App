import React from 'react';

const Subscribe = () => {
    return (
        <>
            <div className="container mx-auto my-20 ">
                <div className="main text-center">
                    <p className='py-5 uppercase text-green-500 font-semibold'>Subscribe</p>
                    <span className='text-2xl font-bold'>Subscribe to Get The Latest <br/> News About Us </span>
                    <p className='text-sm mt-2 mb-5'>Please drop your Email below to Get Daily Update About What We Do</p>
                </div>
                <div className="relative flex justify-center">
                    <input type="Email" placeholder='Enter Your Email' className='rounded-full px-4 py-3 w-96 border border-green-400 outline-none cursor-pointer'/>
                    <div className="absolute top-1 left-[65%] md:left-[57%]">
                        <button className='px-3 py-2 rounded-full border text-white font-semibold bg-green-500'>Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;