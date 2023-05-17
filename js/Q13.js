let fifo_array = [];
fifo_array.push("keyboard");
fifo_array.push("mouse");
fifo_array.push("printer");
fifo_array.push("monitor");

const value1 = fifo_array.shift();
const value2 = fifo_array.shift();
const value3 = fifo_array.shift();
const value4 = fifo_array.shift();

document.write("<h3>Devices:</h3>");
document.write( value1);
document.write("<br>" + value2);
document.write("<br>" +value3);
document.write("<br>" + value4);





