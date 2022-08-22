import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LikedContext from '../../store/context-like';

import classes from './MainNavbar.module.css';

function MainNavbar() {
  const likeCtx = useContext(LikedContext);
  const totalLikes = likeCtx.totalFavorites;
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
            Favorites <span className={classes.badge}>{totalLikes}</span>
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
