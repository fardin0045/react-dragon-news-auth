import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='shadow-2xl mt-10 md:w-3/4 lg:w-1/2 mx-auto p-10 '>
                <h2 className='text-2xl font-bold  text-center my-7 text-[#403F3F]'> Login  your account</h2>
                <hr />
            <form  onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Email Address </span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl "> Your Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered
                                " required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#403F3F]">Login</button>
                            </div>
                            <h2  className='text-center font-medium pt-3' >Don't have account ? <Link className='text-red-500' to='/register'>Please Register</Link> </h2>
                        </form>
            </div>
            
        </div>
             
    );
};

export default Login;