import React from 'react';
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const UserLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default UserLayout;