/*jslint plusplus: true*/
var i, text, get1, get, count;
count = localStorage.getItem("index");

function getCreate() {
    'use strict';
    var gender1, gender2, grade1, grade2, cat1, cat2;
    gender1 = document.getElementById("mySelect").selectedIndex;//gender
    gender2 = document.getElementById("mySelect").options;//gender
    grade1 = document.getElementById("GradeSelect").selectedIndex;//grade
    grade2 = document.getElementById("GradeSelect").options;//grade
    cat1 = document.getElementById("category").selectedIndex;
    cat2 = document.getElementById("category").options;
    
    get = localStorage.getItem("AT");
    get1 = JSON.parse(get);
    
    text = "";
    for (i = 0; i < count; i++) {
        if (gender2[gender1].text === get1[i].sex || get1[i].sex === "BOTH" && grade2[grade1].text === get1[i].who || get1[i].who === "ALL" && cat2[cat1].text === get1[i].cat) {
            text += "<td>" + get1[i].title;
            text += "<td>" + get1[i].description;
            text += "<td>" + get1[i].sex;
            text += "<td>" + get1[i].when;
            text += "<td>" + get1[i].where;
            text += "<td>" + get1[i].who;
            text += "<td>" + get1[i].cat;
            text += "<td>" + get1[i].post + "<tr>";
        }
    }
    document.getElementById("demo").innerHTML = text;

}
function reset() {
    'use strict';
    get = localStorage.getItem("AT");
    get1 = JSON.parse(get);
   
    text = "";
    for (i = 0; i < count; i++) {
        text += "<td>" + get1[i].title;
        text += "<td>" + get1[i].description;
        text += "<td>" + get1[i].sex;
        text += "<td>" + get1[i].when;
        text += "<td>" + get1[i].where;
        text += "<td>" + get1[i].who;
        text += "<td>" + get1[i].cat;
        text += "<td>" + get1[i].post + "<tr>";
    }
    document.getElementById("demo").innerHTML = text;
    
}
