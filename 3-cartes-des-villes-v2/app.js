/**
 * instancier la carte openlayers ================================================
 */

const map = new ol.Map({
  // l'id de l'element html de la carte
  target: "map",
  // les couches de la carte
  layers: [
    // premiere couche : Nouvelle couche tuilée OSM
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  // la vue initiale de la carte: centre de l'Europe en WGS84
  view: new ol.View({
    center: ol.proj.fromLonLat([9.89, 46.66]),
    zoom: 4
  }),
  // Tableau des contrôles de la carte
  controls: ol.control.defaults().extend([
    // Plein-écran
    new ol.control.FullScreen(),
    // Echelle
    new ol.control.ScaleLine(),
    // position du curseur
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(2),
      projection: "EPSG:4326",
      className: "",
      target: document.getElementById("mouse-position")
    })
  ])
});
// ==========================================================================




/**
 * Créer la liste des villes ================================================
 */

// Déclarer la classe City
class City {
  // le constructeur de la classe
  constructor (name, country, lat, lon, population) {
    // les paramétres de la classe
    this.name = name;
    this.country = country;
    this.lat = lat;
    this.lon = lon;
    this.population = population;
  }

  // les méthodes de la classe
  getDetails () {
    return this.name + ', ' + this.country + '. Population: ' + this.population + ' habitants.';
  }
  getPosition () {
    return {
      lat: this.lat,
      lon: this.lon
    }
  }
}

// Créer (instancier) les objets 
var paris = new City('Paris', 'France',	48.86,	2.34,	2175601);
var madrid = new City('Madrid', 'Espagne',	40.42,	-3.70,	3334730);
var rome = new City('Rome', 'Italie',	41.90,	12.50,	2844395);
var berlin = new City('Berlin', 'Allemagne',	52.51,	13.39,	3748148);

// Créer une liste de villes
var cities = [paris, madrid, rome, berlin];

// ==========================================================================




/**
 * Transformer la liste des villes à une liste de features ==================
 */

//Créer le style des points
var iconStyle = new ol.style.Style({
  image: new ol.style.Icon(({
    anchor: [0.5, 1],
    src: "img/pin.png"
  }))
});

// Transformer la liste
var cityFeatures = [];
for (var city of cities) {
  var lon = city.lon;
  var lat = city.lat;
  var coords = [lon, lat];
  var projectedCoords = ol.proj.fromLonLat(coords);
  // Objet de type ol.Feature instancié avec une géométrie, un nom...
  var feature = new ol.Feature({
    geometry: new ol.geom.Point(projectedCoords),
    name: city.name,
    details: city.getDetails()
  });
  // ajouter le style
  feature.setStyle(iconStyle);
  // ajouter à la liste des features
  cityFeatures.push(feature);
}

// ==========================================================================




/**
 * Créer la Nouvelle couche vecteur ==================================================
 */

// la source des données de type vecteur
var citiesLayerSource = new ol.source.Vector({
  // la liste des features
  features: cityFeatures,
  name: "cities-source"
});

// la couche de type vecteur (à partir de la source des données)
var citiesLayer = new ol.layer.Vector({
  // la source des données de type vecteur
  source: citiesLayerSource,
  id: "cities"
});

// couche invisible au démarrage
citiesLayer.setVisible(false);

// ajouter la couche à la carte
map.addLayer(citiesLayer);

// ==========================================================================




/**
 * Ajouter l'évenement au checkbox ==========================================
 */
var citiesCheckBox = document.getElementById('europe-cities');
citiesCheckBox.addEventListener('click', function(event) {
  citiesLayer.setVisible(event.target.checked);
});
// ==========================================================================




/**
 * Créer la popup ===========================================================
 */
var popup = new ol.Overlay({
  // l'element HTML de la popup
  element: document.getElementById('map-popup'),
  positioning: 'bottom-center',
  offset: [0,-45]
});
map.addOverlay(popup);

// la Fonction pour fermer la popup (voir index.html)
function closePopup() {
  popup.setPosition(undefined);
}

// ajouter l'evenement clic à la carte
map.on('click', function (event) {
  // Fermer la popup
  closePopup();
  // Chercher la feature
  map.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
    // Si la feature existe
    if (feature) {
      if (layer) {
        var layerId = layer.get('id');
        if (layerId === 'cities') {
          // récupérer les coordonnées (position)
          var coordinates = feature.getGeometry().getCoordinates();
          // modifier la position de la popup
          popup.setPosition(coordinates);
          // modifier le contenu de la popup
          document.getElementById('map-popup-content').innerHTML =  "<p> ville : " + feature.get('name') + "</p>";
        }
      }
    }
  });     
});
// ==========================================================================
