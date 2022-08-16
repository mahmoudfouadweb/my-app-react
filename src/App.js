import { Route, Switch } from 'react-router-dom';
import Layout from './component/layout/Layout';

import AllMeetUpsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetUps';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
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
