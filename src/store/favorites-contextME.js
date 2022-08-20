import { createContext, useState } from 'react';

// the initial state for favorites context
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  itemIsFavorite: meetId => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);
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
  // the updated version of favorites context
  const context = {
    favorites: favorites,
    totalFavorite: favorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoritesHandler,
  };

  // check is favorites
  function itemIsFavoritesHandler(meetupId) {
    return favorites.some(meetup => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
