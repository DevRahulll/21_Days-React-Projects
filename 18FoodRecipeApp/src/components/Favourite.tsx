import useGlobalContext from "../hooks/useGlobalContext";
import Item from "./Item";

export default function Favourite() {
  const { favouritesList } = useGlobalContext();
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <div className="flex items-center justify-center flex-col gap-10">
          <p className="text-7xl text-green-700 font-semibold">Empty...</p>
          <p className="text-sm text-gray-400 font-bold">Add to Favourites</p>
        </div>
      )}
    </div>
  );
}
