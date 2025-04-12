import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import ListElement from './ListElement';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';


function Router() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListElement />} />
        <Route path="/about/:name" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;