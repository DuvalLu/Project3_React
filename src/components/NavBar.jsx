function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {" "}
      <a className="navbar-brand" href="#">
        {" "}
        Jedi To-Do{" "}
      </a>{" "}
      <div className="collapse navbar-collapse">
        {" "}
        <ul className="navbar-nav ms-auto">
          {" "}
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              {" "}
              Home{" "}
            </a>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <a className="nav-link" href="#">
              {" "}
              Contact a Force Ghost{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
}
export default Navbar;
