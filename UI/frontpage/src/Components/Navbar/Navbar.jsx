import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">AiLearnt</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ai-basics">Ai Basics</Link></li>
        <li className="nav-contact"><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
