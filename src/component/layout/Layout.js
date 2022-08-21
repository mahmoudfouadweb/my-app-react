import MainNavbar from './MainNavbar';

function Layout(props) {
  return (
    <>
      <MainNavbar />
      <section>{props.children}</section>
    </>
  );
}

export default Layout;
