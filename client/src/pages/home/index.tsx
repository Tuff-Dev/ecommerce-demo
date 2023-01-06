import ImageCarousel from "@/components/Carousel";
import runners from "@/assets/images/runners.jpg";
import tennisball from "@/assets/images/tennisball.avif";
import weightlifter from "@/assets/images/weightlifter.avif";
import ItemCard from "@/components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/cartStore";
import { addToCart, Item } from "@/state/cartSlice";
import { useLoaderData } from "react-router-dom";

type LoaderData = {
  items: Item[];
};

export async function loader(): Promise<LoaderData> {
  const results = await fetch("http://localhost:1337/api/items?populate=image");
  // console.log(await results.json());

  const items: Item[] = (await results.json()).data;

  return { items };
}

type Props = {};

const Home = ({}: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const { items } = useLoaderData() as LoaderData;

  return (
    <div className="">
      <ImageCarousel images={[runners, tennisball, weightlifter]} />
      <div className="new-arrivals mx-4">
        <h2 className="my-4 text-center text-lg md:my-8 md:text-3xl">
          New Arrivals
        </h2>

        <div className="max-w-8xl mx-auto flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onAddItemToCart={(item) => dispatch(addToCart(item))}
            />
          ))}

          {/* <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
