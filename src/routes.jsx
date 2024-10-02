import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Home from './components/Home';
// import About from './components/About';
import NotFound from './components/NotFound';
import Four04 from './components/Four04';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <NotFound />, 
      },
      {
        path: '/projects',
        element: <NotFound />, 
      },
      {
        path: '/careers',
        element: <NotFound />, 
      },{
        path: '/talk-to-us',
        element: <NotFound />, 
      },
      {
        path:"*",
        element:<Four04 />
      }
     
    ],
  },
]);

export default router;
