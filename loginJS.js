/*jslint plusplus: true*/
function signin() {
    'use strict';
    var get, sn, sp, get1, text, i;
    get = localStorage.getItem("login");
    get1 = JSON.parse(get);
    sn = document.getElementById("studentnumber").value;
    sp = document.getElementById("pass").value;
    localStorage.setItem("index", 0);
    
    if (sn === get1[0].student && sp === get1[0].password) {
        window.alert("Welcome, " + get1[0].fName + get1[0].lName);
        window.location = 'Newsfeed.html';
    }
}