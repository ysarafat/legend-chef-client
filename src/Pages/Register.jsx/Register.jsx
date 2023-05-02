/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Register() {
    const [showPass, setShowPass] = useState(false);
    return (
        <section className="container mx-auto px-4 flex justify-center items-center min-h-[calc(100vh-600px)] mt-16">
            <div className=" border border-slate-200 p-5 w-full lg:w-[600px] rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
                <form className="flex flex-col">
                    <label htmlFor="" className="text-lg">
                        Full Name
                    </label>
                    <input
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type="text"
                        placeholder="Enter Your Name"
                    />
                    <label htmlFor="" className="text-lg">
                        Photo URL
                    </label>
                    <input
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type="text"
                        placeholder="Photo URL"
                    />
                    <label htmlFor="" className="text-lg">
                        Email Address
                    </label>
                    <input
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type="email"
                        placeholder="Enter Email"
                    />
                    <label htmlFor="" className="text-lg">
                        Password
                    </label>
                    <input
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type={showPass ? 'text' : 'password'}
                        placeholder="Enter Password"
                    />
                    <label htmlFor="" className="text-lg">
                        Confirm Password
                    </label>
                    <input
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type={showPass ? 'text' : 'password'}
                        placeholder="Enter Confirm Password"
                    />
                    <div className="flex items-center mt-2">
                        <input
                            onClick={() => setShowPass(!showPass)}
                            type="checkbox"
                            name="check"
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:text-primary dark:text-primary"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {showPass ? 'Hide Password' : 'Show Password'}{' '}
                        </label>
                    </div>
                    <input
                        className="h-11 w-full bg-primary rounded-lg my-5 text-lg text-white"
                        type="submit"
                        value="Register"
                    />
                </form>
                <p className="mb-6">
                    Already have an account?{' '}
                    <Link className="text-primary underline " to="/login">
                        Login
                    </Link>
                </p>
                <div className="flex justify-around items-center text-lg">
                    <div className="border border-slate-200 w-[40%]" />
                    or
                    <div className="border border-slate-200 w-[40%]" />
                </div>
                <div className="flex items-center lg:flex-row flex-col gap-6 mt-5 mb-2">
                    <div className="w-full   flex justify-center items-center  gap-3 border border-slate-200 shadow h-11 rounded-lg hover:shadow-lg cursor-pointer">
                        <FcGoogle size={30} /> <p>Login With Google</p>
                    </div>
                    <div className="w-full   flex justify-center items-center gap-3 border border-slate-200 shadow h-11 rounded-lg hover:shadow-lg cursor-pointer">
                        <BsGithub size={30} /> <p>Login With Github</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
