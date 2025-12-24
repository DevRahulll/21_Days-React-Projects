import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Cart from "./page/Cart";

function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
