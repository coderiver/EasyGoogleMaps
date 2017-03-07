
[![Dependency Status][depstat-image]][depstat-url]

> <img align="right" width="120" 
     title="EasyGoogleMaps Logo"
     src="https://rawgit.com/coderiver/easygooglemaps/master/logo.svg">Simple layer over Google Maps API to create expandable baloons(infoboxes) on the map. [See example](https://coderiver.github.io/EasyGoogleMaps/example/index.html). We are tired of google maps syntax, infobox and whatever. Simple and straightforward syntax to do common job like this:
> 
> ![Module usage example](https://github.com/coderiver/easygooglemaps/raw/master/example/screenshot.png "Module usage example")

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
### Old school files way ([example.html](https://coderiver.github.io/EasyGoogleMaps/example/index.html)):
```html
<script type="text/javascript" src="easygooglemaps.js"></script>
<script type="text/javascript" src="RUN_MODULE_HERE.js"></script>
```
## Running
```js
var MyMap = new EasyGoogleMaps(_options_);
// options reference in next section

MyMap.init();
```


#### Parameters (_options_)
```js
{
	// map options
	map: {
		APIKEY: 'YOUR_GOOGLEMAPS_API_KEY',
		container: '.js-map', // DOM element, where to put map
		options: {
			center: {lat: -34.097, lng: 150.644},
			zoom: 8
		}
	},

	// baloon specific options
	infobox: {
		class: 'awesome-infobox',
		template: '#infobox', // html template for baloon
		onlyOneBox: true, // single baloon visible
		// baloon relative to marker position
		position: {
			y: "center",
			x: "left"
		},
		closeButton: '.js-infobox-close'
	},
	
	// Array of data (markers,baloons,infoboxes,whatever) to put on the map
	markers: {
		items: [
			{
				"content": {
					// this is {{=baloon.title}} in html template
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
						// for retina icon should be 40x60
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
And also HTML template (doT) for infobox should be specified:
```html
<script type="text/underscorejs" id="infobox">
	<div class="baloon"> <button class="baloon__close js-infobox-close"></button>
		<div className="baloon__content">
			{{=baloon.title}}
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