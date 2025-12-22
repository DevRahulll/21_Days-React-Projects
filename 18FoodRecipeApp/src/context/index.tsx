import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GlobalContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  recipeList: RecipeType[];
  setRecipeList: React.Dispatch<React.SetStateAction<RecipeType[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
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

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export default function GlobalState({ children }: GlobalStateProps) {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [recipeList, setRecipeList] = useState<RecipeType[]>([]);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
