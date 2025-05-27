import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/24.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>

      
       {/* Top Left: Instagram Icon */}
       <div className="instagram-icon">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png" alt="Instagram" />
        </a>
      </div>

      {/* Top Right: Language Toggle */}
      <div className="language-toggle">
        <button className="btn btn-sm ">PT / EN</button>
      </div>
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">

          {/* Left links */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
              <Link className="nav-link" to="/testimonials">Testemunhos</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/product">Produto</Link>
            </li>
          </ul>

          {/* Center brand */}
           <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="Cannabalm Logo" className="navbar-logo" />
          </Link>

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
