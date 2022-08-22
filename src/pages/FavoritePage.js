import { useContext, useEffect, useState } from 'react';

import PostList from '../component/Posts/PostList';
import LikedContext from '../store/context-like';

function FavoritesPage() {
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const likedCtx = useContext(LikedContext).favorites;

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://react-first-project-94078-default-rtdb.firebaseio.com/likes.json'
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const loadingLikes = [];
        Object.keys(data).forEach(like => {
          const loadedLike = {
            id: like,
            ...data[like],
          };
          loadingLikes.push(loadedLike);
        });
        if (data) {
          setLoading(false);
          setLikes(loadingLikes);
        }
      });
  }, []);

  let content;
  if (loading) {
    content = <p>loading</p>;
  } else {
    content = <PostList posts={likes} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
