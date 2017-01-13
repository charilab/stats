const BASE_URL="/data";

var cycleroute = L.geoJsonDynamic({
        jsonUrl: BASE_URL+"/bicycleroute.json",
        reload: false,
        limit: null,
        pointToLayer: function(point, latlng) {
            return;
        },
        style: function(feature) {
            return {color: '#ff00ff', weight: 7, opacity: 0.5};
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }
    });

var bicycle = L.geoJsonDynamic({
        jsonUrl: BASE_URL+"/bicycle.json",
        reload: false,
        limit: null,
        pointToLayer: function(point, latlng) {
            return;
        },
        style: function(feature) {
            return {color: '#00cc88', opacity: 0.7};
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }
    });

var cycleway = L.geoJsonDynamic({
        jsonUrl: BASE_URL+"/cycleway.json",
        reload: false,
        limit: null,
        pointToLayer: function(point, latlng) {
            return;
        },
        style: function(feature) {
            return {color: '#00ff00', opacity: 0.7};
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }
    });

var cyclelane = L.geoJsonDynamic({
        jsonUrl: BASE_URL+"/cyclelane.json",
        reload: false,
        limit: null,
        pointToLayer: function(point, latlng) {
            return;
        },
        style: function(feature) {
            return {color: '#00ccff', opacity: 0.7};
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }
    });

var nobicycle = L.geoJsonDynamic({
        jsonUrl: BASE_URL+"/nobicycle.json",
        reload: false,
        limit: null,
        pointToLayer: function(point, latlng) {
            return;
        },
        style: function(feature) {
            return {color: '#ff0000', opacity: 0.7};
        },
        onEachFeature: function (feature, layer) {
            if (feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }
    });

/* set base and overlay layers */
var baseLayers = {
    "Mapbox(dark)": mapbox_dark,
    "Mapbox(light)": mapbox_light,
    "OpenStreetMap": osm,
    "OpenCycleMap": ocm,
    "Mapbox(mine)": mapbox_mine
};

var overlays = {
    "自転車ルート(紫)": cycleroute,
    "自転車道(緑)": cycleway,
    "自転車走行可(エメラルドグリーン)": bicycle,
    "自転車レーン(青)": cyclelane,
    "自転車禁止(赤)": nobicycle
};

/* Main routine */
var map = L.map('map', {
    fullscreenControl: true
}).setView([35.126847, 138.909589], 11);

mapbox_dark.addTo(map);

L.control.layers(baseLayers, overlays, {
    position: 'topleft'
}).addTo(map);

// add scalebar
L.control.scale({
    position: 'topright',
    metric: true,
    imperial: false
}).addTo(map);

cycleroute.addTo(map);
cyclelane.addTo(map);
