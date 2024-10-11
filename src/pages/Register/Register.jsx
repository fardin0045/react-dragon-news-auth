import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from '../../providers/AuthProviders';

const Register = () => {
    const { createUser} = useContext(AuthContext);
    


    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password,name,photo);
        // create user
        createUser(email, password)
        .then(result =>{
           console.log(result.user);
            
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        
        <div>
            <Navbar></Navbar>
            <div className='shadow-2xl mt-10 md:w-3/4 lg:w-1/2 mx-auto p-10 '>
                <h2 className='text-2xl font-bold  text-center my-7 text-[#403F3F]'> Register Your account</h2>
                <hr />
            <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Your Name </span>
                                </label>
                                <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Photo Url </span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo url" className="input input-bordered"  />
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-[#403F3F]">Email Address </span>
                                </label>
                                <input name="email" type="email" placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl text-[#403F3F]"> Your Password</span>
                                </label>
                                <input name="password" type="password" placeholder="your password" className="input input-bordered 
                                " required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#403F3F]">Register</button>
                            </div>
                            <h2  className='text-center font-medium pt-3' >Already have account ? <Link className='text-red-500' to='/login'> Please Login</Link> </h2>
                        </form>
            </div>
            
        </div>
    );
};

export default Register;