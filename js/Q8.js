const studentName = ["Micheal", "John", "Tony"];
const studentScore = [320, 230, 480];
let total = 500;
const percentage1 = (studentScore[0] / total) * 100;
const percentage2 = (studentScore[1] / total) * 100;
const percentage3 = (studentScore[2] / total) * 100;
document.write("Score of  " + studentName[0] + " is " + studentScore[0] + " . Percentage: " + percentage1 + "%");
document.write("<br> Score of  " + studentName[1] + " is " + studentScore[1] + " . Percentage: " + percentage2 + "%");
document.write("<br> Score of  " + studentName[2] + " is " + studentScore[2] + " . Percentage: " + percentage3 + "%");