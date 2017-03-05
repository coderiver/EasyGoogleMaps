
let map = new EasyGoogleMaps({
	map: {
		APIKEY: 'AIzaSyDMWIxCN9ijYRfiH7bmQN-LNRDtoboLZqY',
		container: '.js-map',
		options: {
			center: {lat: -34.097, lng: 150.644},
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
							"x": 41,
							"y": 58
						},
						"centering": {
							"x": 20,
							"y": 58
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
			}
		]
	}
});

map.init();