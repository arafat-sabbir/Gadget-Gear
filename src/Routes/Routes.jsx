import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import DetailProduct from "../Pages/DetailProduct/DetailProduct";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Brandproduct from "../Pages/BrandProduct/Brandproduct";
import SignUp from "../Pages/SignUp/SignUp";
import AddProduct from "../Pages/AddProduct/Addproduct";
import SignIn from "../Pages/SignIn/SignIn";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MainLayout from "../Pages/MainLayout";
import MyCart from "../Pages/MyCart/MyCart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:brandname",
        element: (
          <PrivateRoute>
            <Brandproduct></Brandproduct>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://gadgetgear-server.vercel.app/product/${params.brandname}`
          );
        },
      },
      {
        path: "/items/:id",
        element: (
          <PrivateRoute>
            <ProductDetail></ProductDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadgetgear-server.vercel.app/items/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <DetailProduct></DetailProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://gadgetgear-server.vercel.app/items/${params.id}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default routes;
