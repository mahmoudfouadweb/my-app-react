import { createContext, useState } from 'react';

// the initial state for favorites context
const FavoritesContext = createContext({
  favorites: [],
  totelFavorites: 0,
  addFavorites: favorateMeetup => {},
  removeFavorites: meetupId => {},
  itemIsFavorites: meetId => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);
  // the updated version of favorites context
  const context = {
    favorites: favorites,
    totelFavorites: favorites.length,
  };

  // add favorites
  function addFavoritesHandler(favoriteMeetup) {
    setFavorites(prevUserFavorite => prevUserFavorite.concat(favoriteMeetup));
  }
  // remove favorites
  function removeFavoritesHandler(meetupId) {
    setFavorites(prevUserFavorite =>
      prevUserFavorite.filter(meetup => meetup !== meetupId)
    );
  }

  // check is favorites
  function itemIsFavoritesHandler(meetupId) {
    return favorites.some(meetup => meetup === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
