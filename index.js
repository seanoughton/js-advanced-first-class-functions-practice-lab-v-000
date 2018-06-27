// Code your solution in this file!
var logDriverNames = function (drivers) {
  //Receives an array of driver objects and logs the name attribute of each driver to the console.
  const getNames = function (el,i,arr) {
    return el.name
  }
  return drivers.for_each(getNames);
}
