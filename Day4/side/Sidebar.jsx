import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />
    }
  ];

  const css = `
    * {
      margin: 0;
      padding: 0;
      text-decoration: none;
    }
    
    .container {
      display: flex;
    }
    
    main {
      width: 100%;
      padding: 20px;
    }
    
    .sidebar {
      background: #000;
      color: #fff;
      height: 100vh;
      width: 200px;
      transition: all 0.5s;
      position: fixed;
      top: 8.2%;
      left: 0;
      z-index: 999;
    }
    
    .top_section {
      display: flex;
      align-items: center;
      padding: 20px 15px;
      
    }
    
    .bars {
      font-size: 25px;
    }
    
    .link {
      display: flex;
      color: #fff;
      padding: 10px 15px;
      gap: 15px;
      transition: all 0.5s;
    }
    
    .link:hover {
      background: lightskyblue;
      color: #000;
      transition: all 0.5s;
    }
    
    .active {
      background: lightskyblue;
      color: #000;
    }
    
    .icon,
    .link_text {
      font-size: 23px;
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="container">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <FaBars className="bars" onClick={toggle} />
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
