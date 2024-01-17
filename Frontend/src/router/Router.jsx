import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";
import Specialities from "../pages/Specialities";
import Root from "../pages/Root";
import Wishlist from "../pages/Wishlist";
import Basket from "../pages/Basket";
import Add from "../pages/Add";
import Detail from "../pages/Detail";
export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/reserv",
        element: <Reservation />,
      },
      {
        path: "/special",
        element: <Specialities />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
