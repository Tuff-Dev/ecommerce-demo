import { toggleIsCartOpen } from "@/state/cartSlice";
import { RootState } from "@/state/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const CartDrawer = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {cart.isCartOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 z-20 h-screen w-screen bg-black bg-opacity-80"
          />
          <motion.aside
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            id="drawer-right-example"
            className={`${
              !cart.isCartOpen ? "" : ""
            } fixed top-0 right-0 z-40 h-screen w-96 overflow-hidden overflow-y-auto  bg-white p-4 dark:bg-gray-800`}
            tabIndex={1}
            aria-labelledby="drawer-right-label"
          >
            <h5
              id="drawer-right-label"
              className="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="pl-2">Shopping Bag</span>
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => dispatch(toggleIsCartOpen())}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            <div className="mb-4 border-y px-4">
              {cart.cart.map((item) => (
                <div>{item.id}</div>
              ))}
            </div>

            <h5 className="m-4 text-right">
              <span className="font-bold">Subtotal</span>: £35.50
            </h5>

            {cart.cart.length > 0 ? (
              <div>
                <button className="w-full rounded-lg bg-primary-400 px-5 py-2.5 text-center text-sm font-medium text-slate-900 hover:bg-primary-600 focus:outline-none">
                  Checkout
                </button>
              </div>
            ) : null}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default CartDrawer;
