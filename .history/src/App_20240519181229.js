import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const GroceryStore = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About")); 

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const [userName, setUserName] = useState();

useEffect(() => {
  const data = {
    name: "Akanksha Singh"
  }
  setUserName(data.name)
})

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
   
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: ( <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId/",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading....</h1>}><GroceryStore /></Suspense>),
      },
    ],
    errorElement: <Error/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
