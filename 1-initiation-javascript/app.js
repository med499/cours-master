/**
 * déclarer la classe City
 */
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

/**
 * créer (instancier) les objets
 */

// la ville de paris
var paris = new City('Paris', 'France',	48.86,	2.34,	2175601);

console.log(paris.getDetails()); // -> Paris, France. Population: 2175601 habitants.
console.log(paris.getPosition()); // -> {lat: 48.85, lon: 2.27}

// les autres villes
var madrid = new City('Madrid', 'Espagne',	40.42,	-3.70,	3334730);
var rome = new City('Rome', 'Italie',	41.90,	12.50,	2844395);
var berlin = new City('Berlin', 'Allemagne',	52.51,	13.39,	3748148);

/**
 * créer une liste de villes
 */
var cities = [];
cities.push(paris);
cities.push(madrid);
cities.push(rome);
cities.push(berlin);

console.log(cities); // -> (4) [City, City, City, City]

