import SquashBall from "@/assets/images/squashball.png";
import { toggleIsCartOpen } from "@/state/cartSlice";
import { RootState } from "@/state/cartStore";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Navbar = ({}: Props) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  let numberOfItemsInCart = 0;
  cart.cart.forEach((item) => (numberOfItemsInCart += item.count));

  const flexBetween = "flex items-center justify-between";
  return (
    <div
      className={`${flexBetween} sticky top-0 z-30 w-full bg-white bg-opacity-50 py-5 px-4 backdrop-blur-sm md:px-8`}
    >
      {/* Left Side */}
      <div className={`${flexBetween}`}>
        <img
          alt="squash ball"
          src={SquashBall}
          className="mr-2 w-6 md:mr-4 md:w-10"
        />
        <h2 className=" md:text-xl">Squash Central</h2>
      </div>
      {/* Right Side */}
      <div className={`${flexBetween}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mx-4 h-5 w-5 cursor-pointer md:h-6 md:w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 cursor-pointer md:h-6 md:w-6"
          onClick={() => dispatch(toggleIsCartOpen())}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        {numberOfItemsInCart > 0 ? (
          <span className="relative  flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white md:h-6 md:w-6">
            {numberOfItemsInCart}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
