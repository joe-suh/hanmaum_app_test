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
var timestamp=0;

//Device ready function
document.addEventListener('deviceready', function() {
    document.addEventListener("backbutton", goBack, false);
}, false);

//Function for back button function
function goBack(){
	var prevTimestamp = timestamp;
	timestamp = Date.now();
	if ( location.href != 'index.html')
	{
		goHome();
	}
	else
	{
		if ( (timestamp-prevTimestamp) < 700 )
		{
			navigator.app.exitApp();
		}
	}
	timestamp = newTimestamp;
}
