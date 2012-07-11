scrollev.js
===========

This is a simple jQuery plug-in to handle the scroll event in the callback function.

##LISENCE

	MIT


##USAGE

	var toPageTop = jQuery('#toPageTop');
	jQuery('window').scrollev({
		onScrollStart: function() {
			toPageTop.fadeOut();
		},
		onScrollEnd: function() {
			toPageTop.fadeIn();
		}
	});



##OPTIONS

* **onScrollStart** (function) A callback function to be executed at the start of the scroll.
* **onScrollMove** (function) A callback function to be executed at any time during scrolling.
* **onScrollEnd** (function) A callback function to be executed at the end of the scroll.
* **detectionInterval** (integer) This is the interval between the execution of the process of determining the end of the scroll (in milliseconds).
* **detectionDuration** (integer) This is the time to determine the end of the scroll (in milliseconds).
