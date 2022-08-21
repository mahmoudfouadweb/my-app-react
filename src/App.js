import { Route, Switch } from 'react-router-dom';

import FavoritesPage from './pages/FavoritePage';
import NewPostPage from './pages/NewPostPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import Layout from './component/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
        <Route path={'/my-profile'}>
          <ProfilePage />
        </Route>
        <Route path={'/my-favorites'}>
          <FavoritesPage />
        </Route>
        <Route path={'/new-post'}>
          <NewPostPage />
        </Route>
      </Switch>
    </Layout>
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
