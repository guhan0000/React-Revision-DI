import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import History from "../pages/History";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";
import Team from "../pages/Team";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
        children: [
          { path: "team", element: <Team /> },
          { path: "history", element: <History /> },
          { path: "achievements", element: <Achievements /> },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
    ],
  },
  // { path: "/", element: <Home /> },
  // {
  //   path: "/about",
  //   element: <About />,
  //   children: [
  //     { path: "team", element: <Team /> },
  //     { path: "history", element: <History /> },
  //     { path: "achievements", element: <Achievements /> },
  //   ],
  // },
  // { path: "/contact", element: <Contact /> },
  // { path: "/product", element: <Product /> },
  // { path: "/product/:id", element: <ProductDetails /> },
];
export default routes;
