import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetails from "../pages/ProductDetails";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/product", element: <Product /> },
  { path: "/product/:id", element: <ProductDetails /> },
];
export default routes;
