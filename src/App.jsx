import "./App.css";
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  useEffect(() => {
    document.title =
      __APP_ENV__ === "prod"
        ? "Zamar Solutions - Production Mode"
        : "Zamar Solutions - Dev Mode";
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
