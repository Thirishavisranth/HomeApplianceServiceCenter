import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './side/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx'; // Import the Register component
import TopBar from './side/TopBar';

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} /> {/* Updated path to "/login" */}
          <Route path="/register" element={<Register />} /> {/* New route for Register component */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
