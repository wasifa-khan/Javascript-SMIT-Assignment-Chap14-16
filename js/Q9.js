//Part a

// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// let color_to_add = prompt("Enter the Color Name which you want ");
// color.unshift(color_to_add);
// document.write("<br><br>Updated Array is : " + color);

// Part b
// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// let color_to_add = prompt("Enter the Color Name which you want ");
// color.push(color_to_add);
// document.write("<br><br>Updated Array is : " + color);

//Part c
// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// let color_to_add1 = prompt("Enter the Color Name which you want ");
// let color_to_add2 = prompt("Enter the Color Name which you want ");
// color.unshift(color_to_add1, color_to_add2);
// document.write("<br><br>Updated Array is : " + color);

//Part d
// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// color.shift(color);
// document.write("<br><br>Updated Array is : " + color);

//Part e
// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// color.pop(color);
// document.write("<br><br>Updated Array is : " + color);

//part f
// let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
// document.write("Original Array is: " + color);
// let index_to_add = +prompt("At which index color will be Add");
// let color_to_add = prompt("Enter the Color Name which you want ");
// color.splice(index_to_add, 0, color_to_add);
// document.write("<br><br>Updated Array is : " + color);

//part g
let color = ["Yellow", "Green", "Orange", "Purple", "Red", "Black", "Gray"];
document.write("Original Array is: " + color);
let index_to_delete = +prompt("At which index color will be Deleted");
let colorNo_to_delete = +prompt("Enter the Color Name that you want to delete ");
color.splice(index_to_delete,colorNo_to_delete);
document.write("<br><br>Updated Array is : " + color);





