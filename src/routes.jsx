import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// import Home from './components/Home';
// import About from './components/About';
import NotFound from './components/NotFound';
import Four04 from './components/Four04';
import About from './pages/About';
import Careers from './pages/Careers';
import Projects from './pages/ProjectsPage';
import ProjectsPage from './pages/ProjectsPage';
import TalkToUs from './pages/TalkToUs';


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
        element: <About />, 
      },
      {
        path: '/projects',
        element: <ProjectsPage />, 
      },
      {
        path: '/careers',
        element: <Careers />, 
      },{
        path: '/talk-to-us',
        element: <TalkToUs />, 
      },
      {
        path:"*",
        element:<Four04 />
      }
     
    ],
  },
]);

export default router;
