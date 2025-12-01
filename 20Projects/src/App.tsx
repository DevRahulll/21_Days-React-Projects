import { Route, Routes } from "react-router-dom";
import RandomColor from "./components/01RandomColor/RandomColor";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/randomcolor" element={<RandomColor />} />
      </Routes>
    </div>
  );
}

export default App;
