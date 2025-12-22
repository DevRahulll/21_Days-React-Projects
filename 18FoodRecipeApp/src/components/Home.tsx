import type { RecipeType } from "../context";
import useGlobalContext from "../hooks/useGlobalContext";
import Item from "./Item";

export default function Home() {
  const { loading, recipeList } = useGlobalContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-5">
        <h1 className="text-4xl text-green-400 font-light">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mt-5 container mx-auto grid grid-cols-4 gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item: RecipeType) => <Item key={item.id} item={item} />)
      ) : (
        <div className="col-span-full">
          <p className="text-4xl text-center text-gray-300 font-extrabold">
            Nothing to show. Please Search Something.
          </p>
        </div>
      )}
    </div>
  );
}
