// Code your solution in this file!
const logDriverNames = function (drivers) {
  const getNames = function (el,i,arr) {
    console.log(el.name);
  };
  return drivers.forEach(getNames);
}
