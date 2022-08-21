function MainNavbar(props) {
  return (
    <header>
      <ul>
        <li>Item</li>
      </ul>
      {props.children}
    </header>
  );
}

export default MainNavbar;
