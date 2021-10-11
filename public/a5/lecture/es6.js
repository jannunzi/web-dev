let someObject = {
  anObjectProperty: {
    anotherObjectProp: {q: 111, w: 222},
    anotherArrayProp: [321, 432, 543]
  },
  aNumberArrayProp: [1, 2, 3],
  anObjectArrayProp: [
    {a: 123, b: 234},   {a: 321, b: 432}]}

console.log(someObject.anObjectProperty
  .anotherArrayProp[2]) // ==> 543
