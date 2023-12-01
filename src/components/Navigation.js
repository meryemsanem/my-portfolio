import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const handleStateChange = (state) => setIsOpen(state.isOpen);

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmMenu: {
      background: '#0c0c0ce6',
      fontSize: '1.15em',
      width: '100%',
    },
    bmBurgerBars: {
      background: 'gray',
      fontSize: '14px',
      height: '4px',
    },
    bmItemList: {
      color: '#b8b7ad',
      display: 'flex',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmCrossButton: {
      height: '30px',
      width: '30px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      width: '100%',
    },
  };

  return (
    <div>
      <nav className="nav-links">
        <div className="logo">
          <h2 className="my-logo">M.S.K</h2>
        </div>
        <div className="links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About Me
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>
      <Menu styles={styles} isOpen={isOpen} onStateChange={handleStateChange}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </Menu>
    </div>
  );
}

export default Navigation;
