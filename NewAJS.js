/*global $, jQuery,alert*/
var index = 0;
var logininfo = [];
function getid() {
    'use strict';
    var pass1, pass2;
    pass1 = document.getElementById("pass1").value;
    pass2 = document.getElementById("pass2").value;
    if (pass1 !== pass2) {
        window.alert("Passwords Do not match");
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
            
    } else {
        logininfo[index] = {
            fName : document.getElementById("firstName").value,
            lName : document.getElementById("lastName").value,
            student : document.getElementById("studentn").value,
            password : document.getElementById("pass1").value
        };
        localStorage.setItem("login", JSON.stringify(logininfo));
        window.alert("You are register! Go ahead and login!");
        window.locaiton = 'login.html';

    }
}



