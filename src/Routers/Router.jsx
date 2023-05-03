import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Blog from '../Pages/Blog/Blog';
import ChefsRecipes from '../Pages/ChefsRecipes/ChefsRecipes';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import RecipeDetails from '../Pages/RecipeDetails/RecipeDetails';
import Register from '../Pages/Register/Register';
import ProtectRoute from './ProtectRoute';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/recipes/:id',
                element: (
                    <ProtectRoute>
                        <ChefsRecipes />
                    </ProtectRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://legend-chef-server.vercel.app/chef/${params.id}`),
            },
            {
                path: '/recipe/:id',
                element: (
                    <ProtectRoute>
                        <RecipeDetails />
                    </ProtectRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://legend-chef-server.vercel.app/recipe/${params.id}`),
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: () => fetch('https://legend-chef-server.vercel.app/blogs'),
            },
        ],
    },
]);
export default router;
