/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import Banner from '../Banner/Banner';
import './Home.css';

function Home() {
    const [chef, setChef] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://legend-chef-server.vercel.app/chef')
            .then((res) => res.json())
            .then((data) => {
                setChef(data);
                setLoading(false);
            });
    }, []);
    const fixdScroll = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Banner />
            <div className="mt-16 container mx-auto px-4">
                <h1 className="text-4xl font-bold text-text-primary text-center uppercase">
                    Legend Chef
                </h1>
                <div className="border-4 border-slate-200 w-28 mx-auto rounded-lg mt-2 mb-5" />
                {loading ? (
                    <Spinner />
                ) : (
                    <LazyLoad>
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
                                                <p className="mb-1">
                                                    Experience: {c.experience} Years
                                                </p>
                                                <p>Total Recipes: {c.no_recipes}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <BsFillHeartFill
                                                    style={{ fontSize: 22, color: 'red' }}
                                                />
                                                {c.likes}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Link
                                            onClick={fixdScroll}
                                            to={`/recipes/${c.id}`}
                                            className=""
                                        >
                                            <button className="bg-primary text-center text-white py-4 px-6 w-full text-lg rounded-b-lg hover:bg-black duration-300">
                                                View Recipes
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </LazyLoad>
                )}
            </div>
        </div>
    );
}

export default Home;
