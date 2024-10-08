import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import FindUs from "./HomeComponents.jsx/FindUs.jsx";

const Layout = () => {
    return (
        <>
            <Navbar/>
            {/*<main>*/}
            <Outlet/>
            {/*</main>*/}
            {/* <Footer /> */}
            <FindUs />
        </>
    );
};

export default Layout;
