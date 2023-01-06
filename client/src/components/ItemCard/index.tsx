import SquashRacket from "@/assets/images/squash-racket.avif";
import { Item } from "@/state/cartSlice";
import { Link } from "react-router-dom";

type Props = {
  item: Item;
  onAddItemToCart?: (item: Item) => void;
};

const ItemCard = ({ item, onAddItemToCart }: Props) => {
  const imageUrl = `http://localhost:1337${item.attributes.image.data.attributes.url}`;

  return (
    <Link
      to={`/products/${item.id}`}
      className="w-full max-w-[300px] cursor-pointer rounded-lg border bg-white shadow-md hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
    >
      <img
        className="mx-auto max-h-[300px] rounded-t-lg"
        src={imageUrl}
        alt="Squash Racket v2.0"
      />
      <div className="px-5 py-4 pb-5">
        <h5 className="text-center text-xl tracking-tight text-gray-900 dark:text-white">
          {item.attributes.name}
        </h5>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl text-gray-900 dark:text-white">
            £{item.attributes.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddItemToCart && onAddItemToCart(item);
            }}
            className="rounded-lg bg-primary-400 px-5 py-2.5 text-center text-sm font-medium text-slate-900 hover:bg-primary-600 focus:outline-none"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
