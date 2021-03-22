/**
 * instancier la carte openlayers
 */
const map = new ol.Map({
  // l'id de l'element html de la carte
  target: "map",
  // les couches de la carte
  layers: [
    // premiere couche : Nouvelle couche tuilée OSM
    new ol.layer.Tile({
      source: new ol.source.OSM(),
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
    // optional: mini carte
    // ,
    // new ol.control.OverviewMap({
    //   layers: [
    //       new ol.layer.Tile({
    //           source: new ol.source.OSM()
    //       })
    //   ],
    //   className: "ol-overviewmap"
    // })
  ])
});
