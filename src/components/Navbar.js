import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">

          {/* Left links */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/testemunhos">Testemunhos</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/produto">Produto</Link>
            </li>
          </ul>

          {/* Center brand */}
          <Link className="navbar-brand mx-auto" to="/">Cannabalm</Link>

          {/* Right links */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item ms-3">
              <a className="nav-link" href="#sobre">Sobre</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#beneficios">Benefícios</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#contato">Contato</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
