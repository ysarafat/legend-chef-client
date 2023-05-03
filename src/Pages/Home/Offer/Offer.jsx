import React from 'react';
import './offer.css';

function Offer() {
    return (
        <div className="offer_bg w-full container mx-auto rounded-lg mt-16">
            <div className="container mx-auto px-4 flex justify-between items-center flex-col lg:flex-row py-8">
                <img
                    className="lg:max-w-[800px] max-h-[700px]"
                    src="https://i.ibb.co/CKbMLXY/My-project.png"
                    alt=""
                />
                <div>
                    <h1 className="lg:text-7xl text-4xl text-white  font-bold ">
                        Limited offer by using promo code{' '}
                        <span className="text-primary">Only $15</span>
                    </h1>
                    <div className="flex items-center mt-5 gap-6">
                        <button
                            title="copy promo code"
                            className="py-2 px-6 bg-transparent border border-white text-lg text-white rounded-lg hover:bg-black duration-300"
                        >
                            #LGCHEF15%
                        </button>
                        <button className="py-2 px-6 bg-primary text-lg border border-primary hover:border-white text-white rounded-lg hover:bg-black duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Offer;
