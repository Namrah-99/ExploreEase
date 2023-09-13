/* eslint-disable */

export const displayMap = (locations) => {
  // Map initialization
  var map = L.map('map', {
    scrollWheelZoom: false,
  }).setView([33.72148, 73.04329], 10);

  // osm layer
  var osm = L.tileLayer(
    'https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=ryzHUCr187ZjbijLMPbJ',
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    },
  ).addTo(map);

  // water color
  var watercolor = L.tileLayer(
    'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}',
    {
      minZoom: 1,
      maxZoom: 16,
      attribution:
        '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      ext: 'jpg',
    },
  );
  // watercolor.addTo(map);

  // google streets
  var googleStreets = L.tileLayer(
    'http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    },
  );
  // googleStreets.addTo(map)

  // Add marker to the leaflet
  // var singleMarker = L.marker([33.72148, 73.04329]).addTo(map);
  // var popup = singleMarker.bindPopup('Islamabad, Pakistan').openPopup()
  // popup.addTo(map)

  // *************** Layer controller
  // its useful when we want to switch these base maps as well as we want to toggle on and off added marker
  var baseMaps = {
    OpenStreetMap: osm,
    'Water color map': watercolor,
    'Google Street': googleStreets,
  };

  // *************** GEOJSON
  // L.geoJSON(lineJson).addTo(map)
  // L.geoJSON(pointJson).addTo(map)
  // L.geoJSON(polygonJson,{
  //     onEachFeature: function(feature,layer){
  //         layer.bindPopup(`<br>Name: </br>`+feature.properties.name)
  //     }
  // }).addTo(map)

  // ----------------- Extend map bounds to include current location
  // Initialize an array to store marker objects
  var markersArray = [];

  // Iterate through your locations data
  locations.forEach(function (location) {
    var latlng = L.latLng(location.coordinates[1], location.coordinates[0]);

    // Create a marker for each location and bind a popup
    var marker = L.marker(latlng).addTo(map);
    marker
      .bindPopup(`Day ${location.day}: ${location.description}`)
      .openPopup();

    // Add the marker to the markersArray
    markersArray.push(marker);
  });

  // Create a feature group from the markers and add it to the map
  var featureGroup = L.featureGroup(markersArray).addTo(map);

  // Fit the map to the bounds of the feature group with padding
  map.fitBounds(featureGroup.getBounds(), { padding: [80, 40] });

  // Simplify the overlayMaps object to just show the markers
  var overlayMaps = {
    Markers: featureGroup,
  };

  var layerControl = L.control
    .layers(baseMaps, overlayMaps, { collapse: false })
    .addTo(map);
  map.setZoom(6);
};
