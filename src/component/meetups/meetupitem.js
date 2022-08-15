import classes from './MeetupList.module.css';

function MeetupItem(props) {
  return (
    <li key={props.id} className={classes.item}>
      <div>
        <img
          className={classes.image}
          src="{props.image}"
          alt="{props.title}"
        />
      </div>
      <div className={classes.content}>
        <h3>{props.title}TITLE</h3>
        <p>{props.description}DESCRIPTION</p>
      </div>
      <div>
        <button className={classes.actions}>TO FAVORITES</button>
      </div>
    </li>
  );
}

export default MeetupItem;
