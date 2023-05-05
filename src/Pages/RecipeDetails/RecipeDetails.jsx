/* eslint-disable camelcase */
import React from 'react';
import {
    BsEyeFill,
    BsFacebook,
    BsFillHeartFill,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
} from 'react-icons/bs';
import LazyLoad from 'react-lazy-load';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';

function RecipeDetails() {
    const RecipeDetails = useLoaderData();
    const navigation = useNavigation();
    const { recipe_img, recipe, chef_name, description, likes, view, ingredients } = RecipeDetails;
    // window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: 'instant',
    // });
    if (navigation === 'loading') {
        return <Spinner />;
    }
    return (
        <div className="recipe container mx-auto px-4 mb-16">
            <LazyLoad threshold={0.95} offset={100}>
                <img
                    className="w-full lg:h-[650px] object-cover rounded-lg "
                    src={recipe_img}
                    alt=""
                />
            </LazyLoad>
            <div className="mt-4 mb-6 flex justify-between items-center flex-col lg:flex-row">
                <h1 className="text-3xl font-bold">Recipe: {recipe}</h1>
                <p className="text-text-secondary text-lg font-semibold">Chef: {chef_name}</p>
            </div>

            <div>
                <span className="font-bold text-black mr-2">
                    Recipe Description:
                    {ingredients?.map((item) => (
                        <li className="text-text-secondary">{item}</li>
                    ))}
                </span>

                <div className="font-bold text-black mr-2">
                    Cooking Method: <p className="text-text-secondary mt-2">{description}</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-9 flex-col-reverse lg:flex-row">
                <div className="flex items-center gap-2">
                    <span className="text-lg text-text-secondary font-bold">Share :</span>
                    <BsFacebook size={19} />
                    <BsTwitter size={19} />
                    <BsLinkedin size={19} />
                    <BsInstagram size={19} />
                </div>
                <div className="flex items-center gap-6 mb-4 lg:mb-0">
                    <span className="flex items-center gap-2 text-text-secondary">
                        <BsFillHeartFill style={{ fontSize: 22, color: 'red' }} /> {likes}
                    </span>
                    <span className="flex items-center gap-2 text-text-secondary">
                        <BsEyeFill style={{ fontSize: 25, color: '#65676B' }} /> {view}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails;
