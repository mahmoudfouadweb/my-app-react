import { createContext, useState } from 'react';

const LikedContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addLike: posts => {},
  removeLike: postId => {},
  postIsLike: postId => {},
});

export function LikedPostProvider(props) {
  const [likedPosts, setLikePosts] = useState([]);

  function addLikeHandler(likedPosts) {
    setLikePosts(prevLikedPosts => prevLikedPosts.concat(likedPosts));
  }
  function removeLikeHandler(postId) {
    setLikePosts(likedPosts =>
      likedPosts.filter(likedPost => likedPost.id !== postId)
    );
  }
  function itemIsLikeHandler(postId) {
    return likedPosts.some(post => post.id === postId);
  }

  const LikeCtx = {
    favorites: likedPosts,
    totalFavorites: likedPosts.length,
    addLike: addLikeHandler,
    removeLike: removeLikeHandler,
    postIsLike: itemIsLikeHandler,
  };

  return (
    <LikedContext.Provider value={LikeCtx}>
      {props.children}
    </LikedContext.Provider>
  );
}

export default LikedContext;
