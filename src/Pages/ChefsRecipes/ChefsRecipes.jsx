/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import LazyLoad from 'react-lazy-load';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import Spinner from '../Shared/Spinner/Spinner';

function ChefsRecipes() {
    const [load, setLoad] = useState(true);
    const [chef, setChef] = useState([]);
    const recipes = useLoaderData();
    const navigation = useNavigation();
    const { id } = useParams();

    useEffect(() => {
        fetch('https://legend-chef-server.vercel.app/chef')
            .then((res) => res.json())
            .then((data) => {
                const findChef = data.find((d) => d.id == id);
                setChef(findChef);
                setLoad(false);
            });
    }, []);
    const { name, bio, likes, no_recipes, experience } = chef;
    const imageUrl = chef.image;
    const style = {
        backgroundImage: `linear-gradient(360deg, hsla(0, 0%, 0%, 0.485) 0%, rgba(0, 0, 0, 0.485) 100%), url(${imageUrl})`,
    };

    if (navigation.state === 'loading') {
        return <Spinner />;
    }

    return (
        <div className="mb-16">
            <LazyLoad width="100%" threshold={1} offset={0}>
                <div
                    style={style}
                    className="bg-no-repeat w-full h-[500px] lg:h-[600px] bg-top bg-cover "
                >
                    <div className="container mx-auto px-4 flex flex-col gap-4 justify-center items-center h-full">
                        <h1 className="text-white text-3xl lg:text-6xl font-extrabold">{name}</h1>
                        <p className="text-slate-200 text-lg lg:w-[70%] text-center">{bio}</p>
                        {load ? (
                            ''
                        ) : (
                            <div className="flex items-center flex-col lg:flex-row lg:mt-6 gap-4 lg:gap-20 text-white text-xl">
                                <span className="flex items-center gap-2 ">
                                    <BsHeartFill size={25} /> {likes}
                                </span>

                                <span>Recipes: {no_recipes}</span>
                                <span>Experience: {experience} Years</span>
                            </div>
                        )}
                    </div>
                </div>
            </LazyLoad>
            <div className=" container mx-auto px-4 flex flex-wrap gap-6  mt-16">
                {recipes?.map((recipe) => (
                    <Recipes key={recipe.id} recipes={recipe} />
                ))}
            </div>
        </div>
    );
}

export default ChefsRecipes;
