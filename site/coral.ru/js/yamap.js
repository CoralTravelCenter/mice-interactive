import place_mark from 'data-url:/site/coral.ru/assets/turkie.svg';

const map_init_props = {
	center: [40, 33],
	zoom: 3,
	controls: ['zoomControl'],
	type: null,
	worldFill: '#004374'
}

const map_options = {
	maxZoom: 10,
	minZoom: 3,
	suppressMapOpenBlock: true
}

const polygon_options = {
	openHintOnHover: false,
	cursor: false,
	labelPermissibleInaccuracyOfVisibility: 4,
	fillColor: 'rgba(1, 53, 91, 1)',
	strokeColor: 'rgba(0, 67, 116, 1)'
}

const active_polygon_options = {
	openHintOnHover: false,
	cursor: false,
	labelPermissibleInaccuracyOfVisibility: 4,
	fillColor: 'rgba(0, 90, 154, 1)',
	strokeColor: 'rgba(255, 255, 255, 1)'
}

const placemark_options = {
	iconLayout: 'default#imageWithContent',
	iconImageHref: place_mark,
	iconImageSize: [25, 35],
	iconImageOffset: [0, -35],
	iconContentOffset: [20, -2]
}

const map_wrapper = document.querySelector('.map-wrapper');
const preloader = document.querySelector('.preloader-wrapper');
const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)')

function miceMapInit() {
	const mice_map = new ymaps.Map('map', map_init_props, map_options);
	const objectManager = new ymaps.ObjectManager();

	const renderMapBackground = () => {
		const backplate = new ymaps.pane.StaticPane(mice_map, {
			css: {width: '100%', height: '100%', backgroundColor: map_init_props.worldFill},
			zIndex: 100
		});
		mice_map.panes.append("backdropPane", backplate);
	}
	renderMapBackground();

	const loadRegions = res => {
		objectManager.add(res.features.map(feature => {
			const target_country = _.find(SETTINGS, obj => obj.country_name === feature.properties.name);
			(target_country) ? feature.options = active_polygon_options : feature.options = polygon_options;
			console.log(feature)
			return feature;
		}));
		mice_map.geoObjects.add(objectManager);
	};

	const generatePlaceMark = (country_name, log, lon) => {
		const place_mark_layout = ymaps.templateLayoutFactory.createClass(
			`<span class='city-placemark-label'>${country_name}</span>`
		);
		return new ymaps.Placemark([lon, log], {mark_id: country_name}, {
			...placemark_options,
			iconContentLayout: place_mark_layout
		});
	};

	const renderMapBorders = () => {
		ymaps.borders.load('001', {
			lang: 'ru',
			quality: 3
		}).then(res => {
			loadRegions(res);
			setTimeout(() => {
				map_wrapper.append(new ExcursionInfo(SETTINGS[0]));

				function mediaChecker(isMobile) {
					const block = document.querySelector('excursion-info');
					const mobile_place = document.querySelector('section.map .contenu');
					if (isMobile) {
						mobile_place.append(block);
					} else {
						map_wrapper.append(block);
					}
				}

				mediaChecker(mobileWidthMediaQuery.matches);
				mobileWidthMediaQuery.addEventListener('change', e => mediaChecker(e.matches));
				preloader.remove();
			}, 500);
		});
	}
	renderMapBorders();

	const renderPlacemerksOnMap = () => {
		SETTINGS.forEach((region, idx) => {
			const capitals = ymaps.geocode(region.capital_cords);
			myGeocoder.then(
				res => {
					console.log(res)
					const [lat, long] = res.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates;
					const country_marks_collection = new ymaps.GeoObjectCollection();
					country_marks_collection.add(generatePlaceMark(region.country_name, idx, log, lon));
					mice_map.geoObjects.add(country_marks_collection);
				},
				err => {
					console.log('Произошла ошибка' + err)
				}
			);
		});
	}
	renderPlacemerksOnMap();

	const onPinClickRenderInformation = e => {
		let place_mark = e.get('target').properties.get('mark_id');
		if (place_mark) {
			const info_container = document.querySelector('excursion-info');
			const target_info = _.find(SETTINGS, obj => obj.country_name === place_mark);
			info_container.replaceWith(new ExcursionInfo(target_info));
		}
	}
	mice_map.geoObjects.events.add('click', onPinClickRenderInformation);

	const updatePolygons = type => {
		const layouts = type === 'text' ? textLayouts : imgLayouts;
		objectManager.objects.each((polygon) => {
			objectManager.objects.setObjectOptions(polygon.id, {labelLayout: layouts.label})
		});
	}
	updatePolygons();
}

ymaps.ready().then(() => miceMapInit());