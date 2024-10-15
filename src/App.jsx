import "./App.css";
import React, { useEffect } from "react";
import { RouterProvider,useLocation } from "react-router-dom";
import router from "./routes";

function App() {


  useEffect(() => {
    document.title =
      __APP_ENV__ === "prod"
        ? "Zamar Solutions"
        : "Zamar Solutions";
  }, []);


  return (
    <div className="App">
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
