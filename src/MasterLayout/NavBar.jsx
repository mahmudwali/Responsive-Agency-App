import React from 'react';



const NavBar = () => {
    return (
        <>
            <div className="header">
                <div className="shadow-lg p-4 container mx-auto my-5 flex justify-between items-center">
                    <div className="logo">
                        <h1 className='text-2xl font-bold'>Design<span className='text-yellow-400'>Agency</span></h1>
                    </div>
                    <nav className="nav hidden md:flex">
                        <ul className='flex font-semibold justify-between items-center gap-6'>
                            
                            <li>
                                Home
                            </li>
                            <li>
                                Team
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                Testimonials
                            </li>
                        </ul>
                    </nav>
                    <div className="hidden md:flex Btn font-semibold justify-between items-center gap-6">
                        <div> <button className='px-5 py-2 border border-green-500 rounded-lg'>Login</button> </div>
                        <div> <button className='px-5 py-2 border border-green-500 bg-green-500 rounded-lg'>Register</button> </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;