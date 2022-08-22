import { useHistory } from 'react-router-dom';
import PostItemForm from '../component/Posts/NewPostForm';

function NewPostPage() {
  const history = useHistory();
  function shareBtnHandel(postObj) {
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/posts.json',
      {
        method: 'POST',
        body: JSON.stringify(postObj),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>New Post</h1>
      <PostItemForm onShare={shareBtnHandel} />
    </section>
  );
}

export default NewPostPage;
