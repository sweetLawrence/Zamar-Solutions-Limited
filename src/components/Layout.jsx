
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         <Outlet />
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Layout;


import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import FindUs from "./HomeComponents.jsx/FindUs";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
   
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
      <FindUs />
    </div>
  );
};

export default Layout;
