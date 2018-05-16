import React from 'react';

/*const Navbar = props => (
  <p className = "App-normal">{ props.message }</p>
);*/
function Navbar(props) {
  var links=['link-one','link-two','link-three']
  //const links = links;
  const NavbarItems = links.map((link) =>
    <li style={{display:'inline', margin:'0px 5px'}}>{link}</li>
  );
  return (
    <ul>{NavbarItems}</ul>
  );
}

export default Navbar;
