mapboxgl.accessToken =
	'pk.eyJ1IjoiYXNoYWQwOTgiLCJhIjoiY2s0dXplaTloMGhybTNlbjF3MHp3c241ciJ9.6VVGIyZMSfhU8U7UAeUVUw';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	zoom: 30,
	center: [-71, 42]
});

map.on('load', function() {
	map.addLayer({
		id: 'points',
		type: 'symbol',
		source: {
			type: 'geojson',
			data: {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: [-71, 42]
						},
						properties: {
							storeId: '0001',
							icon: 'shop'
						}
					}
				]
			}
		},
		layout: {
			'icon-image': '{icon}-15',
			'icon-size': 0.25,
			'text-field': '{storeId}',
			'text-anchor': 'top'
		}
	});
});
