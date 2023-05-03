import React from 'react';

function Boutton({ children }) {
    return (
        <button className="bg-primary text-white py-3 px-6 text-lg rounded-lg hover:bg-black duration-300">
            {children}
        </button>
    );
}

export default Boutton;
