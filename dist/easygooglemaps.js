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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(console) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * EasyGoogleMaps
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Creates map with expandable markers
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name EasyGoogleMaps
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _googleMaps = __webpack_require__(2);

	var _googleMaps2 = _interopRequireDefault(_googleMaps);

	var _dot = __webpack_require__(3);

	var _dot2 = _interopRequireDefault(_dot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	exports.default = function () {

	  var utils = {
	    checkPropsString: function checkPropsString(props) {
	      return typeof props == 'string' && props.length;
	    }
	  };

	  var Map = function () {
	    function Map(props) {
	      _classCallCheck(this, Map);

	      this._props = props || {};
	      this._markers = [];
	      this._infoboxes = [];
	      this._defaultWidth = '300px';
	    }

	    _createClass(Map, [{
	      key: 'init',
	      value: function init() {
	        var props = this._props;
	        var that = this;

	        _googleMaps2.default.KEY = props.map.APIKEY;
	        _googleMaps2.default.load(function (google) {

	          !/* require */(/* min-size */function() { /* WEBPACK VAR INJECTION */(function(console) {var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(5)]; (function (InfoBox) {
	            that._initMap();
	            //if you want to get info from some another file using ajax
	            //you need turn on 'ajax' by flag in settings => ajax: true
	            //and you need path to file
	            if (!!!props.markers) return;
	            if (_typeof(props.markers) != 'object') return console.error('Data must be an object!!!');
	            if (!Object.keys(props.markers).length) return console.error('Data must be a non-empty object!!!');

	            if (props.markers.url) {
	              if (!utils.checkPropsString(props.markers) && utils.checkPropsString(props.markers.url)) {
	                that._loadData(function (items) {
	                  var infobox = utils.checkPropsString(props.infobox.template) ? that._getTemplate() : null;
	                  that._addItems(items, infobox, InfoBox);
	                });
	              }
	            } else if (!props.markers.url) {
	              var infobox = utils.checkPropsString(props.infobox.template) ? that._getTemplate() : null;
	              that._addItems(props.markers.items, infobox, InfoBox);
	            }
	          }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))}());
	        });
	      }
	    }, {
	      key: '_initMap',
	      value: function _initMap() {
	        var props = this._props;
	        this._container = document.querySelector(props.map.container);
	        this._map = new google.maps.Map(this._container, props.map.options);
	      }
	    }, {
	      key: '_loadData',
	      value: function _loadData(callback) {
	        var props = this._props;

	        var path = this._container.getAttribute(props.markers.url);
	        var xhr = new XMLHttpRequest();

	        xhr.open('GET', path, true);
	        xhr.onload = function () {
	          if (xhr.status != 200) return console.error('ошибочка, data not found');
	          callback(JSON.parse(xhr.responseText));
	        };
	        xhr.send();
	      }
	    }, {
	      key: '_getTemplate',
	      value: function _getTemplate() {
	        var HTML = document.querySelector(this._props.infobox.template).innerHTML;
	        _dot2.default.templateSettings.varname = 'baloon';
	        return _dot2.default.template(HTML);
	      }

	      //*******************************************
	      //*****************ALL ITEMS*****************
	      //*******************************************

	    }, {
	      key: '_addItems',
	      value: function _addItems(items, infobox, InfoBox) {
	        var _this = this;

	        var _loop = function _loop(i) {

	          var markerOptions = items[i].marker;
	          var marker = _this._createMarker(markerOptions);

	          _this._markers.push(marker);

	          if (infobox && _this._props.infobox) {
	            var content = items[i].content;
	            var compiled = infobox(content);
	            var ib = _this._createInfoBox(compiled, marker, InfoBox);

	            _this._infoboxes.push(ib);
	            //toggle content on click
	            google.maps.event.addListener(marker, 'click', function (e) {
	              return _this._toggleInfobox(ib, marker);
	            });
	            google.maps.event.addListener(ib, 'domready', function (e) {
	              return _this._addEventOnCloseButton(ib, marker);
	            });
	          }
	        };

	        for (var i = 0; i < items.length; i++) {
	          _loop(i);
	        }

	        if (!this._props.infobox.onlyOneBox) return;
	        google.maps.event.addListener(this._map, 'click', function (e) {
	          _this._closeAllInfobox();
	        });
	      }
	    }, {
	      key: '_addEventOnCloseButton',
	      value: function _addEventOnCloseButton(ib, marker) {
	        var _this2 = this;

	        var props = this._props;
	        var infobox = ib.div_;
	        var buttons = infobox.querySelectorAll(props.infobox.closeButton);

	        this._setInfoBoxPosition(ib, infobox);

	        Array.prototype.forEach.call(buttons, function (button) {
	          button.addEventListener('click', function (e) {
	            e.preventDefault();
	            _this2._closeInfobox(ib);
	            _this2._closeMarker(marker);
	          }, false);
	        });
	      }

	      //*******************************************
	      //*************SHOW/CLOSE METHODS************
	      //*******************************************

	    }, {
	      key: '_closeAllInfobox',
	      value: function _closeAllInfobox() {
	        var _this3 = this;

	        this._infoboxes.forEach(function (infobox) {
	          return _this3._closeInfobox(infobox);
	        });
	        this._closeMarkers();
	      }
	    }, {
	      key: '_closeInfobox',
	      value: function _closeInfobox(item) {
	        item.close();
	        item.isOpen = false;
	      }
	    }, {
	      key: '_openInfobox',
	      value: function _openInfobox(item, marker) {
	        item.open(this._map, marker);
	        item.isOpen = true;
	      }
	    }, {
	      key: '_toggleInfobox',
	      value: function _toggleInfobox(item, marker) {
	        var activeIcon = marker.activeIcon;
	        var defaultIcon = marker.defaultIcon;
	        if (!item.isOpen) {
	          if (this._props.infobox.onlyOneBox) {
	            this._closeAllInfobox();
	            this._closeMarkers();
	          }
	          this._openInfobox(item, marker);
	          if (!!activeIcon && activeIcon.length) this._toggleMarker(marker, 'activeIcon');
	        } else {
	          this._closeInfobox(item);
	          if (!!activeIcon && activeIcon.length) this._toggleMarker(marker, 'defaultIcon');
	        }
	      }

	      //*******************************************
	      //******************MARKERS******************
	      //*******************************************

	    }, {
	      key: '_createMarker',
	      value: function _createMarker(data) {
	        var icon = data.icon;
	        var size = icon.size;
	        var centering = icon.centering || {
	          x: 0,
	          y: 0
	        };
	        var iconStyles = {
	          url: icon.default || '',
	          scaledSize: new google.maps.Size(size.x, size.y),
	          anchor: new google.maps.Point(centering.x, centering.y)
	        };

	        var marker = new google.maps.Marker({
	          map: this._map,
	          position: data.position,
	          defaultIcon: data.icon.default || '',
	          activeIcon: data.icon.active || '',
	          iconSize: size,
	          iconStyles: iconStyles
	        });

	        if (icon.default) marker.setIcon(iconStyles);

	        return marker;
	      }
	    }, {
	      key: '_closeMarkers',
	      value: function _closeMarkers() {
	        var _this4 = this;

	        this._markers.forEach(function (marker) {
	          return _this4._closeMarker(marker);
	        });
	      }
	    }, {
	      key: '_closeMarker',
	      value: function _closeMarker(marker) {
	        marker.setIcon(marker.iconStyles);
	      }
	    }, {
	      key: '_toggleMarker',
	      value: function _toggleMarker(marker, img) {
	        var icon = JSON.parse(JSON.stringify(marker.iconStyles));
	        icon.url = marker[img];
	        marker.setIcon(icon);
	      }

	      //*******************************************
	      //******************INFOBOX******************
	      //*******************************************

	    }, {
	      key: '_createInfoBox',
	      value: function _createInfoBox(content, marker, InfoBox) {
	        var props = this._props.infobox;

	        var style = props.style || {};
	        var width = style.width || this._defaultWidth;
	        style.width = width;

	        var markerSize = marker.iconSize;

	        this._offsetX = markerSize.x;
	        this._offsetY = markerSize.y;

	        return new InfoBox({
	          content: content,

	          enableEventPropagation: false,

	          //move map to the current box
	          disableAutoPan: false,
	          //margins from map borders
	          infoBoxClearance: new google.maps.Size(10, 10),

	          boxClass: props.class || 'infobox',
	          zIndex: props.zIndex || null,
	          maxWidth: props.maxWidth || 0,
	          boxStyle: style,

	          //The URL of the image representing the close box.
	          //Note: The default is the URL for Google's standard close box.
	          //Set this property to "" if no close box is required.
	          closeBoxURL: '',

	          pane: "floatPane",

	          //flag opened or closed
	          isOpen: false
	        });
	      }

	      //POPUP POSITION

	    }, {
	      key: '_setInfoBoxPosition',
	      value: function _setInfoBoxPosition(infobox, div) {

	        //get map popup options
	        var props = this._props.infobox;

	        var width = div.offsetWidth;
	        var height = div.offsetHeight;

	        var position = props.position || {};
	        var x = position.x || 'top';
	        var y = position.y || 'center';

	        this._positionX = this._getInfoBoxPositionX(x, width, this._offsetX);
	        this._positionY = this._getInfoBoxPositionY(y, height, this._offsetY);

	        infobox.setOptions({
	          pixelOffset: new google.maps.Size(this._positionX, this._positionY.offset),
	          alignBottom: this._positionY.align
	        });
	      }
	    }, {
	      key: '_getInfoBoxPositionY',
	      value: function _getInfoBoxPositionY(y, height, offset) {
	        switch (y) {
	          case "top":
	            return {
	              offset: -offset,
	              align: true
	            };
	          case "center":
	            return {
	              offset: -height / 2 - offset / 2,
	              align: false
	            };
	        }

	        return {
	          offset: 0,
	          align: false
	        };
	      }
	    }, {
	      key: '_getInfoBoxPositionX',
	      value: function _getInfoBoxPositionX(x, width, offset) {
	        switch (x) {
	          case "left":
	            return -width - offset / 2;
	          case "right":
	            return offset / 2;

	        }

	        return -width / 2 - offset / 2;
	      }

	      //*******************************************
	      //******************INFOBOX******************
	      //*******************************************

	    }]);

	    return Map;
	  }();

	  return Map;
	}();

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

		if (root === null) {
			throw new Error('Google-maps package can be used only in browser');
		}

		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.GoogleMapsLoader = factory();
		}

	})(typeof window !== 'undefined' ? window : null, function() {


		'use strict';


		var googleVersion = '3.18';

		var script = null;

		var google = null;

		var loading = false;

		var callbacks = [];

		var onLoadEvents = [];

		var originalCreateLoaderMethod = null;


		var GoogleMapsLoader = {};


		GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

		GoogleMapsLoader.KEY = null;

		GoogleMapsLoader.LIBRARIES = [];

		GoogleMapsLoader.CLIENT = null;

		GoogleMapsLoader.CHANNEL = null;

		GoogleMapsLoader.LANGUAGE = null;

		GoogleMapsLoader.REGION = null;

		GoogleMapsLoader.VERSION = googleVersion;

		GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


		GoogleMapsLoader._googleMockApiObject = {};


		GoogleMapsLoader.load = function(fn) {
			if (google === null) {
				if (loading === true) {
					if (fn) {
						callbacks.push(fn);
					}
				} else {
					loading = true;

					window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
						ready(fn);
					};

					GoogleMapsLoader.createLoader();
				}
			} else if (fn) {
				fn(google);
			}
		};


		GoogleMapsLoader.createLoader = function() {
			script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = GoogleMapsLoader.createUrl();

			document.body.appendChild(script);
		};


		GoogleMapsLoader.isLoaded = function() {
			return google !== null;
		};


		GoogleMapsLoader.createUrl = function() {
			var url = GoogleMapsLoader.URL;

			url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

			if (GoogleMapsLoader.KEY) {
				url += '&key=' + GoogleMapsLoader.KEY;
			}

			if (GoogleMapsLoader.LIBRARIES.length > 0) {
				url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
			}

			if (GoogleMapsLoader.CLIENT) {
				url += '&client=' + GoogleMapsLoader.CLIENT + '&v=' + GoogleMapsLoader.VERSION;
			}

			if (GoogleMapsLoader.CHANNEL) {
				url += '&channel=' + GoogleMapsLoader.CHANNEL;
			}

			if (GoogleMapsLoader.LANGUAGE) {
				url += '&language=' + GoogleMapsLoader.LANGUAGE;
			}

			if (GoogleMapsLoader.REGION) {
				url += '&region=' + GoogleMapsLoader.REGION;
			}

			return url;
		};


		GoogleMapsLoader.release = function(fn) {
			var release = function() {
				GoogleMapsLoader.KEY = null;
				GoogleMapsLoader.LIBRARIES = [];
				GoogleMapsLoader.CLIENT = null;
				GoogleMapsLoader.CHANNEL = null;
				GoogleMapsLoader.LANGUAGE = null;
				GoogleMapsLoader.REGION = null;
				GoogleMapsLoader.VERSION = googleVersion;

				google = null;
				loading = false;
				callbacks = [];
				onLoadEvents = [];

				if (typeof window.google !== 'undefined') {
					delete window.google;
				}

				if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
					delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
				}

				if (originalCreateLoaderMethod !== null) {
					GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
					originalCreateLoaderMethod = null;
				}

				if (script !== null) {
					script.parentElement.removeChild(script);
					script = null;
				}

				if (fn) {
					fn();
				}
			};

			if (loading) {
				GoogleMapsLoader.load(function() {
					release();
				});
			} else {
				release();
			}
		};


		GoogleMapsLoader.onLoad = function(fn) {
			onLoadEvents.push(fn);
		};


		GoogleMapsLoader.makeMock = function() {
			originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

			GoogleMapsLoader.createLoader = function() {
				window.google = GoogleMapsLoader._googleMockApiObject;
				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
			};
		};


		var ready = function(fn) {
			var i;

			loading = false;

			if (google === null) {
				google = window.google;
			}

			for (i = 0; i < onLoadEvents.length; i++) {
				onLoadEvents[i](google);
			}

			if (fn) {
				fn(google);
			}

			for (i = 0; i < callbacks.length; i++) {
				callbacks[i](google);
			}

			callbacks = [];
		};


		return GoogleMapsLoader;

	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(console) {/* doT + auto-compilation of doT templates
	 *
	 * 2012, Laura Doktorova, https://github.com/olado/doT
	 * Licensed under the MIT license
	 *
	 * Compiles .def, .dot, .jst files found under the specified path.
	 * It ignores sub-directories.
	 * Template files can have multiple extensions at the same time.
	 * Files with .def extension can be included in other files via {{#def.name}}
	 * Files with .dot extension are compiled into functions with the same name and
	 * can be accessed as renderer.filename
	 * Files with .jst extension are compiled into .js files. Produced .js file can be
	 * loaded as a commonJS, AMD module, or just installed into a global variable
	 * (default is set to window.render).
	 * All inline defines defined in the .jst file are
	 * compiled into separate functions and are available via _render.filename.definename
	 *
	 * Basic usage:
	 * var dots = require("dot").process({path: "./views"});
	 * dots.mytemplate({foo:"hello world"});
	 *
	 * The above snippet will:
	 * 1. Compile all templates in views folder (.dot, .def, .jst)
	 * 2. Place .js files compiled from .jst templates into the same folder.
	 *    These files can be used with require, i.e. require("./views/mytemplate").
	 * 3. Return an object with functions compiled from .dot templates as its properties.
	 * 4. Render mytemplate template.
	 */

	var fs = __webpack_require__(1),
		doT = module.exports = __webpack_require__(4);

	doT.process = function(options) {
		//path, destination, global, rendermodule, templateSettings
		return new InstallDots(options).compileAll();
	};

	function InstallDots(o) {
		this.__path 		= o.path || "./";
		if (this.__path[this.__path.length-1] !== '/') this.__path += '/';
		this.__destination	= o.destination || this.__path;
		if (this.__destination[this.__destination.length-1] !== '/') this.__destination += '/';
		this.__global		= o.global || "window.render";
		this.__rendermodule	= o.rendermodule || {};
		this.__settings 	= o.templateSettings ? copy(o.templateSettings, copy(doT.templateSettings)) : undefined;
		this.__includes		= {};
	}

	InstallDots.prototype.compileToFile = function(path, template, def) {
		def = def || {};
		var modulename = path.substring(path.lastIndexOf("/")+1, path.lastIndexOf("."))
			, defs = copy(this.__includes, copy(def))
			, settings = this.__settings || doT.templateSettings
			, compileoptions = copy(settings)
			, defaultcompiled = doT.template(template, settings, defs)
			, exports = []
			, compiled = ""
			, fn;

		for (var property in defs) {
			if (defs[property] !== def[property] && defs[property] !== this.__includes[property]) {
				fn = undefined;
				if (typeof defs[property] === 'string') {
					fn = doT.template(defs[property], settings, defs);
				} else if (typeof defs[property] === 'function') {
					fn = defs[property];
				} else if (defs[property].arg) {
					compileoptions.varname = defs[property].arg;
					fn = doT.template(defs[property].text, compileoptions, defs);
				}
				if (fn) {
					compiled += fn.toString().replace('anonymous', property);
					exports.push(property);
				}
			}
		}
		compiled += defaultcompiled.toString().replace('anonymous', modulename);
		fs.writeFileSync(path, "(function(){" + compiled
			+ "var itself=" + modulename + ", _encodeHTML=(" + doT.encodeHTMLSource.toString() + "(" + (settings.doNotSkipEncoded || '') + "));"
			+ addexports(exports)
			+ "if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {"
			+ this.__global + "=" + this.__global + "||{};" + this.__global + "['" + modulename + "']=itself;}}());");
	};

	function addexports(exports) {
		var ret = '';
		for (var i=0; i< exports.length; i++) {
			ret += "itself." + exports[i]+ "=" + exports[i]+";";
		}
		return ret;
	}

	function copy(o, to) {
		to = to || {};
		for (var property in o) {
			to[property] = o[property];
		}
		return to;
	}

	function readdata(path) {
		var data = fs.readFileSync(path);
		if (data) return data.toString();
		console.log("problems with " + path);
	}

	InstallDots.prototype.compilePath = function(path) {
		var data = readdata(path);
		if (data) {
			return doT.template(data,
						this.__settings || doT.templateSettings,
						copy(this.__includes));
		}
	};

	InstallDots.prototype.compileAll = function() {
		if (doT.log) console.log("Compiling all doT templates...");

		var defFolder = this.__path,
			sources = fs.readdirSync(defFolder),
			k, l, name;

		for( k = 0, l = sources.length; k < l; k++) {
			name = sources[k];
			if (/\.def(\.dot|\.jst)?$/.test(name)) {
				if (doT.log) console.log("Loaded def " + name);
				this.__includes[name.substring(0, name.indexOf('.'))] = readdata(defFolder + name);
			}
		}

		for( k = 0, l = sources.length; k < l; k++) {
			name = sources[k];
			if (/\.dot(\.def|\.jst)?$/.test(name)) {
				if (doT.log) console.log("Compiling " + name + " to function");
				this.__rendermodule[name.substring(0, name.indexOf('.'))] = this.compilePath(defFolder + name);
			}
			if (/\.jst(\.dot|\.def)?$/.test(name)) {
				if (doT.log) console.log("Compiling " + name + " to file");
				this.compileToFile(this.__destination + name.substring(0, name.indexOf('.')) + '.js',
						readdata(defFolder + name));
			}
		}
		return this.__rendermodule;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(console) {// doT.js
	// 2011-2014, Laura Doktorova, https://github.com/olado/doT
	// Licensed under the MIT license.

	(function() {
		"use strict";

		var doT = {
			version: "1.1.1",
			templateSettings: {
				evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
				interpolate: /\{\{=([\s\S]+?)\}\}/g,
				encode:      /\{\{!([\s\S]+?)\}\}/g,
				use:         /\{\{#([\s\S]+?)\}\}/g,
				useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
				define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
				defineParams:/^\s*([\w$]+):([\s\S]+)/,
				conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
				iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
				varname:	"it",
				strip:		true,
				append:		true,
				selfcontained: false,
				doNotSkipEncoded: false
			},
			template: undefined, //fn, compile template
			compile:  undefined, //fn, for express
			log: true
		}, _globals;

		doT.encodeHTMLSource = function(doNotSkipEncoded) {
			var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
				matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
			return function(code) {
				return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
			};
		};

		_globals = (function(){ return this || (0,eval)("this"); }());

		/* istanbul ignore else */
		if (typeof module !== "undefined" && module.exports) {
			module.exports = doT;
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return doT;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			_globals.doT = doT;
		}

		var startend = {
			append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
			split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
		}, skip = /$^/;

		function resolveDefs(c, block, def) {
			return ((typeof block === "string") ? block : block.toString())
			.replace(c.define || skip, function(m, code, assign, value) {
				if (code.indexOf("def.") === 0) {
					code = code.substring(4);
				}
				if (!(code in def)) {
					if (assign === ":") {
						if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
							def[code] = {arg: param, text: v};
						});
						if (!(code in def)) def[code]= value;
					} else {
						new Function("def", "def['"+code+"']=" + value)(def);
					}
				}
				return "";
			})
			.replace(c.use || skip, function(m, code) {
				if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
					if (def[d] && def[d].arg && param) {
						var rw = (d+":"+param).replace(/'|\\/g, "_");
						def.__exp = def.__exp || {};
						def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
						return s + "def.__exp['"+rw+"']";
					}
				});
				var v = new Function("def", "return " + code)(def);
				return v ? resolveDefs(c, v, def) : v;
			});
		}

		function unescape(code) {
			return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
		}

		doT.template = function(tmpl, c, def) {
			c = c || doT.templateSettings;
			var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
				str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

			str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
						.replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
				.replace(/'|\\/g, "\\$&")
				.replace(c.interpolate || skip, function(m, code) {
					return cse.start + unescape(code) + cse.end;
				})
				.replace(c.encode || skip, function(m, code) {
					needhtmlencode = true;
					return cse.startencode + unescape(code) + cse.end;
				})
				.replace(c.conditional || skip, function(m, elsecase, code) {
					return elsecase ?
						(code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
						(code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
				})
				.replace(c.iterate || skip, function(m, iterate, vname, iname) {
					if (!iterate) return "';} } out+='";
					sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
					return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
						+vname+"=arr"+sid+"["+indv+"+=1];out+='";
				})
				.replace(c.evaluate || skip, function(m, code) {
					return "';" + unescape(code) + "out+='";
				})
				+ "';return out;")
				.replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
				.replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
				//.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

			if (needhtmlencode) {
				if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
				str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
					+ doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
					+ str;
			}
			try {
				return new Function(c.varname, str);
			} catch (e) {
				/* istanbul ignore else */
				if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
				throw e;
			}
		};

		doT.compile = function(tmpl, def) {
			return doT.template(tmpl, null, def);
		};
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @name InfoBox
	 * @version 1.1.13 [March 19, 2014]
	 * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
	 * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
	 * @fileoverview InfoBox extends the Google Maps JavaScript API V3 <tt>OverlayView</tt> class.
	 *  <p>
	 *  An InfoBox behaves like a <tt>google.maps.InfoWindow</tt>, but it supports several
	 *  additional properties for advanced styling. An InfoBox can also be used as a map label.
	 *  <p>
	 *  An InfoBox also fires the same events as a <tt>google.maps.InfoWindow</tt>.
	 */

	/*!
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *       http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/*jslint browser:true */
	/*global google */

	/**
	 * @name InfoBoxOptions
	 * @class This class represents the optional parameter passed to the {@link InfoBox} constructor.
	 * @property {string|Node} content The content of the InfoBox (plain text or an HTML DOM node).
	 * @property {boolean} [disableAutoPan=false] Disable auto-pan on <tt>open</tt>.
	 * @property {number} maxWidth The maximum width (in pixels) of the InfoBox. Set to 0 if no maximum.
	 * @property {Size} pixelOffset The offset (in pixels) from the top left corner of the InfoBox
	 *  (or the bottom left corner if the <code>alignBottom</code> property is <code>true</code>)
	 *  to the map pixel corresponding to <tt>position</tt>.
	 * @property {LatLng} position The geographic location at which to display the InfoBox.
	 * @property {number} zIndex The CSS z-index style value for the InfoBox.
	 *  Note: This value overrides a zIndex setting specified in the <tt>boxStyle</tt> property.
	 * @property {string} [boxClass="infoBox"] The name of the CSS class defining the styles for the InfoBox container.
	 * @property {Object} [boxStyle] An object literal whose properties define specific CSS
	 *  style values to be applied to the InfoBox. Style values defined here override those that may
	 *  be defined in the <code>boxClass</code> style sheet. If this property is changed after the
	 *  InfoBox has been created, all previously set styles (except those defined in the style sheet)
	 *  are removed from the InfoBox before the new style values are applied.
	 * @property {string} closeBoxMargin The CSS margin style value for the close box.
	 *  The default is "2px" (a 2-pixel margin on all sides).
	 * @property {string} closeBoxURL The URL of the image representing the close box.
	 *  Note: The default is the URL for Google's standard close box.
	 *  Set this property to "" if no close box is required.
	 * @property {Size} infoBoxClearance Minimum offset (in pixels) from the InfoBox to the
	 *  map edge after an auto-pan.
	 * @property {boolean} [isHidden=false] Hide the InfoBox on <tt>open</tt>.
	 *  [Deprecated in favor of the <tt>visible</tt> property.]
	 * @property {boolean} [visible=true] Show the InfoBox on <tt>open</tt>.
	 * @property {boolean} alignBottom Align the bottom left corner of the InfoBox to the <code>position</code>
	 *  location (default is <tt>false</tt> which means that the top left corner of the InfoBox is aligned).
	 * @property {string} pane The pane where the InfoBox is to appear (default is "floatPane").
	 *  Set the pane to "mapPane" if the InfoBox is being used as a map label.
	 *  Valid pane names are the property names for the <tt>google.maps.MapPanes</tt> object.
	 * @property {boolean} enableEventPropagation Propagate mousedown, mousemove, mouseover, mouseout,
	 *  mouseup, click, dblclick, touchstart, touchend, touchmove, and contextmenu events in the InfoBox
	 *  (default is <tt>false</tt> to mimic the behavior of a <tt>google.maps.InfoWindow</tt>). Set
	 *  this property to <tt>true</tt> if the InfoBox is being used as a map label.
	 */

	/**
	 * Creates an InfoBox with the options specified in {@link InfoBoxOptions}.
	 *  Call <tt>InfoBox.open</tt> to add the box to the map.
	 * @constructor
	 * @param {InfoBoxOptions} [opt_opts]
	 */
	function InfoBox(opt_opts) {

	  opt_opts = opt_opts || {};

	  google.maps.OverlayView.apply(this, arguments);

	  // Standard options (in common with google.maps.InfoWindow):
	  //
	  this.content_ = opt_opts.content || "";
	  this.disableAutoPan_ = opt_opts.disableAutoPan || false;
	  this.maxWidth_ = opt_opts.maxWidth || 0;
	  this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
	  this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
	  this.zIndex_ = opt_opts.zIndex || null;

	  // Additional options (unique to InfoBox):
	  //
	  this.boxClass_ = opt_opts.boxClass || "infoBox";
	  this.boxStyle_ = opt_opts.boxStyle || {};
	  this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
	  this.closeBoxURL_ = opt_opts.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
	  if (opt_opts.closeBoxURL === "") {
	    this.closeBoxURL_ = "";
	  }
	  this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);

	  if (typeof opt_opts.visible === "undefined") {
	    if (typeof opt_opts.isHidden === "undefined") {
	      opt_opts.visible = true;
	    } else {
	      opt_opts.visible = !opt_opts.isHidden;
	    }
	  }
	  this.isHidden_ = !opt_opts.visible;

	  this.alignBottom_ = opt_opts.alignBottom || false;
	  this.pane_ = opt_opts.pane || "floatPane";
	  this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;

	  this.div_ = null;
	  this.closeListener_ = null;
	  this.moveListener_ = null;
	  this.mapListener_ = null;
	  this.contextListener_ = null;
	  this.eventListeners_ = null;
	  this.fixedWidthSet_ = null;
	}

	/* InfoBox extends OverlayView in the Google Maps API v3.
	 */
	InfoBox.prototype = new google.maps.OverlayView();

	/**
	 * Creates the DIV representing the InfoBox.
	 * @private
	 */
	InfoBox.prototype.createInfoBoxDiv_ = function () {

	  var i;
	  var events;
	  var bw;
	  var me = this;

	  // This handler prevents an event in the InfoBox from being passed on to the map.
	  //
	  var cancelHandler = function (e) {
	    e.cancelBubble = true;
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    }
	  };

	  // This handler ignores the current event in the InfoBox and conditionally prevents
	  // the event from being passed on to the map. It is used for the contextmenu event.
	  //
	  var ignoreHandler = function (e) {

	    e.returnValue = false;

	    if (e.preventDefault) {

	      e.preventDefault();
	    }

	    if (!me.enableEventPropagation_) {

	      cancelHandler(e);
	    }
	  };

	  if (!this.div_) {

	    this.div_ = document.createElement("div");

	    this.setBoxStyle_();

	    if (typeof this.content_.nodeType === "undefined") {
	      this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;
	    } else {
	      this.div_.innerHTML = this.getCloseBoxImg_();
	      this.div_.appendChild(this.content_);
	    }

	    // Add the InfoBox DIV to the DOM
	    this.getPanes()[this.pane_].appendChild(this.div_);

	    this.addClickHandler_();

	    if (this.div_.style.width) {

	      this.fixedWidthSet_ = true;

	    } else {

	      if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {

	        this.div_.style.width = this.maxWidth_;
	        this.fixedWidthSet_ = true;

	      } else { // The following code is needed to overcome problems with MSIE

	        bw = this.getBoxWidths_();

	        this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
	        this.fixedWidthSet_ = false;
	      }
	    }

	    this.panBox_(this.disableAutoPan_);

	    if (!this.enableEventPropagation_) {

	      this.eventListeners_ = [];

	      // Cancel event propagation.
	      //
	      // Note: mousemove not included (to resolve Issue 152)
	      events = ["mousedown", "mouseover", "mouseout", "mouseup",
	      "click", "dblclick", "touchstart", "touchend", "touchmove"];

	      for (i = 0; i < events.length; i++) {

	        this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
	      }
	      
	      // Workaround for Google bug that causes the cursor to change to a pointer
	      // when the mouse moves over a marker underneath InfoBox.
	      this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function (e) {
	        this.style.cursor = "default";
	      }));
	    }

	    this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", ignoreHandler);

	    /**
	     * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
	     * @name InfoBox#domready
	     * @event
	     */
	    google.maps.event.trigger(this, "domready");
	  }
	};

	/**
	 * Returns the HTML <IMG> tag for the close box.
	 * @private
	 */
	InfoBox.prototype.getCloseBoxImg_ = function () {

	  var img = "";

	  if (this.closeBoxURL_ !== "") {

	    img  = "<img";
	    img += " src='" + this.closeBoxURL_ + "'";
	    img += " align=right"; // Do this because Opera chokes on style='float: right;'
	    img += " style='";
	    img += " position: relative;"; // Required by MSIE
	    img += " cursor: pointer;";
	    img += " margin: " + this.closeBoxMargin_ + ";";
	    img += "'>";
	  }

	  return img;
	};

	/**
	 * Adds the click handler to the InfoBox close box.
	 * @private
	 */
	InfoBox.prototype.addClickHandler_ = function () {

	  var closeBox;

	  if (this.closeBoxURL_ !== "") {

	    closeBox = this.div_.firstChild;
	    this.closeListener_ = google.maps.event.addDomListener(closeBox, "click", this.getCloseClickHandler_());

	  } else {

	    this.closeListener_ = null;
	  }
	};

	/**
	 * Returns the function to call when the user clicks the close box of an InfoBox.
	 * @private
	 */
	InfoBox.prototype.getCloseClickHandler_ = function () {

	  var me = this;

	  return function (e) {

	    // 1.0.3 fix: Always prevent propagation of a close box click to the map:
	    e.cancelBubble = true;

	    if (e.stopPropagation) {

	      e.stopPropagation();
	    }

	    /**
	     * This event is fired when the InfoBox's close box is clicked.
	     * @name InfoBox#closeclick
	     * @event
	     */
	    google.maps.event.trigger(me, "closeclick");

	    me.close();
	  };
	};

	/**
	 * Pans the map so that the InfoBox appears entirely within the map's visible area.
	 * @private
	 */
	InfoBox.prototype.panBox_ = function (disablePan) {

	  var map;
	  var bounds;
	  var xOffset = 0, yOffset = 0;

	  if (!disablePan) {

	    map = this.getMap();

	    if (map instanceof google.maps.Map) { // Only pan if attached to map, not panorama

	      if (!map.getBounds().contains(this.position_)) {
	      // Marker not in visible area of map, so set center
	      // of map to the marker position first.
	        map.setCenter(this.position_);
	      }

	      bounds = map.getBounds();

	      var mapDiv = map.getDiv();
	      var mapWidth = mapDiv.offsetWidth;
	      var mapHeight = mapDiv.offsetHeight;
	      var iwOffsetX = this.pixelOffset_.width;
	      var iwOffsetY = this.pixelOffset_.height;
	      var iwWidth = this.div_.offsetWidth;
	      var iwHeight = this.div_.offsetHeight;
	      var padX = this.infoBoxClearance_.width;
	      var padY = this.infoBoxClearance_.height;
	      var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);

	      if (pixPosition.x < (-iwOffsetX + padX)) {
	        xOffset = pixPosition.x + iwOffsetX - padX;
	      } else if ((pixPosition.x + iwWidth + iwOffsetX + padX) > mapWidth) {
	        xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
	      }
	      if (this.alignBottom_) {
	        if (pixPosition.y < (-iwOffsetY + padY + iwHeight)) {
	          yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
	        } else if ((pixPosition.y + iwOffsetY + padY) > mapHeight) {
	          yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
	        }
	      } else {
	        if (pixPosition.y < (-iwOffsetY + padY)) {
	          yOffset = pixPosition.y + iwOffsetY - padY;
	        } else if ((pixPosition.y + iwHeight + iwOffsetY + padY) > mapHeight) {
	          yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
	        }
	      }

	      if (!(xOffset === 0 && yOffset === 0)) {

	        // Move the map to the shifted center.
	        //
	        var c = map.getCenter();
	        map.panBy(xOffset, yOffset);
	      }
	    }
	  }
	};

	/**
	 * Sets the style of the InfoBox by setting the style sheet and applying
	 * other specific styles requested.
	 * @private
	 */
	InfoBox.prototype.setBoxStyle_ = function () {

	  var i, boxStyle;

	  if (this.div_) {

	    // Apply style values from the style sheet defined in the boxClass parameter:
	    this.div_.className = this.boxClass_;

	    // Clear existing inline style values:
	    this.div_.style.cssText = "";

	    // Apply style values defined in the boxStyle parameter:
	    boxStyle = this.boxStyle_;
	    for (i in boxStyle) {

	      if (boxStyle.hasOwnProperty(i)) {

	        this.div_.style[i] = boxStyle[i];
	      }
	    }

	    // Fix for iOS disappearing InfoBox problem.
	    // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
	    this.div_.style.WebkitTransform = "translateZ(0)";

	    // Fix up opacity style for benefit of MSIE:
	    //
	    if (typeof this.div_.style.opacity !== "undefined" && this.div_.style.opacity !== "") {
	      // See http://www.quirksmode.org/css/opacity.html
	      this.div_.style.MsFilter = "\"progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (this.div_.style.opacity * 100) + ")\"";
	      this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
	    }

	    // Apply required styles:
	    //
	    this.div_.style.position = "absolute";
	    this.div_.style.visibility = 'hidden';
	    if (this.zIndex_ !== null) {

	      this.div_.style.zIndex = this.zIndex_;
	    }
	    if (!this.div_.style.overflow) {
	      this.div_.style.overflow = "auto";
	    }
	  }
	};

	/**
	 * Get the widths of the borders of the InfoBox.
	 * @private
	 * @return {Object} widths object (top, bottom left, right)
	 */
	InfoBox.prototype.getBoxWidths_ = function () {

	  var computedStyle;
	  var bw = {top: 0, bottom: 0, left: 0, right: 0};
	  var box = this.div_;

	  if (document.defaultView && document.defaultView.getComputedStyle) {

	    computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");

	    if (computedStyle) {

	      // The computed styles are always in pixel units (good!)
	      bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
	      bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
	      bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
	      bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
	    }

	  } else if (document.documentElement.currentStyle) { // MSIE

	    if (box.currentStyle) {

	      // The current styles may not be in pixel units, but assume they are (bad!)
	      bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
	      bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
	      bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
	      bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
	    }
	  }

	  return bw;
	};

	/**
	 * Invoked when <tt>close</tt> is called. Do not call it directly.
	 */
	InfoBox.prototype.onRemove = function () {

	  if (this.div_) {

	    this.div_.parentNode.removeChild(this.div_);
	    this.div_ = null;
	  }
	};

	/**
	 * Draws the InfoBox based on the current map projection and zoom level.
	 */
	InfoBox.prototype.draw = function () {

	  this.createInfoBoxDiv_();

	  var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);

	  this.div_.style.left = (pixPosition.x + this.pixelOffset_.width) + "px";
	  
	  if (this.alignBottom_) {
	    this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + "px";
	  } else {
	    this.div_.style.top = (pixPosition.y + this.pixelOffset_.height) + "px";
	  }

	  if (this.isHidden_) {

	    this.div_.style.visibility = "hidden";

	  } else {

	    this.div_.style.visibility = "visible";
	  }
	};

	/**
	 * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
	 *  <tt>closeBoxMargin</tt>, <tt>closeBoxURL</tt>, and <tt>enableEventPropagation</tt>
	 *  properties have no affect until the current InfoBox is <tt>close</tt>d and a new one
	 *  is <tt>open</tt>ed.
	 * @param {InfoBoxOptions} opt_opts
	 */
	InfoBox.prototype.setOptions = function (opt_opts) {
	  if (typeof opt_opts.boxClass !== "undefined") { // Must be first

	    this.boxClass_ = opt_opts.boxClass;
	    this.setBoxStyle_();
	  }
	  if (typeof opt_opts.boxStyle !== "undefined") { // Must be second

	    this.boxStyle_ = opt_opts.boxStyle;
	    this.setBoxStyle_();
	  }
	  if (typeof opt_opts.content !== "undefined") {

	    this.setContent(opt_opts.content);
	  }
	  if (typeof opt_opts.disableAutoPan !== "undefined") {

	    this.disableAutoPan_ = opt_opts.disableAutoPan;
	  }
	  if (typeof opt_opts.maxWidth !== "undefined") {

	    this.maxWidth_ = opt_opts.maxWidth;
	  }
	  if (typeof opt_opts.pixelOffset !== "undefined") {

	    this.pixelOffset_ = opt_opts.pixelOffset;
	  }
	  if (typeof opt_opts.alignBottom !== "undefined") {

	    this.alignBottom_ = opt_opts.alignBottom;
	  }
	  if (typeof opt_opts.position !== "undefined") {

	    this.setPosition(opt_opts.position);
	  }
	  if (typeof opt_opts.zIndex !== "undefined") {

	    this.setZIndex(opt_opts.zIndex);
	  }
	  if (typeof opt_opts.closeBoxMargin !== "undefined") {

	    this.closeBoxMargin_ = opt_opts.closeBoxMargin;
	  }
	  if (typeof opt_opts.closeBoxURL !== "undefined") {

	    this.closeBoxURL_ = opt_opts.closeBoxURL;
	  }
	  if (typeof opt_opts.infoBoxClearance !== "undefined") {

	    this.infoBoxClearance_ = opt_opts.infoBoxClearance;
	  }
	  if (typeof opt_opts.isHidden !== "undefined") {

	    this.isHidden_ = opt_opts.isHidden;
	  }
	  if (typeof opt_opts.visible !== "undefined") {

	    this.isHidden_ = !opt_opts.visible;
	  }
	  if (typeof opt_opts.enableEventPropagation !== "undefined") {

	    this.enableEventPropagation_ = opt_opts.enableEventPropagation;
	  }

	  if (this.div_) {

	    this.draw();
	  }
	};

	/**
	 * Sets the content of the InfoBox.
	 *  The content can be plain text or an HTML DOM node.
	 * @param {string|Node} content
	 */
	InfoBox.prototype.setContent = function (content) {
	  this.content_ = content;

	  if (this.div_) {

	    if (this.closeListener_) {

	      google.maps.event.removeListener(this.closeListener_);
	      this.closeListener_ = null;
	    }

	    // Odd code required to make things work with MSIE.
	    //
	    if (!this.fixedWidthSet_) {

	      this.div_.style.width = "";
	    }

	    if (typeof content.nodeType === "undefined") {
	      this.div_.innerHTML = this.getCloseBoxImg_() + content;
	    } else {
	      this.div_.innerHTML = this.getCloseBoxImg_();
	      this.div_.appendChild(content);
	    }

	    // Perverse code required to make things work with MSIE.
	    // (Ensures the close box does, in fact, float to the right.)
	    //
	    if (!this.fixedWidthSet_) {
	      this.div_.style.width = this.div_.offsetWidth + "px";
	      if (typeof content.nodeType === "undefined") {
	        this.div_.innerHTML = this.getCloseBoxImg_() + content;
	      } else {
	        this.div_.innerHTML = this.getCloseBoxImg_();
	        this.div_.appendChild(content);
	      }
	    }

	    this.addClickHandler_();
	  }

	  /**
	   * This event is fired when the content of the InfoBox changes.
	   * @name InfoBox#content_changed
	   * @event
	   */
	  google.maps.event.trigger(this, "content_changed");
	};

	/**
	 * Sets the geographic location of the InfoBox.
	 * @param {LatLng} latlng
	 */
	InfoBox.prototype.setPosition = function (latlng) {

	  this.position_ = latlng;

	  if (this.div_) {

	    this.draw();
	  }

	  /**
	   * This event is fired when the position of the InfoBox changes.
	   * @name InfoBox#position_changed
	   * @event
	   */
	  google.maps.event.trigger(this, "position_changed");
	};

	/**
	 * Sets the zIndex style for the InfoBox.
	 * @param {number} index
	 */
	InfoBox.prototype.setZIndex = function (index) {

	  this.zIndex_ = index;

	  if (this.div_) {

	    this.div_.style.zIndex = index;
	  }

	  /**
	   * This event is fired when the zIndex of the InfoBox changes.
	   * @name InfoBox#zindex_changed
	   * @event
	   */
	  google.maps.event.trigger(this, "zindex_changed");
	};

	/**
	 * Sets the visibility of the InfoBox.
	 * @param {boolean} isVisible
	 */
	InfoBox.prototype.setVisible = function (isVisible) {

	  this.isHidden_ = !isVisible;
	  if (this.div_) {
	    this.div_.style.visibility = (this.isHidden_ ? "hidden" : "visible");
	  }
	};

	/**
	 * Returns the content of the InfoBox.
	 * @returns {string}
	 */
	InfoBox.prototype.getContent = function () {

	  return this.content_;
	};

	/**
	 * Returns the geographic location of the InfoBox.
	 * @returns {LatLng}
	 */
	InfoBox.prototype.getPosition = function () {

	  return this.position_;
	};

	/**
	 * Returns the zIndex for the InfoBox.
	 * @returns {number}
	 */
	InfoBox.prototype.getZIndex = function () {

	  return this.zIndex_;
	};

	/**
	 * Returns a flag indicating whether the InfoBox is visible.
	 * @returns {boolean}
	 */
	InfoBox.prototype.getVisible = function () {

	  var isVisible;

	  if ((typeof this.getMap() === "undefined") || (this.getMap() === null)) {
	    isVisible = false;
	  } else {
	    isVisible = !this.isHidden_;
	  }
	  return isVisible;
	};

	/**
	 * Shows the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
	 */
	InfoBox.prototype.show = function () {

	  this.isHidden_ = false;
	  if (this.div_) {
	    this.div_.style.visibility = "visible";
	  }
	};

	/**
	 * Hides the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
	 */
	InfoBox.prototype.hide = function () {

	  this.isHidden_ = true;
	  if (this.div_) {
	    this.div_.style.visibility = "hidden";
	  }
	};

	/**
	 * Adds the InfoBox to the specified map or Street View panorama. If <tt>anchor</tt>
	 *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
	 *  of the InfoBox is set to the position of the <tt>anchor</tt>. If the
	 *  anchor is dragged to a new location, the InfoBox moves as well.
	 * @param {Map|StreetViewPanorama} map
	 * @param {MVCObject} [anchor]
	 */
	InfoBox.prototype.open = function (map, anchor) {

	  var me = this;

	  if (anchor) {

	    this.position_ = anchor.getPosition();
	    this.moveListener_ = google.maps.event.addListener(anchor, "position_changed", function () {
	      me.setPosition(this.getPosition());
	    });

	    this.mapListener_ = google.maps.event.addListener(anchor, "map_changed", function() {
	      me.setMap(this.map);
	    });    
	  }

	  this.setMap(map);

	  if (this.div_) {

	    this.panBox_();
	  }
	};

	/**
	 * Removes the InfoBox from the map.
	 */
	InfoBox.prototype.close = function () {

	  var i;

	  if (this.closeListener_) {

	    google.maps.event.removeListener(this.closeListener_);
	    this.closeListener_ = null;
	  }

	  if (this.eventListeners_) {
	    
	    for (i = 0; i < this.eventListeners_.length; i++) {

	      google.maps.event.removeListener(this.eventListeners_[i]);
	    }
	    this.eventListeners_ = null;
	  }

	  if (this.moveListener_) {

	    google.maps.event.removeListener(this.moveListener_);
	    this.moveListener_ = null;
	  }

	  if (this.mapListener_) {
	    
	    google.maps.event.removeListener(this.mapListener_);
	    this.mapListener_ = null;    
	  }
	 
	  if (this.contextListener_) {

	    google.maps.event.removeListener(this.contextListener_);
	    this.contextListener_ = null;
	  }

	  this.setMap(null);
	};


	module.exports = InfoBox;

/***/ }
/******/ ])
});
;