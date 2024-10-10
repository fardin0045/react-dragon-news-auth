import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-5'>
                <h2 className="text-2xl font-bold">Login With</h2>
                <button className="btn btn-outline w-full text-blue-500">
                   <p><FaGoogle /> </p>
                  Login with Google
                </button>
                <button className="btn btn-outline w-full text-gray-500">
                   <p><FaGithub /> </p>
                  Login with Github 
                </button>
            </div>
            <div className='p-4 '>
                <h2 className="text-2xl font-bold mb-5">Find Us On</h2>
                <a href="" className='p-4 flex text-xl font-medium items-center border rounded-t-lg '>
                    <FaFacebook className='mr-3'></FaFacebook>
                    <p>Facebook</p>
                </a>
                <a href="" className='p-4 flex text-xl font-medium items-center border-x rounded-t-lg '>
                    <FaTwitter className='mr-3'></FaTwitter>
                    <p>Twitter</p>
                </a>
                <a href="" className='p-4 flex text-xl font-medium items-center border rounded-t-lg '>
                    <FaInstagram className='mr-3'></FaInstagram>
                    <p>Instagram</p>
                </a>
            </div>
            {/* Q zone */}
            <div className=' mt-2 p-2 space-y-3 mb-5 bg-[#F3F3F3]'>
                <h2 className="text-2xl font-bold pt-2">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;