import FavoritesPage from './pages/FavoritePage';
import NewPostPage from './pages/NewPostPage';
import ProfilePage from './pages/ProfilePage';
import PublicPage from './pages/PublicPage';

function App() {
  return (
    <>
      <PublicPage />
      <ProfilePage />
      <FavoritesPage />
      <NewPostPage />
    </>
  );
}

export default App;

//////////////////////////////////////////
// Explain 😎
//     <Layout>
//       {/* Standard above page's switches */}
//       {/* <MainNavigation /> */}
//       {/* pages */}
//       <Switch>
//         {/* main page */}
//         <Route path="/" exact>
//           <AllMeetUpsPage />
//         </Route>
//         {/* new meetup page */}
//         <Route path="/new-meetup">
//           <NewMeetupPage />
//         </Route>
//         {/* Favorites page */}
//         <Route path="/favorites">
//           <FavoritesPage />
//         </Route>
//       </Switch>
//     </Layout>
//   );
// }
