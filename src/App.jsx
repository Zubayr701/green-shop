import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Care from "./pages/Care/Care";
import Arrivals from "./pages/Arrivals/Arrivals";
import Sale from "./pages/Sale/Sale";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Reviews from "./components/Reviews/Reviews";
import Description from "./components/Description/Description";
import ShopCard from "./pages/ShopCard/ShopCard";
import { API } from "./utils/config";
import Checkout from "./pages/Checkout/Checkout";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <ProductGrid />,
        },
        {
          path: "arrivals",
          element: <Arrivals />,
        },
        {
          path: "sale",
          element: <Sale />,
        },
      ],
    },
    {
      path: "/shop",
      element: <Shop />,
      children: [
        {
          path: "description",
          element: <Description />,
        },
        {
          path: "reviews",
          element: <Reviews />,
        }
      ]
    },
    {
      path: "/plant-care",
      element: <Care />,
    },
    {
      path: "/blogs",
      element: <Blog />,
    },
    {
      path: "/shopcard",
      element: <ShopCard />,
    },

    {
      path: "/checkout",
      element: <Checkout />,
    },

  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
