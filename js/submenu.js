/*
 * Controlling sub menu
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
var isClickHandled=false;

function toggleTopMenu() {
	var menuLinks = document.getElementById('sub-menu-links');
	if (menuLinks.style.display != "none") {
		menuLinks.style.display = "none";
		isTopMenuShown=false;
	} else {
		menuLinks.style.display = "block";
		isTopMenuShown=true;
	}
	
	isClickHandled = true;
	return false;
}

function goHome() {
	isClickHandled = true;
	location.href='index.html';
	return false;
}


function handleOnClick() {
	if ( isClickHandled )
	{
		isClickHandled = false;
		return false;
	}
	var menuLinks = document.getElementById('sub-menu-links');
	if (menuLinks.style.display != "none") {
		menuLinks.style.display = "none";
	} 
	
	return false;
}
