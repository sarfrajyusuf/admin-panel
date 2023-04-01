import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Layouts() {
  return (
    <div>
      <header className="">
        <Navbar />
      </header>
      <div style={{ marginTop: '-70px' }}>
        <Sidebar />
        <div className="main-panel">
          <Outlet />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layouts;
