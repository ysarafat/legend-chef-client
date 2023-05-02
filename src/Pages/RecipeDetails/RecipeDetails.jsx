import React from 'react';
import {
    BsEyeFill,
    BsFacebook,
    BsFillHeartFill,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
} from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';

function RecipeDetails() {
    const RecipeDetails = useLoaderData();
    const { recipe_img, recipe, chef_name, description, likes, view } = RecipeDetails;
    return (
        <div className="container mx-auto px-4">
            <img className="w-full h-[800px] object-cover rounded-lg " src={recipe_img} alt="" />
            <div className="mt-4 mb-6 flex justify-between items-center flex-col lg:flex-row">
                <h1 className="text-3xl font-bold">Recipe: {recipe}</h1>
                <p className="text-text-secondary text-lg font-semibold">Chef: {chef_name}</p>
            </div>

            <div className="text-text-secondary">
                <span className="font-bold text-black mr-2">Recipe Description:</span>
                {description}
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
