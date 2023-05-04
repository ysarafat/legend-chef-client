import React from 'react';
import {
    BsEnvelope,
    BsFacebook,
    BsFillTelephoneFill,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#333333] text-slate-300 ">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 container mx-auto px-4 justify-items-center-start lg:justify-items-center py-14 ">
                <div className="">
                    <h1 className="text-white font-bold text-xl lg:text-3xl bold ">
                        LEGEND <span className="text-primary">CHEF</span>
                    </h1>
                    <p className="mt-2">
                        A legendary chef is a culinary master who has achieved worldwide recognition
                        and acclaim for their culinary expertise, creativity, and innovation.
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                        <BsFacebook style={{ color: '#0A81EC' }} size={30} />
                        <BsInstagram style={{ color: '#F74406' }} size={30} />
                        <BsTwitter style={{ color: '#1DA1F2' }} size={30} />
                        <BsLinkedin style={{ color: '#0077B5' }} size={30} />
                    </div>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">RESOURCES</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <li>
                                <Link to="/">All Recipe</Link>
                            </li>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/">About us</Link>
                        </li>
                        <li>
                            <Link to="/">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">FOLLOW US</h2>
                    <ul>
                        <li>
                            <Link to="/"> Facebook Page </Link>
                        </li>
                        <li>
                            <Link to="/"> Facebook Group </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white font-bold mb-2 text-lg">CONTACT</h2>
                    <p>1286 Hinkle Deegan Lake Road</p>
                    <p>14850-NY, USA</p>
                    <p className="flex items-center gap-2">
                        <BsFillTelephoneFill />
                        +1 607-266-7597
                    </p>
                    <p className="flex items-center gap-2">
                        <BsEnvelope />
                        admin@legend-chef.com
                    </p>
                </div>
            </div>
            <div className="text-center border-t border-slate-600 container mx-auto px-4 py-5">
                &#169;2023 Legend Chef, All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
