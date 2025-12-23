import { useParams } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";
import { useEffect } from "react";
import type { IngredientType } from "../context";

export default function ItemDetails() {
  const { id } = useParams<{ id: string }>();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favouritesList,
    setFavouritesList,
  } = useGlobalContext();

  function handleToggleFavourite() {
    if (!recipeDetailsData) return;

    const exists = favouritesList.find(
      (item) => item.id === recipeDetailsData.recipe.id
    );

    if (exists) {
      setFavouritesList((prev) =>
        prev.filter((item) => item.id !== recipeDetailsData.recipe.id)
      );
    } else {
      setFavouritesList((prev) => [...prev, recipeDetailsData.recipe]);
    }
  }

  const isFavourite =
    favouritesList.findIndex(
      (item) => item.id === recipeDetailsData?.recipe.id
    ) !== -1;

  useEffect(() => {
    async function getRecipeDetails(): Promise<void> {
      if (!id) return;

      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);
  return (
    <div className="continer mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt="img"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-600 font-medium">
          {recipeDetailsData?.recipe?.title}
        </span>
        <h3 className="font-bold text-xl truncate text-gray-300">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div className="">
          <button
            onClick={handleToggleFavourite}
            className="px-8 py-2 text-gray-200 text-lg rounded-md hover:scale-105 bg-green-600"
          >
            {isFavourite ? "Remove from Favourites" : "Add to Favourites"}
          </button>
        </div>
        <div className="">
          <span className="text-2xl font-semibold text-gray-300">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map(
              (ingredient: IngredientType, index: number) => (
                <li key={index}>
                  <span className="text-xl font-medium text-gray-400">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span className="text-xl font-medium text-gray-400">
                    {ingredient.description}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
