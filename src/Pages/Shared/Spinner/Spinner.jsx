import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

function Spinner() {
    return (
        <div>
            <div className=" flex justify-center items-center min-h-[calc(100vh-81px)]">
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4DBF7B"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible
                />
            </div>
        </div>
    );
}

export default Spinner;
