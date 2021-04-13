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
  // la vue initiale de la carte: centre de l'Europe en WGS84
  view: new ol.View({
    center: ol.proj.fromLonLat([9.89, 46.66]),
    zoom: 4
  }),
  // Tableau des contrôles de la carte
  controls: ol.control.defaults().extend([
    // Plein-écran
    new ol.control.FullScreen(),
    // Echelle
    new ol.control.ScaleLine(),
    // position du curseur
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(2),
      // projection: "EPSG:4326",
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
  constructor(name, country, lat, lon, population) {
    // les paramétres de la classe
    this.name = name;
    this.country = country;
    this.lat = lat;
    this.lon = lon;
    this.population = population;
  }

  // les méthodes de la classe
  getDetails() {
    return (
      this.name +
      ", " +
      this.country +
      ". Population: " +
      this.population +
      " habitants."
    );
  }
  getPosition() {
    return {
      lat: this.lat,
      lon: this.lon
    };
  }
}

// Créer (instancier) les objets
var paris = new City("Paris", "France", 48.86, 2.34, 2175601);
var madrid = new City("Madrid", "Espagne", 40.42, -3.7, 3334730);
var rome = new City("Rome", "Italie", 41.9, 12.5, 2844395);
var berlin = new City("Berlin", "Allemagne", 52.51, 13.39, 3748148);

// Créer une liste de villes
var cities = [paris, madrid, rome, berlin];

// ==========================================================================

/**
 * Transformer la liste des villes à une liste de features ==================
 */

//Créer le style des points
var iconStyle = new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 1],
    src: "img/pin.png"
  })
});

// Transformer la liste
var cityFeatures = [];
for (var city of cities) {
  var lon = city.lon;
  var lat = city.lat;
  var coords = [lon, lat];
  var projectedCoords = ol.proj.fromLonLat(coords);
  // Objet de type ol.Feature instancié avec une géométrie, un nom...
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
 * Créer la Nouvelle couche vecteur ==================================================
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

// ==========================================================================

/**
 * Ajouter l'évenement au checkbox ==========================================
 */
var citiesCheckBox = document.getElementById("europe-cities");
citiesCheckBox.addEventListener("click", function (event) {
  citiesLayer.setVisible(event.target.checked);
});
// ==========================================================================

/**
 * Créer la popup ===========================================================
 */
var popup = new ol.Overlay({
  // l'element HTML de la popup
  element: document.getElementById("map-popup"),
  positioning: "bottom-center",
  offset: [0, -45]
});
map.addOverlay(popup);

// la Fonction pour fermer la popup (voir index.html)
function closePopup() {
  popup.setPosition(undefined);
}

// ajouter l'evenement clic à la carte
map.on("click", function (event) {
  // Fermer la popup
  closePopup();
  // Chercher la feature
  map.forEachFeatureAtPixel(event.pixel, (feature, layer) => {
    // Si la feature existe
    if (feature) {
      if (layer) {
        var layerId = layer.get("id");
        if (layerId === "cities") {
          // récupérer les coordonnées (position)
          var coordinates = feature.getGeometry().getCoordinates();
          // modifier la position de la popup
          popup.setPosition(coordinates);
          // modifier le contenu de la popup
          document.getElementById("map-popup-content").innerHTML =
            "<p> ville : " + feature.get("name") + "</p>";
        }
      }
    }
  });
});

// ==========================================================================

/**
 * Créer une couche à partir d'objet geoJson ================================
 */

// Créer une liste de "features" à partir de l'objet Geojson
// appGeojsonData => voir geojson.js
var geoJsonFeatures = new ol.format.GeoJSON().readFeatures(appGeojsonData, {
  featureProjection: "EPSG:3857"
});

// Créer une source de données de type vecteur
var geoJsonSource = new ol.source.Vector({
  // la liste des features
  features: geoJsonFeatures
});

// le style des "features"
// exemple de style pour des polygones et multi-polygones
var multiPolygonStyle = new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: "#cccccc",
    width: 1
  }),
  fill: new ol.style.Fill({
    color: [28, 161, 232, 0.7]
  })
});

// Exemple de style dynamique (fonction de style)
// Doit retouner un objet de type ol.style.Style
var styleFunction = function (feature) {
  // on récupére la propriété 'ID'
  var featureId = feature.get("ID");

  // Correspondance ID -> couleur
  var colors = {
    FR: [56, 107, 201, 0.7],
    DE: [195, 235, 21, 0.7],
    IT: [56, 186, 56, 0.7],
    ES: [173, 44, 42, 0.7]
  };

  // la couleur qui correspond à l'ID
  var featureColor = colors[featureId];

  // Vérifier si featureColor n'existe pas. càd, différente de: undefined, null, 0 et "" (Une chaîne de caractères vide)
  // Si la couleur n'existe pas => utiliser une couleur par défaut
  if (!featureColor) {
    featureColor = "gray";
  }

  // on peux remplacer les 4 dernieres lignes de """CODE""" par la ligne suivante
  // var featureColor = colors[featureId] || 'gray';

  // retourner un objet de type Style
  return new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "black",
      width: 1
    }),
    fill: new ol.style.Fill({
      color: featureColor
    })
  });
};

// Créer la couche de type vecteur
var geoJsonLayer = new ol.layer.Vector({
  id: "countries",
  source: geoJsonSource,
  // on peut utiliser soit multiPolygonStyle (pour un style simple) ou bien styleFunction (pour un style dynamique)
  style: styleFunction
});
// ==========================================================================

/**
 * Créer une couche à partir d'un Service de carte tuilé ArcGIS Server ======
 */
var arcgisSource = new ol.source.TileArcGISRest({
  url: "https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
});

var arcgisLayer = new ol.layer.Tile({
  source: arcgisSource,
  // optional (europe)
  extent: [-1500000, 4056000, 2100000, 7500000]
});
// ==========================================================================

/**
 * Créer une couche à partir d'un service de carte tuilé wmts ===============
 */

// Préprer la configuration tilegrid (la grille des tuiles)
var resolutions = [];
var matrixIds = [];
var proj3857 = ol.proj.get("EPSG:3857");
var maxResolution = ol.extent.getWidth(proj3857.getExtent()) / 256;
for (var z = 0; z < 18; z++) {
  matrixIds[z] = z.toString();
  resolutions[z] = maxResolution / Math.pow(2, z);
}
// Creér la tilegrid 
var tileGrid = new ol.tilegrid.WMTS({
  origin: ol.extent.getTopLeft(proj3857.getExtent()),
  resolutions: resolutions,
  matrixIds: matrixIds
});

// Créer la source des données
var wmtsSource = new ol.source.WMTS({
  url:
    "https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/",
  layer: "0",
  matrixSet: "EPSG:3857",
  format: "image/png",
  projection: proj3857,
  tileGrid: tileGrid,
  style: "default"
});
// Créer la couche de type raster
var rasterLayer = new ol.layer.Tile({ source: wmtsSource });
// ==========================================================================

/**
 * Ajouter les couches dans l'ordre =========================================
 */
map.addLayer(arcgisLayer);
map.addLayer(geoJsonLayer);
map.addLayer(citiesLayer);

// Pour voir cette dernière couche, il faut décommenter la ligne et centrer la carte sur les USA
// map.addLayer(rasterLayer);
// ==========================================================================
