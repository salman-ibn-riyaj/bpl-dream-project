import React from 'react';
import footerLogo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-[#06091A]'>

            <div className='flex justify-center'>
                <img className='mt-12' src={footerLogo} alt="" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto my-10'> 
                <div>
                    <h2 className='text-white text-2xl font-bold mb-3'>About US</h2>

                    <p className='text-gray-500'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </div>

                <div>
                    <h2 className='text-white text-2xl font-bold mb-3'>Quick Links</h2>

                    <ul className='text-gray-500'>
                        <li>Home</li>
                        <li>Teams</li>
                        <li>Fixture</li>
                        <li>Schedules</li>
                    </ul>
                </div>

                <div className='space-y-1.5'>
                    <h2 className='text-white text-2xl font-bold mb-3'>Subscribe</h2>

                    <p className='text-gray-500'>Subscribe to our newsletter for the <br /> latest updates.</p>

                    <form action="">
                        <input className='bg-white text-lime-700 p-3 rounded-md' type="email" name="" id="" placeholder='Enter your Email here'/>
                        
                        <button className='btn btn-primary'>Subscribe</button>
                    </form>
                </div>
            </div>

            <p className='text-center mt-10 text-fuchsia-500 font-bold'>@Salman Shah || All Right Reserved.</p>
            
        </div>
    );
};

export default Footer;