import LayoutDefault from "../views/client/layout/Layoutdefault";
import Contact from "../views/client/pages/Contact/Contact";
import Home from "../views/client/pages/Home/Home";
import Login from "../views/client/pages/Login/Login";
import News from "../views/client/pages/News/News";
import Register from "../views/client/pages/Register/Register";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];
