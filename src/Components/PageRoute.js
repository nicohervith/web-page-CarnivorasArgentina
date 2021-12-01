import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact';
import PageRoutes from "./PageRoutes";
import Capacitaciones from "./pages/Capacitaciones";

const PageRoute = () => {
  return (
    <div>
      <PageRoutes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/capacitaciones" element={<Capacitaciones />} />
      </Routes>
    </div>
  );
}

export default PageRoute;