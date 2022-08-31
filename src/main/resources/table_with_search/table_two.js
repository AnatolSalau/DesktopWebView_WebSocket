$.ripple("#myTab1", {
    debug: false, // Turn Ripple.js logging on/off
    on: 'mousedown', // The event to trigger a ripple effect

    opacity: 1, // The opacity of the ripple
    color: "hsla(291, 73%, 94%, 0.3)", // Set the background color. If set to "auto", it will use the text color
    multi: false, // Allow multiple ripples per element

    duration: 0.5, // The duration of the ripple

    // Filter function for modifying the speed of the ripple
    rate: function(pxPerSecond) {
        return pxPerSecond;
    },

    easing: 'linear' // The CSS3 easing function of the ripple
});
