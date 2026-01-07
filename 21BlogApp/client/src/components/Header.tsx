import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between mx-10 ">
      <h3 className="font-mono font-semibold text-4xl cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out">
        MERN Blog
      </h3>
      <ul className="flex gap-12 font-mono font-semibold text-2xl duration-100 transition-all ease-in-out">
        <Link to={"/"}>
          <li className="hover:scale-105  cursor-pointer">Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li className="hover:scale-105  cursor-pointer">Add Blog</li>
        </Link>
      </ul>
    </div>
  );
}
