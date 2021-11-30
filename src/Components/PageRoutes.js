import { Link } from "react-router-dom";


 const PageRoutes = () => {
  return (
    <nav>
        <span>
          <Link to="/"></Link>
          <Link to="/aboutus"></Link>
          <Link to="/contacto"></Link>
          <Link to="/no-existe"></Link>
        </span>
    </nav>
  );
}

export default PageRoutes;
