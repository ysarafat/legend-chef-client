import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import ChefsRecipes from '../Pages/ChefsRecipes/ChefsRecipes';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import RecipeDetails from '../Pages/RecipeDetails/RecipeDetails';
import Register from '../Pages/Register.jsx/Register';

const router = new createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                element: <ChefsRecipes />,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`),
            },
            {
                path: '/recipe/:id',
                element: <RecipeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/recipe/${params.id}`),
            },
            {},
        ],
    },
]);
export default router;
