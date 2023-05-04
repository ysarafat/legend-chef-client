/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProviders';
import Spinner from '../Shared/Spinner/Spinner';
import './Login.css';

function Login() {
    const { login, loginWithGoogle, loginWithGithub, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRref = useRef();
    const handelLogin = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(() => {
                toast.success('Login successfully');
                navigate(from, { replace: true });
                setLoading(true);
            })
            .catch((err) => {
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

    const handelPassReset = () => {
        const email = emailRref.current.value;
        setError('');
        resetPassword(email)
            .then(() => {
                alert('Please chaek your email');
            })
            .catch((err) => {
                setError(err.message);
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
        <div className="container mx-auto px-4 flex justify-center items-center  min-h-[calc(100vh-600px)] my-16 ">
            <div className=" border border-slate-200 p-5 w-full lg:w-[600px] rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
                <p className="my-4 text-red-500">{error}</p>
                <form onSubmit={handelLogin} className="flex flex-col">
                    <label htmlFor="" className="text-lg">
                        Email Address
                    </label>
                    <input
                        name="email"
                        ref={emailRref}
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
                        className="outline-none box-shadow rounded-lg px-3 h-11 w-full my-2 focus:border-s-8 border-primary"
                        type={showPass ? 'text' : 'password'}
                        placeholder="Enter Password"
                        required
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
                        className="h-11 w-full bg-primary hover:bg-black duration-300 cursor-pointer rounded-lg my-5 text-lg text-white"
                        type="submit"
                        value="Login"
                    />
                </form>
                <button onClick={handelPassReset} className="hover:text-primary underline mb-3 ">
                    Forgat Password?
                </button>
                <p className="mb-6">
                    Don’t have an account?{' '}
                    <Link className="text-primary underline " to="/register">
                        Create an account
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
                        className="w-full  flex justify-center items-center gap-3 border border-slate-200 shadow h-11 rounded-lg hover:shadow-lg cursor-pointer"
                    >
                        <FcGoogle size={30} /> <p>Login With Google</p>
                    </div>
                    <div
                        onClick={loginbyGithub}
                        className="w-full flex justify-center items-center gap-3 border border-slate-200 shadow h-11 rounded-lg hover:shadow-lg cursor-pointer"
                    >
                        <BsGithub size={30} /> <p>Login With Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
