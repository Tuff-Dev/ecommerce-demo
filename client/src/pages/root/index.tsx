import CartDrawer from "@/components/CartDrawer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <Outlet />
    </>
  );
};

export default Root;
