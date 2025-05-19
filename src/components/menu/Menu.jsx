import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  );
};

export default Menu;
