(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EasyGoogleMaps"] = factory();
	else
		root["EasyGoogleMaps"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var map = new EasyGoogleMaps({
		map: {
			APIKEY: 'AIzaSyDMWIxCN9ijYRfiH7bmQN-LNRDtoboLZqY',
			container: '.js-map',
			options: {
				center: { lat: -34.097, lng: 150.644 },
				zoom: 8
			}
		},
		infobox: {
			template: '#infobox',
			class: 'awesome-infobox',
			onlyOneBox: true,
			style: {
				width: '300px'
			},
			position: {
				y: "center",
				x: "left"
			},
			closeButton: '.js-infobox-close'
		},
		markers: {
			items: [{
				"content": {
					"title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur."
				},
				"marker": {
					"position": {
						"lat": -34.397,
						"lng": 150.644
					},
					"icon": {
						"default": "img/markerDefault.png",
						"active": "img/markerActive.png",
						"size": {
							"x": 41,
							"y": 58
						},
						"centering": {
							"x": 20,
							"y": 58
						}
					}
				}
			}, {
				"content": {
					"title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur."
				},
				"marker": {
					"position": {
						"lat": -34.397,
						"lng": 150.244
					},
					"icon": {
						"default": "img/markerDefault.png",
						"active": "img/markerActive.png",
						"size": {
							"x": 41,
							"y": 58
						},
						"centering": {
							"x": 20,
							"y": 58
						}
					}
				}
			}]
		}
	});

	map.init();

/***/ }
/******/ ])
});
;