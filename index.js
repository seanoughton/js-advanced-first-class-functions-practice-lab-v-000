// Code your solution in this file!

//Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriverNames = function (drivers) {
  const getNames = function (el,i,arr) {
    console.log(el.name);
  };
  return drivers.forEach(getNames);
}

//logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.

const logDriversByHometown = function (drivers,location) {
  const getNamesForLocation = function (el,i,arr) {
    if (el.hometown === location) {
      console.log(el.name) ;
    }
  };
  return drivers.forEach(getNamesForLocation);
}

//driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.

const driversByRevenue = function (drivers) {

  const revenuSorter = function (driver1,driver2) {
    return driver1.revenue - driver2.revenue;
  };
  return drivers.sort(revenuSorter);
}
