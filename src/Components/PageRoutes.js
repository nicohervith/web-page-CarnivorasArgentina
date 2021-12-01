import { Link } from "react-router-dom";


 const PageRoutes = () => {
  return (
    <nav>
      <span>
        <Link to="/"></Link>
        <Link to="/aboutus"></Link>
        <Link to="/contacto"></Link>
        <Link to="/capacitaciones"></Link>
        <Link to="/cursos"></Link>
        <Link to="/inscripcion"></Link>
        <Link to="/libro"></Link>
        <Link to="/jurassic-plant"></Link>
        <Link to="/refugio-nativas"></Link>
        <Link to="/red-list"></Link>
        <Link to="/no-existe"></Link>
      </span>
    </nav>
  );
}

export default PageRoutes;
