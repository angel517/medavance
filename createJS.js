/*global $, jQuery,alert*/
/*jslint plusplus: true*/
var index = localStorage.getItem("index");//state index
var amnt = [];
function myFunction() {
    'use strict';

    amnt[index] = {
        title : document.getElementById("ATitle").value,// title of announcemnt
        description : document.getElementById("Adescription").value,//descripton of announcemnt
        sex : document.getElementById("GenderSelect").value,// gender 
        when : document.getElementById("Awhen").value,//when is the meting
        where : document.getElementById("Awhere").value,// where meeting is
        who : document.getElementById("GradeSelect").value,//get who does the meeting for
        cat : document.getElementById("category").value,
        post : Date()
    };
    
    window.alert("Your Announcement has been Posted");//notify the announcement has been added to local storage
    
    index++;
    localStorage.setItem("AT", JSON.stringify(amnt));//string object
    
    localStorage.setItem("index", index);
    document.getElementById("ATitle").value = '';
    document.getElementById("Adescription").value = '';
    document.getElementById("Awhen").value = '';
    document.getElementById("Awhere").value = '';

}