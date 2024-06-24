import React from "react";
import { Link } from "react-router-dom";
function Header() {
  const menuItems = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Services", to: "/services" },
    { title: "Contact", to: "/contact" },
  ];
  return (
    <header>
      <Link to="/">
        <div>Header</div>
      </Link>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.title} to={item.to}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
