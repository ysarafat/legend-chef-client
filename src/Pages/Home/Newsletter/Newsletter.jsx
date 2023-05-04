import { useLottie } from 'lottie-react';
import React from 'react';
import news from '../../../assets/newScene.json';

function Newsletter() {
    const options = {
        animationData: news,
        loop: true,
    };
    const { View } = useLottie(options);
    return (
        <div className="my-12 bg-slate-200 py-5 px-4 text-center rounded-lg">
            <div className="h-56 w-56 mx-auto">{View}</div>
            <h1 className="text-4xl font-bold ">Get Newsletter</h1>
            <p className="text-center text-text-secondary text-lg mt-2 mb-4">
                Subscribe our newsletter to get a 15% discount your next shop
            </p>
            <form className="flex flex-col mx-auto  lg:w-1/3">
                <input
                    className="h-11 px-3 outline-none w-full rounded-lg shadow-lg focus:border-s-8 border-primary"
                    placeholder="Your e-mail address"
                    type="email"
                    required
                />
                <input
                    className="h-11 w-full bg-primary hover:bg-black duration-300 cursor-pointer rounded-lg my-5 text-lg text-white"
                    type="submit"
                    value="Subscribe"
                />
            </form>
        </div>
    );
}

export default Newsletter;
