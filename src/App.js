import './App.css';
import React from 'react';
import Menu from './Menu';
import Homepage from './Home/page';
import Toolkit from './Toolkit/page';
import Experience from './Experience/page';
import SideProjects from './SideProjects/page';
import Contact from './Contact/page';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
	return [
		<Router>
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
			{/* A <Switch> looks through its children <Route>s and
			renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/" exact>
					<Homepage />
				</Route>
				<Route path="/toolkit" exact>
					<Toolkit />
				</Route>
				<Route path="/experience" exact>
					<Experience />
				</Route>
				<Route path="/side-projects" exact>
					<SideProjects />
				</Route>
				<Route path="/contact" exact>
					<Contact />
				</Route>
			</Switch>
		</Router>,
		<Menu />
	];
}

export default App;
