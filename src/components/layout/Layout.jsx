import { Outlet } from "react-router-dom";
import { Navbar } from "./NavBar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};