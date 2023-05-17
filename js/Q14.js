let lifo_array = [];
lifo_array.push("keyboard");
lifo_array.push("mouse");
lifo_array.push("printer");
lifo_array.push("monitor");

const value1 = lifo_array.pop();
const value2 = lifo_array.pop();
const value3 = lifo_array.pop();
const value4 = lifo_array.pop();

document.write("<h3>Devices:</h3>");
document.write( value1);
document.write("<br>" + value2);
document.write("<br>" + value3);
document.write("<br>" + value4);