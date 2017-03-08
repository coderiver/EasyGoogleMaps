// =======================================
// ====BASIC SETTINGS=====================
// =======================================
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
			x: "left",
			y: "center"
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
					"id": 0,
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
					"id": 1,
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
// =======================================
// ========INITIATING MAP=================
// =======================================
map.init();

// =======================================
// ========ADDING ARRAY OF POINTS=========
// =======================================
map.add([
	{
		"content": {
			"title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur."
		},
		"marker": {
			"id": 2,
			"position": {
				"lat": -34.397,
				"lng": 151.044
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
			"id": 3,
			"position": {
				"lat": -34.397,
				"lng": 151.444
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
]);

// =======================================
// ========ADDING ONE POINT===============
// =======================================
map.add({
	"content": {
		"title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur."
	},
	"marker": {
		"id": 4,
		"position": {
			"lat": -34.397,
			"lng": 151.844
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
});

let addOneMarker = document.querySelector('.js-add-one');
let addSeveralMarker = document.querySelector('.js-add-several');

let showMarker = document.querySelector('.js-show');
let hideMarker = document.querySelector('.js-hide');

addOneMarker.addEventListener('click', () => {
	// =======================================
	// ====ADDING ONE POINT WITH CLICK========
	// =======================================
	map.add({
		"content": {
			"title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur."
		},
		"marker": {
			"id": 5,
			"position": {
				"lat": -34.397,
				"lng": 152.244
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
	});
}, false);

addSeveralMarker.addEventListener('click', function() {
	// =======================================
	// ====ADDING MANY POINTS WITH CLICK======
	// =======================================
	map.add([
		{
			"content": {
				"title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, consequatur."
			},
			"marker": {
				"id": 6,
				"position": {
					"lat": -34.397,
					"lng": 152.644
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
				"id": 7,
				"position": {
					"lat": -34.397,
					"lng": 153.044
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
	]);
}, false);


// =======================================
// ====SHOW HIDE MARKER===================
// =======================================
showMarker.addEventListener('click', function() {
	map.show(2);
}, false);

hideMarker.addEventListener('click', function() {
	map.hide(2);
}, false);


// =======================================
// ====ONLOAD EVENT=======================
// =======================================

// map.onload(() => {
// 	alert('loaded');
// });
// alert('not loaded');
