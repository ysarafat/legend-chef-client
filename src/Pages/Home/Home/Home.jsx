/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import LazyLoad from 'react-lazy-load';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Map from '../../../Components/Map';
import Spinner from '../../Shared/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import Offer from '../Offer/Offer';
import './Home.css';

function Home() {
    const chef = useLoaderData();
    const navigation = useNavigation();

    const handelScroll = () => {
        window.scrollTo(0, 0);
    };
    if (navigation.state === 'loading') {
        return <Spinner />;
    }
    console.log(chef);
    return (
        <div>
            <Banner />
            <div className="mt-16 container mx-auto px-4">
                <h1 className="text-4xl font-bold text-text-primary text-center uppercase">
                    Legend Chef
                </h1>
                <div className="border-4 border-slate-200 w-28 mx-auto rounded-lg my-2 " />
                <p className="lg:w-1/3 mx-auto text-center mb-5 text-text-secondary text-lg ">
                    Here are the top legendary chefs of USA who share their recipes
                </p>

                <LazyLoad>
                    <div className="flex gap-8 flex-wrap justify-between">
                        {chef?.map((c) => (
                            <div
                                key={c.id}
                                className="bg-white rounded-lg shadow hover:shadow-xl w-full lg:w-[31.91%] "
                            >
                                <LazyLoad width="100%" height="320px" threshold={0.95} offset={1}>
                                    <img
                                        className="w-full h-80 rounded-t-lg object-cover"
                                        src={c.image}
                                        alt=""
                                    />
                                </LazyLoad>
                                <div className="px-4 mb-5">
                                    <h1 className="text-2xl font-semibold mt-3">{c.name}</h1>
                                    <div className="flex justify-between items-center mt-4">
                                        <div className="text-lg">
                                            <p className="mb-1">Experience: {c.experience} Years</p>
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
                                    <Link to={`/recipes/${c.id}`} className="">
                                        <button
                                            onClick={handelScroll}
                                            className="bg-primary text-center text-white py-4 px-6 w-full text-lg rounded-b-lg hover:bg-black duration-300"
                                        >
                                            View Recipes
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </LazyLoad>

                <Offer />
                <Newsletter />
            </div>
            <Map />
        </div>
    );
}

export default Home;
