import { useContext } from 'react';
import PostList from '../component/Posts/PostList';
import LikedContext from '../store/context-like';

function FavoritesPage() {
  const likedCtx = useContext(LikedContext);
  return (
    <section>
      <h1>My Favorites</h1>
      <PostList posts={likedCtx.favorites} />
    </section>
  );
}

export default FavoritesPage;
