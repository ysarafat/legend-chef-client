import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProviders';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const {x} = useContext(AuthContext)
    console.log(x);
    return (
        <nav className="flex justify-between items-center container px-4 mx-auto py-5 border-b border-slate-100">
            <div>
                <h1 className="text-4xl font-bold ">Legend Chef</h1>
            </div>
            <ul className="lg:flex items-center gap-4 text-base hidden">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/recipes"
                        className={({ isActive }) =>
                            isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                        }
                    >
                        Recipes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                        }
                    >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                        }
                    >
                        Register
                    </NavLink>
                </li>
            </ul>
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? (
                        <Bars3Icon class="h-8 w-8 text-primary" />
                    ) : (
                        <XMarkIcon class="h-8 w-8 text-primary" />
                    )}
                </button>
                {isOpen && (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <ul
                        onClick={() => setIsOpen(!isOpen)}
                        className="absolute  duration-300 delay-500	 top-[79.34px] left-0 right-0 min-h-[calc(100vh-80px)]  w-full px-5 py-5 z-10 bg-[#C5EAD4] flex justify-center items-center flex-col gap-5  text-lg"
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/recipes"
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                                }
                            >
                                Recipes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'text-[#161616] hover:text-red-500'
                                }
                            >
                                Register
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
