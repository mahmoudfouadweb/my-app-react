import MainNavbar from './MainNavbar';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <>
      <MainNavbar />
      <main className={classes.main}>
        <section>{props.children}</section>
      </main>
    </>
  );
}

export default Layout;
