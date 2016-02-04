/*
    jQuery Broadcaster By LancerComet at 12:53, 2015.10.27.
	# Carry Your World#
	---
	Usage:
	  @ Broadcast: $.$broadcast("eventName", value);
	  @ Listener: $.$on("eventName", callback);

*/

(function ($, undefined) {
	
	$.extend({
		$broadcast: $broadcast,
		$on: $on
	});
	
	var registeredEvents = {};  // Definition: Store all the events that were registered.
	var listenerEvents = {};  // Definition: Store information of all listeners.
	
	// Definition: Broadcasting function.
	// Broadcast a new message to tell listener who is the message listener to execute its callback.
	function $broadcast (eventName, value) {
		if (!listenerEvents[eventName]) {
			return;
		}
		
		(function executeCallbacks () {
			for (var i in listenerEvents[eventName]) {
				if (listenerEvents[eventName].hasOwnProperty(i)) {
					listenerEvents[eventName][i](eventName, value);
				}
			}
		})();

	}
	
	// Definition: Broadcasting listener function.
	// Setup a new listener to listen the broadcasting that with same eventName.
	function $on (eventName, callback) {
		!listenerEvents[eventName] ? listenerEvents[eventName] = [] : void(0);  // Create an array to store all registered callbacks.
		callback ? listenerEvents[eventName].push(callback) : void(0);  // Push callback to the array if there is the callback.
	}
	
	
	
	
})(window.jQuery);