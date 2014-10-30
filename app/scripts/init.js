'use strict';
require.config({
    baseUrl: 'scripts/',
    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
        'angular': 'lib/angular/angular.min',
        'angular-sanitize': 'lib/angular-sanitize/angular-sanitize.min',
        'angular-slider': 'lib/angular-slider/angular-slider.min',
        'angular-animate': 'lib/angular-animate/angular-animate.min',
        'angular-route': 'lib/angular-route/angular-route.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min',
        'lessjs': 'lib/less.js/dist/less-1.7.0.min',        
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular': {
            'exports': 'angular'
        },
        
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-slider': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        }
    }
});
require(['jquery', 'lessjs', 'angular', 'routes'], function(jQuery, lessjs, angular) {
    jQuery(function() {
        angular.bootstrap(document, ['angularParse']);
    });
});