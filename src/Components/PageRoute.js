import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact';
import PageRoutes from "./PageRoutes";
import Capacitaciones from "./pages/Capacitaciones";
import Cursos from "./pages/Cursos";
import Inscripcion from "./pages/Inscripcion";
import Libro from './pages/Libro'
import JurassicPlant from "./pages/JurassicPlant";
import Refugio from "./pages/Refugio";
import Redlist from "./pages/Redlist";

const PageRoute = () => {
  return (
    <div>
      <PageRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/inscripciones" element={<Inscripcion/>}/>
        <Route path="/libro" element={<Libro/>} />
        <Route path="/jurassic-plant" element={<JurassicPlant/>}/>
        <Route path="/refugio-nativas" element={<Refugio/>}/>
        <Route path="/red-list" element={<Redlist/>}/>
      </Routes>
    </div>
  );
}

export default PageRoute;