
const qualificationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h3>Qualifications</h3>");
document.write("<ol>");

for (let i = 0; i < qualificationInPakistan.length; i++) {
  document.write("<li>" + qualificationInPakistan[i] + "</li>");
}

document.write("</ol>");
