/* eslint-disable camelcase */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BsFillHeartFill } from 'react-icons/bs';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import './Recipes.css';

function Recipes({ recipes }) {
    const [disabled, setDisabled] = useState(false);
    const { id, recipe, recipe_img, likes, ingredients, rating, description } = recipes;
    const handelFvrBtn = () => {
        setDisabled(true);
        toast.success('Recipe has been Favorite successfully');
    };
    const fixdScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    };
    return (
        <section className="w-full lg:w-[32%] card-container">
            <LazyLoad height={762}>
                <div className="card border flex flex-col border-slate-200 rounded-lg hover:shadow">
                    <div>
                        <div className="w-full lg:h-[300px] object-cover ">
                            <img className=" rounded-t-lg h-full w-full" src={recipe_img} alt="" />
                        </div>
                    </div>
                    <div className="px-4 flex-grow my-3">
                        <div>
                            <h1 className="lg:text-2xl text-xl font-bold">{recipe}</h1>
                            <div className="py-3 ">
                                <h4 className="text-lg">Ingredients: </h4>
                                {ingredients?.map((item) => (
                                    <li className="text-text-secondary">{item}</li>
                                ))}
                            </div>

                            <p className="pb-2 text-text-secondary ">
                                <h4 className="text-lg text-black">Cooking Method: </h4>
                                {description.slice(0, 150)}...
                                <Link
                                    onClick={fixdScroll}
                                    className="text-primary font-semibold hover:text-red-500 duration-300 "
                                    to={`/recipe/${id}`}
                                >
                                    Read More
                                </Link>
                            </p>

                            <div className="flex items-center justify-between mt-auto text-lg">
                                <span className="flex items-center  gap-2 text-text-secondary">
                                    <BsFillHeartFill style={{ fontSize: 22, color: 'red' }} />{' '}
                                    {likes}
                                </span>

                                <span className="flex items-center gap-2  text-text-secondary">
                                    <Rating style={{ maxWidth: 120 }} value={rating} readOnly />{' '}
                                    {rating}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center text-lg  text-center ">
                        <button
                            onClick={handelFvrBtn}
                            disabled={disabled}
                            className="bg-primary disabled:bg-gray-400  hover:bg-black duration-300 w-full px-2 py-2 tex-lg text-white rounded-b-lg"
                        >
                            {disabled ? 'Already Add To Favorite' : 'Add To Favorite'}
                        </button>
                    </div>
                </div>
            </LazyLoad>
            <Toaster position="top-center" reverseOrder={false} />
        </section>
    );
}

export default Recipes;
