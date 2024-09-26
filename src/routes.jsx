import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Home from './components/Home';
// import About from './components/About';
// import NotFound from './components/NotFound';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Home />, // Home page
      },
     
    ],
  },
]);

export default router;
