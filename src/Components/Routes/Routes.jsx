import { createBrowserRouter } from "react-router-dom"
import AddProduct from "../Products/AddProduct/AddProduct"
import Root from "../Root/Root"
import Category from "../Category/Category"
import Apple from "../Apple/Apple"
import UpdateProduct from "../UpdateProduct/UpdateProduct"
import SignIn from "../SignIn/SignIn"
import Brand from "../Apple/Brand"
import Register from "../Register/Register"
import Error from "../Error/Error"
import PrivateRoutes from "./PrivateRoute"
import ProductDetails from "../ProductDetails/ProductDetails"
import Carts from "../Carts/Carts"

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Category></Category>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('https://backend-73cdq6wim-uzzalpahan.vercel.app/products')
            },
            {
                path: '/update/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`https://backend-73cdq6wim-uzzalpahan.vercel.app/update/${params.id}`)
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/apple/:category',
                element: <PrivateRoutes><Brand></Brand></PrivateRoutes>,
                loader: ({params}) => fetch(`https://backend-73cdq6wim-uzzalpahan.vercel.app/apple/${params.category}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/productdetails/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({params})=>fetch(`https://backend-73cdq6wim-uzzalpahan.vercel.app/update/${params.id}`)
            },
            {
                path: '/carts',
                element: <PrivateRoutes><Carts></Carts></PrivateRoutes>,
                loader: () =>fetch("https://backend-73cdq6wim-uzzalpahan.vercel.app/carts")
            }
        ]
    }
])

export default Routes