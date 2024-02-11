import LayoutDefault from "../views/client/layout/Layoutdefault";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      // {
      //   path: "register",
      //   element: <Register />,
      // },
      // {
      //   path: "logout",
      //   element: <Logout />,
      // },
      // {
      //   element: <PrivateRoutes />,
      //   children: [
      //     {
      //       path: "answers",
      //       element: <Answers />,
      //     },
      //     {
      //       path: "quiz/:id",
      //       element: <Quiz />,
      //     },
      //     {
      //       path: "result/:id",
      //       element: <Result />,
      //     },
      //     {
      //       path: "topic",
      //       element: <Topic />,
      //     },
      //   ],
      // },
    ],
  },
];
