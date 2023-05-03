import React from 'react';

function Spinner() {
    return (
        <div>
            <div className=" flex justify-center items-center min-h-screen">
                <div className="border-8 border-dashed animate-spin  border-primary h-24 w-24 rounded-full" />
            </div>
        </div>
    );
}

export default Spinner;
