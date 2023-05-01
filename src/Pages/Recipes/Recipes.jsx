/* eslint-disable camelcase */
import React from 'react';
import { BsArrowRightCircle, BsEyeFill, BsFillHeartFill } from 'react-icons/bs';

function Recipes({ recipes }) {
    const { recipe, recipe_img, short_des, likes, view } = recipes;

    return (
        <section className="w-full lg:w-[49%]">
            <div className="flex gap-4 border  border-slate-200 rounded-lg hover:shadow">
                <div>
                    <img
                        className="w-[300px] h-[180px] object-cover rounded-s-lg"
                        src={recipe_img}
                        alt=""
                    />
                </div>
                <div className="flex gap-6 items-center">
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
                        <BsArrowRightCircle
                            style={{
                                fontSize: 30,
                                color: '#4DBF7B',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Recipes;
