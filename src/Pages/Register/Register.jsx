/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProviders';
import Spinner from '../Shared/Spinner/Spinner';

function Register() {
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { createUser, updateUser, loginWithGoogle, loginWithGithub } = useContext(AuthContext);

    const handelRegister = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.cPassword.value;
        if (password !== confirmPassword) {
            return setError('Your password did not match');
        }
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)) {
            return setError(
                'Password must be a minimum of 6 digits and must be a letter A-Z with a special character'
            );
        }
        createUser(email, password)
            .then(() => {
                setLoading(true);
                navigate(from, { replace: true });
                updateUser(name, photo);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });
    };
    const loginByGoogle = () => {
        loginWithGoogle()
            .then(() => {
                toast.success('Login successfully');
                navigate(from, { replace: true });
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const loginbyGithub = () => {
        loginWithGithub()
            .then(() => {
                toast.success('Login successfully');
                navigate(from, { replace: true });
                setLoading(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
    });
    if (loading) {
        return <Spinner />;
    }
    return (
        <section className="container mx-auto px-4 flex justify-center items-center min-h-[calc(100vh-600px)] my-16">
            <div className=" border border-slate-200 p-5 w-full lg:w-[600px] rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
                <p className="my-4 text-red-500">{error}</p>
                <form onSubmit={handelRegister} className="flex flex-col">
                    <label htmlFor="" className="text-lg">
                        Full Name
                    </label>
                    <input
                        name="name"
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type="text"
                        placeholder="Enter Your Name"
                        required
                    />
                    <label htmlFor="" className="text-lg">
                        Photo URL
                    </label>
                    <input
                        name="photo"
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type="text"
                        placeholder="Photo URL"
                    />
                    <label htmlFor="" className="text-lg">
                        Email Address
                    </label>
                    <input
                        name="email"
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type="email"
                        placeholder="Enter Email"
                        required
                    />
                    <label htmlFor="" className="text-lg">
                        Password
                    </label>
                    <input
                        name="password"
                        required
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type={showPass ? 'text' : 'password'}
                        placeholder="Enter Password"
                    />
                    <label htmlFor="" className="text-lg">
                        Confirm Password
                    </label>
                    <input
                        name="cPassword"
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type={showPass ? 'text' : 'password'}
                        placeholder="Enter Confirm Password"
                        required
                    />
                    <div className="flex items-center mt-2">
                        <input
                            onClick={() => setShowPass(!showPass)}
                            type="checkbox"
                            name="check"
                            className="w-4 h-4  text-primary bg-gray-100 border-gray-300 rounded focus:text-primary dark:text-primary"
                        />
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {showPass ? 'Hide Password' : 'Show Password'}{' '}
                        </label>
                    </div>
                    <input
                        className="h-11 w-full bg-primary hover:bg-black duration-300 cursor-pointer rounded-lg my-5 text-lg text-white"
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
                    <div
                        onClick={loginByGoogle}
                        className="w-full   flex justify-center items-center  gap-3 border border-slate-200 shadow h-11 rounded-lg hover:shadow-lg cursor-pointer"
                    >
                        <FcGoogle size={30} /> <p>Login With Google</p>
                    </div>
                    <div
                        onClick={loginbyGithub}
                        className="w-full   flex justify-center items-center gap-3 border border-slate-200 shadow h-11 rounded-lg hover:shadow-lg cursor-pointer"
                    >
                        <BsGithub size={30} /> <p>Login With Github</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
