import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userDefaultPicture from '../../../assets/user.png'
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li> <NavLink to='/'> Home</NavLink></li>
        <li> <NavLink to='/about'> About</NavLink></li>
        <li> <NavLink to='/career'> Career</NavLink></li>
        
</>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <button className="btn btn-ghost btn-circle w-10">
                       <img src={userDefaultPicture} alt="" />
                    </button>
                    {
                        user ?  <button  onClick={handleSignOut} className='ml-3 bg-[#403F3F] text-white rounded-none p-2 px-6'> Sign Out</button> : <Link to='/login'>
                        <button className='ml-3 bg-[#403F3F] text-white rounded-none p-2 px-6'> Login</button>
                    </Link>
                    }
                    

                </div>
            </div>
        </div>
    );
};

export default Navbar;