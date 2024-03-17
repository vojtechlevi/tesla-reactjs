import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

//Vehicles
import ModelS from "./components/Pages/Vehicles/ModelS";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Vehicles */}
        <Route path="/models" element={<ModelS />} />
      </Routes>
    </>
  );
}

export default App;
