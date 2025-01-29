import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Joias from './Pages/Joias/Joias';
import VestuarioMasculino from "./Pages/VestuarioMasculino/VestuarioMasculino";
import VestuarioFeminino from "./Pages/VestuarioFeminino/VestuarioFeminino";
import Eletronicos from "./Pages/Eletronicos/Eletronicos";
import './globalReset.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Joias" element={<Joias />}/>
        <Route path="/VestMasc" element={<VestuarioMasculino />}/>
        <Route path="/VestFem" element={<VestuarioFeminino />}/>
        <Route path="/Eletronicos" element={<Eletronicos />}/>
      </Routes>
    </BrowserRouter>
    
  )
}


