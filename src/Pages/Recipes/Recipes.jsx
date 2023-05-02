/* eslint-disable camelcase */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Recipes.css';

function Recipes({ recipes }) {
    const { id, recipe, recipe_img, short_des, likes, ingredients, rating } = recipes;

    return (
        <section className="w-full lg:w-[32%] card-container">
            <div className="card border flex flex-col border-slate-200 rounded-lg hover:shadow">
                <div>
                    <div className="w-full lg:h-[300px] object-cover ">
                        <img className=" rounded-t-lg h-full w-full" src={recipe_img} alt="" />
                    </div>
                </div>
                <div className="px-4 flex-grow my-3">
                    <div>
                        <h1 className="lg:text-2xl text-xl font-bold">{recipe}</h1>
                        <p className="mt-2 text-text-secondary">{short_des}</p>
                        <div className="pt-3 pb-5">
                            <h4 className="text-xl">Ingredients: </h4>
                            {ingredients?.map((item) => (
                                <li>{item}</li>
                            ))}
                        </div>
                        <div className="flex items-center justify-between mt-auto text-lg">
                            <span className="flex items-center  gap-2 text-text-secondary">
                                <BsFillHeartFill style={{ fontSize: 22, color: 'red' }} /> {likes}
                            </span>

                            <span className="flex items-center gap-2  text-text-secondary">
                                <Rating style={{ maxWidth: 120 }} value={rating} readOnly />{' '}
                                {rating}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center text-lg  text-center ">
                    <button className="bg-primary  hover:bg-green-700 duration-300 w-full px-2 py-2 tex-lg rounded-sm text-white rounded-bl-lg">
                        Add Favorite
                    </button>
                    <Link
                        className=" bg-black hover:bg-slate-700 w-full px-2 py-2 rounded-sm text-white rounded-br-lg"
                        to={`/recipe/${id}`}
                    >
                        <button className="">Recipe Details</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Recipes;
