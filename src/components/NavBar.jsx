import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Jedi To-Do
      </Link>

      <div className="ms-auto">
        <Link className="nav-link d-inline text-white me-3" to="/">
          Vanquish the Sith
        </Link>

        <Link className="nav-link d-inline text-white" to="/contact">
          Contact a Force Ghost
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
