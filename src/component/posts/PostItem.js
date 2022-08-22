import { useContext, useState } from 'react';
import LikedContext from '../../store/context-like';
import Card from '../UI/Card';

import classes from './PostItem.module.css';

function PostItem(props) {
  const likedCtx = useContext(LikedContext);
  const [likedPosts, setLikedPosts] = useState(likedCtx);
  console.log(likedCtx);
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
          <button>Like</button>
        </div>
      </Card>
    </li>
  );
}

export default PostItem;
