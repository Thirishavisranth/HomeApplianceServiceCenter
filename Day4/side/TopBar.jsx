import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTh } from 'react-icons/fa';

const StickyTopBar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/analytics",
      name: "Analytics",
    },
    {
      path: "/comment",
      name: "Comment",
    },
    {
      path: "/product",
      name: "Product",
    },
    {
      path: "/Login",
      name: "Login",
    }
  ];

  const topBarStyles = {
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "20px 15px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  };

  const logoStyles = {
    fontSize: "30px",
    marginRight: "15px",
  };

  const navStyles = {
    marginLeft: "auto",
  };

  const linkStyles = {
    color: "#fff",
    padding: "10px 15px",
    transition: "all 0.5s",
  };

  const activeStyles = {
    background: "lightskyblue",
    color: "#000",
  };

  return (
    <div style={topBarStyles}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaTh style={logoStyles} />
        <h1 style={{ margin: 0 }}>Logo</h1>
      </div>
      <nav style={navStyles}>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={linkStyles}
            activeStyle={activeStyles}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default StickyTopBar;
