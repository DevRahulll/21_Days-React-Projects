import { Route, Routes } from "react-router-dom";
import RandomColor from "./components/01RandomColor/RandomColor";
import Accordian from "./components/02Accordian/Accordian";
import StarRating from "./components/03starRating/StarRating";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/randomcolor" element={<RandomColor />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/starrating" element={<StarRating />} />
      </Routes>
    </div>
  );
}

export default App;
