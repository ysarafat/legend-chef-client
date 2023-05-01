/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Boutton from '../../../Components/Boutton';
import './Banner.css';

function Banner() {
    return (
        <section className="bg_img">
            <div className="flex flex-col lg:flex-row justify-between items-center  container mx-auto px-4">
                <div className="lg:w-1/2 pt-10 lg:pt-0 ">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-white	 uppercase font-bold">
                        Savor the Good Life with Our Chef's Creations
                    </h1>
                    <p className="text-base text-slate-200 my-5">
                        The phrase emphasizes the idea that food is not just nourishment, but an
                        experience to be enjoyed and savored. It also conveys the notion that the
                        chef's creations are of high quality and made with care, resulting in a
                        memorable culinary experience.
                    </p>
                    <Boutton>Contact Us</Boutton>
                </div>
                <div className="lg:pt-10 lg:w-1/2">
                    <img className="h-[500px]" src="/public/chef.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Banner;
