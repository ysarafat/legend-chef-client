import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

function Main() {
    return (
        <div>
            <Navbar />
            <section className="min-h-[calc(100vh-419px)]">
                <Outlet />
            </section>
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default Main;
