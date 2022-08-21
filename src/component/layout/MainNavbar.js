import { Link } from 'react-router-dom';

import classes from './MainNavbar.module.css';
function MainNavbar(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Facebook</div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/my-profile'}>Profile</Link>
        </li>
        <li>
          <Link to={'/my-favorites'}>
            Favorites <span className={classes.badge}>0</span>
          </Link>
        </li>
        <li>
          <Link to={'/new-post'}>New Post</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavbar;
