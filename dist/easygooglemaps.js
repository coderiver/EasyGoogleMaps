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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * EasyGoogleMaps
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Description
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @name EasyGoogleMaps
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @function
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Array} data An array of data
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Object} options An object containing the following fields:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @return {Array} Result
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _underscore = __webpack_require__(1);

	var _googleMaps = __webpack_require__(2);

	var _googleMaps2 = _interopRequireDefault(_googleMaps);

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

	        _googleMaps2.default.KEY = props.APIKEY;
	        _googleMaps2.default.load(function (google) {

	          !/* require */(/* min-size */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(3)]; (function (InfoBox) {
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
	          }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
	        });
	      }
	    }, {
	      key: '_initMap',
	      value: function _initMap() {
	        var props = this._props;
	        this._container = document.querySelector(props.container);
	        this._map = new google.maps.Map(this._container, props.options);
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
	        return (0, _underscore.template)(HTML);
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;

	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.8.3';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };

	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };

	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };

	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };

	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }

	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };

	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);

	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }

	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }

	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);

	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);

	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);

	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };


	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }

	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;

	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }

	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);

	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = property;

	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


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