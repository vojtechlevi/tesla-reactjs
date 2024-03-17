import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

//Vehicles
import ModelS from "./components/Pages/Vehicles/ModelS";
import Model3 from "./components/Pages/Vehicles/Model3";
import ModelX from "./components/Pages/Vehicles/ModelX";
import ModelY from "./components/Pages/Vehicles/ModelY";
import CyberTruck from "./components/Pages/Vehicles/CyberTruck";
import Choose from "./components/Pages/Vehicles/Choose";
import Charge from "./components/Pages/Vehicles/Charge";
import Compare from "./components/Pages/Vehicles/Compare";
import Drive from "./components/Pages/Vehicles/Drive";
import Fleet from "./components/Pages/Vehicles/Fleet";
import New from "./components/Pages/Vehicles/New";
import Roadster from "./components/Pages/Vehicles/Roadster";
import Semi from "./components/Pages/Vehicles/Semi";
import TradeIn from "./components/Pages/Vehicles/TradeIn";
import Used from "./components/Pages/Vehicles/Used";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Vehicles */}
        <Route path="/modelS" element={<ModelS />} />
        <Route path="/model3" element={<Model3 />} />
        <Route path="/modelX" element={<ModelX />} />
        <Route path="/modelY" element={<ModelY />} />
        <Route path="/cybertruck" element={<CyberTruck />} />
        <Route path="/choose" element={<Choose />} />
        {/* Vehicle Links */}
        <Route path="/charge" element={<Charge />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/new" element={<New />} />
        <Route path="/roadster" element={<Roadster />} />
        <Route path="/semi" element={<Semi />} />
        <Route path="/tradein" element={<TradeIn />} />
        <Route path="/used" element={<Used />} />
      </Routes>
    </>
  );
}

export default App;
