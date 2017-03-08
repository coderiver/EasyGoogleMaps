/**
 * EasyGoogleMaps
 * Description
 * Creates map with expandable markers
 * @name EasyGoogleMaps
 */

 import GoogleMapsLoader from 'google-maps';
 import dot from 'dot';


 export default (function() {

 	let INFOBOX = null;

 	const utils = {
 		checkPropsString(props) {
 			return (typeof props == 'string' && props.length);
 		}
 	};

 	class Map {

 		constructor(props) {
 			this._props = props || {};
 			this._markers = [];
 			this._infoboxes = [];
 			this._defaultWidth = '300px';
 		}

 		init() {
 			let props = this._props;
 			let that = this;

 			GoogleMapsLoader.KEY = props.map.APIKEY;
 			GoogleMapsLoader.load(function(google) {

 				require(["google-maps-infobox"], function(InfoBox) {
 					INFOBOX = InfoBox;
 				  	that._initMap();
					//if you want to get info from some another file using ajax
					//you need set url to your file
					if (!!!props.markers) return;
					if (typeof props.markers != 'object') return console.error('Data must be an object!!!');
					if (!Object.keys(props.markers).length) return console.error('Data must be a non-empty object!!!');

					if (props.markers.url) {
						if (!utils.checkPropsString(props.markers) && utils.checkPropsString(props.markers.url)) {
							that._loadData((items) => {
								let infobox = utils.checkPropsString(props.infobox.template)
									? that._getTemplate()
									: null;
								that._addItems(items, infobox);
							});
						}
					} else if (!props.markers.url) {
						let infobox = utils.checkPropsString(props.infobox.template)
							? that._getTemplate()
							: null;
						that._addItems(props.markers.items, infobox);
					}
 				});

 			});
 		}

 		_initMap() {
 			let props = this._props;
 			this._container = document.querySelector(props.map.container);
 			this._map = new google.maps.Map(this._container, props.map.options);
 		}

 		_loadData(callback) {
 			let props = this._props;

 			let path = this._container.getAttribute(props.markers.url);
 			let xhr = new XMLHttpRequest();

 			xhr.open('GET', path, true);
 			xhr.onload = () => {
 				if (xhr.status != 200) return console.error('ошибочка, data not found');
 				callback(JSON.parse(xhr.responseText));
 			};
 			xhr.send();
 		}

 		_getTemplate() {
 			let HTML = document.querySelector(this._props.infobox.template).innerHTML;
 			dot.templateSettings.varname = 'baloon';
 			return dot.template(HTML);
 		}


 		//*******************************************
 		//*****************ALL ITEMS*****************
 		//*******************************************

 		_addItems(items, infobox) {
 			for (let i = 0; i < items.length; i++) {

 				let markerOptions = items[i].marker;
 				let marker = this._createMarker(markerOptions);

 				this._markers.push(marker);

 				if (infobox && this._props.infobox) {
 					let content = items[i].content;
 					let compiled = infobox(content);
 					let ib = this._createInfoBox(compiled, marker);

 					this._infoboxes.push(ib);
 					//toggle content on click
 					google.maps.event.addListener(marker, 'click', e => this._toggleInfobox(ib, marker));
 					google.maps.event.addListener(ib, 'domready', e => this._addEventOnCloseButton(ib, marker));
 				}

 			}

 			if (!this._props.infobox.onlyOneBox) return;
 			google.maps.event.addListener(this._map, 'click', e => {
 				this._closeAllInfobox();
 			});
 		}

 		_addEventOnCloseButton(ib, marker) {
 			let props = this._props;
 			let infobox = ib.div_;
 			let buttons = infobox.querySelectorAll(props.infobox.closeButton);

 			this._setInfoBoxPosition(ib, infobox);

 			Array.prototype.forEach.call(buttons, button => {
 				button.addEventListener('click', e => {
 					e.preventDefault();
 					this._closeInfobox(ib);
 					this._closeMarker(marker);
 				}, false);
 			});
 		}

 		//*******************************************
 		//*************SHOW/CLOSE METHODS************
 		//*******************************************

 		_closeAllInfobox() {
 			this._infoboxes.forEach(infobox => this._closeInfobox(infobox));
 			this._closeMarkers();
 		}

 		_closeInfobox(item) {
 			item.close();
 			item.isOpen = false;
 		}

 		_openInfobox(item, marker) {
 			item.open(this._map, marker);
 			item.isOpen = true;
 		}

 		_toggleInfobox(item, marker) {
 			let activeIcon = marker.activeIcon;
 			let defaultIcon = marker.defaultIcon;
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

 		_createMarker(data) {
 			let icon = data.icon;
 			let size = icon.size;
 			let centering = icon.centering || {
 				x: 0,
 				y: 0
 			};
 			let iconStyles = {
 					url: icon.default || '',
 					scaledSize: new google.maps.Size(size.x, size.y),
 					anchor: new google.maps.Point(centering.x, centering.y)
 				};

 			let marker = new google.maps.Marker({
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

 		_closeMarkers() {
 			this._markers.forEach(marker => this._closeMarker(marker));
 		}

 		_closeMarker(marker) {
 			marker.setIcon(marker.iconStyles);
 		}

 		_toggleMarker(marker, img) {
 			let icon = JSON.parse(JSON.stringify(marker.iconStyles));
 			icon.url = marker[img];
 			marker.setIcon(icon)
 		}

 		//*******************************************
 		//******************INFOBOX******************
 		//*******************************************

 		_createInfoBox(content, marker) {
 			let props = this._props.infobox;

 			let style = props.style || {};
 			let width = style.width || this._defaultWidth;
 			style.width = width;

 			let markerSize = marker.iconSize;

 			this._offsetX = markerSize.x;
 			this._offsetY = markerSize.y;

 			return new INFOBOX({
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
 		_setInfoBoxPosition(infobox, div) {

 			//get map popup options
 			let props = this._props.infobox;

 			let width = div.offsetWidth;
 			let height = div.offsetHeight;

 			let position = props.position || {};
 			let x = position.x || 'top';
 			let y = position.y || 'center';

 			this._positionX = this._getInfoBoxPositionX(x, width, this._offsetX);
 			this._positionY = this._getInfoBoxPositionY(y, height, this._offsetY);

 			infobox.setOptions({
 				pixelOffset: new google.maps.Size(this._positionX, this._positionY.offset),
 				alignBottom: this._positionY.align
 			});
 		}

 		_getInfoBoxPositionY(y, height, offset) {
 			switch (y) {
 				case "top":
 					return {
 						offset: -offset,
 						align: true
 					};
 				case "center":
 					return {
 						offset: -height/2 -offset/2,
 						align: false
 					}
 			}

 			return {
 				offset: 0,
 				align: false
 			};
 		}

 		_getInfoBoxPositionX(x, width, offset) {
 			switch (x) {
 				case "left":
 					return -width - offset/2;
 				case "right":
 					return offset/2;

 			}

 			return -width/2 - offset/2;
 		}

 		//*******************************************
 		//******************INFOBOX******************
 		//*******************************************

 	}

 	return Map;

 })();