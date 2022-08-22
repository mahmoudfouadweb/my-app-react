import { useContext, useState } from 'react';
import LikedContext from '../../store/context-like';
import Card from '../UI/Card';

import classes from './PostItem.module.css';

function PostItem(props) {
  const likedCtx = useContext(LikedContext);
  const [likedPosts, setLikedPosts] = useState([]);
  const [items, setItems] = useState;
  const isLike = likedCtx.postIsLike(props.id);

  function toggleBtnHandler(e) {
    e.preventDefault();
    if (isLike) {
      likedCtx.removeLike(props.id);
    } else {
      likedCtx.addLike({
        id: props.id,
        image: props.image,
        name: props.name,
        description: props.description,
        address: props.address,
      });
      if (likedCtx.favorites) {
        localStorage.setItem(
          'like',
          JSON.stringify(likedCtx.favorites.forEach(like => like))
        );
      }

      // console.log('Liked Done');
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleBtnHandler}>
            {isLike ? 'Unlike' : 'Like'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default PostItem;
