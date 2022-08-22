import { useContext, useState } from 'react';

const LikedContext = useContext({
  favorites: [],
  totalFavorites: 0,
  addLike: posts => {},
  removeLike: postId => {},
  postIsLike: postId => {},
});

export function LikedPostProvider() {
  useState();
  function addLikeHandler() {}
  function removeLikeHandler() {}
  function itemIsLikeHandler() {}
  return;
}

export default LikedContext;
