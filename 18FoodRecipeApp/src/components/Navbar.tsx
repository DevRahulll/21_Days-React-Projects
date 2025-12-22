import { NavLink } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";

export default function Navbar() {
  const { search, setSearch, handleSubmit } = useGlobalContext();
  return (
    <nav className="flex item-center justify-between container mx-auto py-8">
      <h2 className="text-4xl font-semibold font-mono">
        <NavLink to={"/"}>FoodReceipe </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Enter Items..."
          className="px-6 py-2 text-center bg-slate-800 shadow-lg shadow-gray-600 text-xl focus:ring-2 focus:ring-red-400 rounded-xl text-gray-300 font-medium placeholder:text-gray-400"
        />
      </form>
      <ul className="flex gap-5 text-xl cursor-pointer">
        <li className="hover:underline">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to={"/favourite"}>Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
