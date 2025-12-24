import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-2 mt-5">
      <div className=" ml-10">
        <h1 className="text-4xl font-bold truncate tracking-wider text-[#BB86FC]">
          <Link to={"/"}>REACT REDUX SHOPPING CART</Link>
        </h1>
      </div>
      <ul className="flex items-center gap-10 mr-14 text-2xl font-semibold">
        <li className="list-none hover:scale-105 hover:text-[#BB86FC]">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="list-none hover:scale-105 hover:text-[#BB86FC]">
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
