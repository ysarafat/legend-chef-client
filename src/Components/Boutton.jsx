import React from 'react';

function Boutton({ children }) {
    return (
        <button className="bg-primary text-white py-4 px-6 text-lg rounded-lg">{children}</button>
    );
}

export default Boutton;
