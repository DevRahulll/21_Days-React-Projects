import { Link } from "react-router-dom";
import type { RecipeType } from "../context";

interface ItemProps {
  item: RecipeType;
}

export default function Item({ item }: ItemProps) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.image_url} alt="recipe item" className="block w-full" />
      </div>
      <div className="flex items-center justify-center flex-col">
        <span className="text-sm text-cyan-400 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-xl truncate text-gray-200">
          {item?.title}
        </h3>
        <button className="py-2 px-6 bg-gray-600 rounded-md mt-1">
          <Link to={`recipe-item/${item?.id}`} className="">
            Recipe Details
          </Link>
        </button>
      </div>
    </div>
  );
}
