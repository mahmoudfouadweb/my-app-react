import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li key={props.id} className={classes.item}>
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
    </li>
  );
}

export default MeetupItem;
