import React from 'react';
import Menu from './Modules/Menu/init';
import Homepage from './Pages/Home';
import Toolkit from './Pages/Toolkit';
import Experience from './Pages/Experience';
import SideProjects from './Pages/SideProjects';
import Contact from './Pages/Contact';

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
					<Homepage doPageSwap={true} />
				</Route>
				<Route path="/toolkit" exact>
					<Toolkit doPageSwap={true} />
				</Route>
				<Route path="/experience" exact>
					<Experience doPageSwap={true} />
				</Route>
				<Route path="/side-projects" exact>
					<SideProjects doPageSwap={true} />
				</Route>
				<Route path="/contact" exact>
					<Contact doPageSwap={true} />
				</Route>
			</Switch>
		</Router>,
		<Menu />
	];
}

export default App;
