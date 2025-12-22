import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favourite from "./components/Favourite";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/recipe-item/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
