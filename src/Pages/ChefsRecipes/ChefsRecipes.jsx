import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

function ChefsRecipes() {
    const recipes = useLoaderData();

    return (
        <>
            <div className="bg_img h-96">
                <h1>Yeair Arafat</h1>
            </div>
            <div className="mt-16 container mx-auto px-4 flex flex-wrap gap-6">
                {recipes?.map((recipe) => (
                    <Recipes key={recipe.id} recipes={recipe} />
                ))}
            </div>
        </>
    );
}

export default ChefsRecipes;
