let map = new EasyGoogleMaps({
	infobox: {
		class: 'awesome-infobox',
		style: {
			width: '300px'
		},
		position: {
			y: "center",
			x: "left"
		},
		closeButton: '.js-infobox-close'
	},
	onlyOneBox: true,
	template: '#infobox',
	container: '.js-map',
	options: {
		center: {lat: -34.097, lng: 150.644},
		zoom: 8
	},
	markers: {
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
			},
			{
				"content": {
					"title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur."
				},
				"marker": {
					"position": {
						"lat": -34.597,
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
});

map.init();