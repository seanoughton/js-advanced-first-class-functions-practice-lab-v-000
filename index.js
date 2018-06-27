// Code your solution in this file!
const logDriverNames = function (drivers) {
  //Receives an array of driver objects and logs the name attribute of each driver to the console.
  const getNames = function (el,i,arr) {
    console.log(el.name);
  };
  return drivers.forEach(getNames);
}
