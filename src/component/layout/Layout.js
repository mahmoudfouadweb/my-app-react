import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <footer>
        <p>copy Right receved</p>
      </footer>
    </div>
  );
}

export default Layout;
