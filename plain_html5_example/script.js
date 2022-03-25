const mapNumberToObject = (number) => ({
    id: number, 
    name: `object ${number}`,
    printNumber: () => console.log(number)
});
const objects = [1,2,3,4,5,6].map(mapNumberToObject);
const moreObjects = [
    ...objects, 
    ...[7, 8, 9].map(mapNumberToObject)
];
moreObjects.forEach(object => object.printNumber());
