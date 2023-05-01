import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex justify-between items-center container px-4 mx-auto py-5">
            <div>
                <h1 className="text-4xl font-bold ">Legend Chef</h1>
            </div>
            <ul className="flex items-center gap-4 text-base">
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
        </nav>
    );
}

export default Navbar;
