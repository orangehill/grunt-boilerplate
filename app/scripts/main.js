/* global Modernizr */
'use strict';
var orangeBoilerplate = window.orangeBoilerplate || {};

orangeBoilerplate.size = {
    'screen-xs': false,
    'screen-sm': false,
    'screen-md': false,
    'screen-lg': false,
    current: false
};

orangeBoilerplate.main = {
    init: function () {
        orangeBoilerplate.debug = true;
        if(orangeBoilerplate.debug){
            console.log('Welcome To Orange Boilerplate');
            console.log('orangeBoilerplate.main');
        }
        this.checkSize();
    },
    checkSize: function() {
        $.each(orangeBoilerplate.size, function(index) {
            orangeBoilerplate.size[index] = false;
        });
        if (Modernizr.mq('only all and (max-width: 480px)')) {
            orangeBoilerplate.size['screen-xs'] = true;
            orangeBoilerplate.size.current = 'screen-xs';
        } else if (Modernizr.mq('only all and (min-width: 768px) and (max-width: 992px)')) {
            orangeBoilerplate.size['screen-sm'] = true;
            orangeBoilerplate.size.current = 'screen-sm';
        } else if (Modernizr.mq('only all and (min-width: 992px) and (max-width: 1200px)')) {
            orangeBoilerplate.size['screen-md'] = true;
            orangeBoilerplate.size.current = 'screen-md';
        } else if (Modernizr.mq('only all and (min-width: 1200px)')) {
            orangeBoilerplate.size['screen-lg'] = true;
            orangeBoilerplate.size.current = 'screen-lg';
        }
    }
};

$(document).ready(function() {
    orangeBoilerplate.main.init();
});

$(window).on('resize', function() {
    orangeBoilerplate.main.checkSize();
});
