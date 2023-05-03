import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function Error() {
    const { error, status } = useRouteError();
    return (
        <div className="flex bg-[url('https://img.freepik.com/free-photo/colorful-abstract-textured-background-design_53876-108265.jpg?w=1380&t=st=1683114526~exp=1683115126~hmac=ecc5dfa67594709215597c92d58d45132c1a7a8f4859d80b098c3a9629737257')] bg-cover bg-no-repeat items-center h-screen p-16 bg-gray-100 text-gray-900">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 flex items-center gap-4 font-extrabold text-6xl justify-center text-gray-600">
                        <span className="">Error</span> {status || 404}
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl mb-8">{error?.message}</p>
                    <Link
                        to="/"
                        className="px-8 py-3 font-semibold rounded btn bg-primary text-white hover:bg-black duration-300"
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Error;
