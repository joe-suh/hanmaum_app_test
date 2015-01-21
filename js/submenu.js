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


function toggleTopMenu() {
	var menuLinks = document.getElementById('w3-menu-links');
	if (menuLinks.style.display != "none") {
		menuLinks.style.display = "none";
	} else {
		menuLinks.style.display = "block";
	}
	
	return false;
}
