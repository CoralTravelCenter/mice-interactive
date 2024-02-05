const map_init_props = {
    center: [40, 33],
    zoom: 4,
    controls: ['zoomControl'],
    type: null,
    worldFill: '#004374'
}

const map_options = {
    maxZoom: 5,
    minZoom: 4,
    suppressMapOpenBlock: true
}

const polygon_options = {
    fillColor: 'rgba(1, 53, 91, 1)',
    strokeColor: 'rgba(0, 67, 116, 1)',
    openHintOnHover: false,
    labelTextSize: {'3_6': 12, '7_18': 14},
    cursor: false,
    labelDotCursor: 'pointer',
    labelPermissibleInaccuracyOfVisibility: 4
}

const active_polygon_options = {
    fillColor: 'rgba(0, 90, 154, 1)',
    strokeColor: 'rgba(255, 255, 255, 1)',
    openHintOnHover: false,
    labelTextSize: {'3_6': 12, '7_18': 14},
    cursor: false,
    labelDotCursor: 'pointer',
    labelPermissibleInaccuracyOfVisibility: 4
}

const placemark_options = {
    iconLayout: 'default#imageWithContent',
    iconImageHref: 'site/coral.ru/assets/turkie.svg',
    iconImageSize: [40, 35],
    iconImageOffset: [-16, -43],
    iconContentOffset: [28, -2]
}

const miceMapInit = () => {
    const mice_map = new ymaps.Map('map', map_init_props, map_options);
    const objectManager = new ymaps.ObjectManager();

    const backplate = new ymaps.pane.StaticPane(mice_map, {
        css: {width: '100%', height: '100%', backgroundColor: map_init_props.worldFill},
        zIndex: 100
    });
    mice_map.panes.append("backdropPane", backplate);

    const loadRegions = res => {
        objectManager.add(res.features.map(feature => {
            feature.id = feature.properties.iso3166;
            feature.properties.regionName = feature.properties.iso3166;
            const target_country = _.find(SETTINGS, obj => obj.country_name === feature.properties.name);
            (target_country) ? feature.options = active_polygon_options : feature.options = polygon_options;
            return feature;
        }));
        mice_map.geoObjects.add(objectManager);
    };

    const generatePlaceMark = (country_name, log, lon) => {
        const place_mark_layout = ymaps.templateLayoutFactory.createClass(
            `<span class='city-placemark-label'>${country_name}</span>`
        );
        return new ymaps.Placemark([lon, log], {}, {...placemark_options, iconContentLayout: place_mark_layout});
    };

    ymaps.borders.load('001', {
        lang: 'ru',
        quality: 2
    }).then(res => loadRegions(res));

    SETTINGS.forEach(region => {
        const myGeocoder = ymaps.geocode(region.capital);
        myGeocoder.then(
            res => {
                const [log, lon] = res.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates;
                mice_map.geoObjects.add(generatePlaceMark(region.country_name, log, lon));
            },
            err => {
                console.log('Произошла ошибка' + err)
            }
        );
    });

//    const updatePolygons = type => {
//        const layouts = type === 'text' ? textLayouts : imgLayouts;
//        objectManager.objects.each((polygon) => {
//            objectManager.objects.setObjectOptions(polygon.id, {labelLayout: layouts.label})
//        });
//    }
//    updatePolygons();
}
ymaps.ready().then(() => miceMapInit());
