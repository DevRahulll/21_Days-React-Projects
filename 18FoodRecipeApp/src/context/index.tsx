import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GlobalContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  recipeList: RecipeType[];
  setRecipeList: React.Dispatch<React.SetStateAction<RecipeType[]>>;

  recipeDetailsData: RecipeDetailsResponse | null;
  setRecipeDetailsData: React.Dispatch<
    React.SetStateAction<RecipeDetailsResponse | null>
  >;

  favouritesList: RecipeDetailsType[];
  setFavouritesList: React.Dispatch<React.SetStateAction<RecipeDetailsType[]>>;

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface GlobalStateProps {
  children: React.ReactNode;
}

export interface RecipeType {
  id: string;
  title: string;
  image_url: string;
  publisher: string;
}

export interface IngredientType {
  quantity: number | null;
  unit: string;
  description: string;
}

export interface RecipeDetailsType {
  id: string;
  title: string;
  image_url: string;
  publisher: string;
  ingredients: IngredientType[];
}

export interface RecipeDetailsResponse {
  recipe: RecipeDetailsType;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export default function GlobalState({ children }: GlobalStateProps) {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<RecipeType[]>([]);
  const [recipeDetailsData, setRecipeDetailsData] =
    useState<RecipeDetailsResponse | null>(null);
  const [favouritesList, setFavouritesList] = useState<RecipeDetailsType[]>([]);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearch("");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSearch("");
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        loading,
        setLoading,
        recipeList,
        setRecipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favouritesList,
        setFavouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
