
[![Dependency Status][depstat-image]][depstat-url]

> Description

## Installation

```
$ npm install --save easygooglemaps
```

## Usage
### Webpack
```js
var EasyGoogleMaps = require('easygooglemaps');
// run module here
```
### Files (example.html):
```html
<script type="text/javascript" src="easygooglemaps.js"></script>
<script type="text/javascript" src=“RUN_MODULE_HERE.js"></script>
```
## Running (babel)
```js
let MyMap = new EasyGoogleMaps(_options_);
// options reference in next section

MyMap.init();
```


#### Parameters (_options_)
```js
{
	// map options
	APIKEY: 'YOUR_GOOGLEMAPS_API_KEY',
	options: {
		center: {lat: -34.097, lng: 150.644},
		zoom: 8
	},
	infobox: {
		class: 'awesome-infobox',
		// inline styles for each infobox,
		style: {
			width: '300px'
		},
		// each infobox position
		position: {
			y: "center",
			x: "left"
		},
		closeButton: '.js-infobox-close'
	},
	onlyOneBox: true, // single baloon visible
	template: '#infobox', // html template for baloon
	container: '.js-map', // DOM element, where to put map
    // List of markers to put on the map
	markers: {
    // possible URL for json data of items
		// url: 'data-file',
		items: [
			{
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
							"x": 20,
							"y": 30
						},
						"centering": {
							"x": 10,
							"y": 30
						}
					}
				}
			}
		]
	}
}
```
And also HTML template (underscore) for infobox should be specified:
```html
<script type="text/underscorejs" id="infobox">
	<div class="map-content"> <button class="btn-close js-infobox-close"></button>
		<div className="map-content__info">
		<%= title %>
		</div>
	</div>
</script>
```


## Development
- `npm run build` - Build task that generates both minified and non-minified scripts;


## License
MIT © [Coderiver](http://riverco.de)
## Authors:
Valentin ‘Whats0n’ Dorosh
## Contributors:
Yuri [akella](http://cssing.org.ua) Artiukh

[depstat-url]: https://david-dm.org/coderiver/easygooglemaps
[depstat-image]: https://david-dm.org/coderiver/easygooglemaps.svg		 