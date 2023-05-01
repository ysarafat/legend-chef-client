/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css';

function Home() {
    const [chef, setChef] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then((res) => res.json())
            .then((data) => setChef(data));
    }, []);
    console.log(chef);
    return (
        <div>
            <Banner />
            <div className="mt-16 container mx-auto px-4">
                <h1 className="text-4xl font-bold text-text-primary text-center uppercase">
                    Legend Chef
                </h1>
                <div className="border-4 border-slate-200 w-28 mx-auto rounded-lg mt-2 mb-5" />
                <div className="flex gap-8 flex-wrap justify-between">
                    {chef?.map((c) => (
                        <div
                            key={c.id}
                            className="bg-white rounded-lg shadow hover:shadow-xl w-full lg:w-[31.91%] "
                        >
                            <img
                                className="w-full h-80 rounded-t-lg object-cover"
                                src={c.image}
                                alt=""
                            />
                            <div className="px-4 mb-5">
                                <h1 className="text-2xl font-semibold mt-3">{c.name}</h1>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="text-lg">
                                        <p className="mb-1">Experience: {c.experience} Years</p>
                                        <p>Total Recipes: {c.no_recipes}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <BsFillHeartFill style={{ fontSize: 22, color: 'red' }} />
                                        {c.likes}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary text-center text-white py-4 px-6 w-full text-lg rounded-b-lg hover:bg-black duration-300">
                                <Link to={`/recipes/${c.id}`} className="">
                                    View Recipes
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
