/* eslint-disable camelcase */
import React from 'react';
import { BsArrowRightCircle, BsEyeFill, BsFillHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Recipes({ recipes }) {
    const { id, recipe, recipe_img, short_des, likes, view } = recipes;

    return (
        <section className="w-full lg:w-[49%]">
            <div className="flex flex-col lg:flex-row gap-4 border  border-slate-200 rounded-lg hover:shadow">
                <div>
                    <div className='w-full lg:w-[300px] lg:h-[200px] object-cover '><img
                        className="rounded-lg lg:rounded-s-lg h-full w-full"
                        src={recipe_img}
                        alt=""
                    /></div>
                </div>
                <div className="flex gap-6 items-center px-2 lg:px-0">
                    <div className="py-3 flex-1">
                        <h1 className="lg:text-2xl text-xl font-bold">{recipe}</h1>
                        <p className="mt-2 text-text-secondary">{short_des}</p>
                        <div className="flex items-center mt-5 gap-4">
                            <span className="flex items-center gap-2 text-text-secondary">
                                <BsFillHeartFill style={{ fontSize: 22, color: 'red' }} /> {likes}
                            </span>
                            <span className="flex items-center gap-2 text-text-secondary">
                                <BsEyeFill style={{ fontSize: 25, color: '#65676B' }} /> {view}
                            </span>
                            <button className="bg-primary px-2 py-1 rounded-sm text-white">
                                Add Favarit
                            </button>
                        </div>
                    </div>
                    <div className="pr-4 hover:text-black">
                        <Link to={`/recipe/${id}`}>
                            {' '}
                            <BsArrowRightCircle
                                style={{
                                    fontSize: 30,
                                    color: '#4DBF7B',
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Recipes;
