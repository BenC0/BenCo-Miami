// React components
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

// App components
import "normalize.css"
import './index.css';
import App from './App';
import Contact from "./modules/Contact"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <nav id="nav" className="m-grid-4 d-grid-12">
      <ul className="d-span-11 m-span-3">
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/toolkit" exact>Toolkit</NavLink>
        </li>
        <li>
          <NavLink to="/experience" exact>Experience</NavLink>
        </li>
        <li>
          <NavLink to="/side-projects" exact>Side Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact>Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
