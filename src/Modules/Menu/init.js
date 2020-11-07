import "./Menu.css"
import React from 'react';

export function MenuClick(state) {
  let isNavActive = document.body.classList.contains('nav-active');
  if (isNavActive) {
    document.body.classList.remove('nav-active')
  } else {
    document.body.classList.add('nav-active')
  }
}

function Menu() {
	return [
		<div id="menu_icon_container" className="span-1 m-offset-4 d-offset-12">
			<div id="menu" onClick={MenuClick}>
				<span className="line"></span>
				<span className="line"></span>
				<span className="line"></span>
			</div>
		</div>
	]
}

export default Menu;
