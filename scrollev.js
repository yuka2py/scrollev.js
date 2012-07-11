/**
 * scrollev.js 0.1.0 - jQuery Plug-In
 *
 * Copyright (c) 2012 yuka2py
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Built for jQuery library
 * http://jquery.com
 */
(function($)
{
	$.fn.exscroll = function(options) {
		options = $.extend({
			onScrollStart: function(){},
			onScrollMove: function(){},
			onScrollEnd: function(){},
			detectionInterval: 100,
			detectionDuration: 250
		}, options);
		
		var target = $(this);
		var lastScrollTime = -1;
		var detectorTimerId;
		
		var scrollEventHandler = function() {
			if (0 > lastScrollTime) {
				options.onScrollStart.apply(target);
				detectorTimerId = setInterval(scrollEndEvnetDetector, options.detectionInterval);
			} else {
				options.onScrollMove.apply(target);
			}
			lastScrollTime = (+ new Date());
		};
		
		var scrollEndEvnetDetector = function() {
			if (lastScrollTime + options.detectionDuration < (+ new Date())) {
				clearInterval(detectorTimerId);
				options.onScrollEnd.apply(target);
				lastScrollTime = -1;
			}
		};
		
		target.scroll(scrollEventHandler);
		return this;
	};
})(jQuery);
