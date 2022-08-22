import { useRef } from 'react';

import Card from '../UI/Card';
import classes from './NewPostForm.module.css';

function PostItemForm() {
  const nameRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  function clickBtnHandler(e) {
    e.preventDefault();

    const userName = nameRef.current.value;
    const userImage = imageRef.current.value;
    const userAddress = addressRef.current.value;
    const userDescription = descriptionRef.current.value;

    const postData = {
      name: userName,
      image: userImage,
      address: userAddress,
      description: userDescription,
    };

    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/posts.json',
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
  }

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Samira" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            placeholder="Past here Image URL"
            ref={imageRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            placeholder="Home, work, London..."
            ref={addressRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="4"
            type="text"
            id="description"
            placeholder="What's on your mind."
            ref={descriptionRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="reset" className={classes.reset}>
            Reset
          </button>
          <button onClick={clickBtnHandler}>Share</button>
        </div>
      </form>
    </Card>
  );
}

export default PostItemForm;
