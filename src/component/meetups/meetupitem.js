import classes from './MeetupItem.module.css';
import Card from '../ui/Card';

function MeetupItem(props) {
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
            <button>TO FAVORITES</button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
