import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as homeLoader } from "@/pages/home";
import Item from "@/pages/item.tsx";
import ErrorPage from "@/pages/errorPage";
import Checkout from "@/pages/checkout";
import CheckoutConfirmation from "@/pages/checkout/Confirmation";
import Root from "./pages/root";

// export async function loader() {
//   const allProducts = [];

//   return { allProducts };
// }

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: "/products/:productId",
          element: <Item />,
        },
      ],
    },

    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/checkout/success",
      element: <CheckoutConfirmation />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
