import { useState } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  const favoritesCtx = useState(FavoritesContext);
  function toggleFavoriteStatusHandler() {}
  return (
    <li key={props.id} className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
          <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>TO FAVORITES</button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
