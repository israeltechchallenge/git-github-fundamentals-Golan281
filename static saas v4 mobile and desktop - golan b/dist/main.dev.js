"use strict";

var log = console.log;
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
btn1.addEventListener('click', function (event) {
  alert('This is not a bug, just a feature :P');
});
btn2.addEventListener('click', function (event) {
  alert('I guarantee there\'s gonna be functionality on the fibonacci assignment!');
});
btn3.addEventListener('click', function (event) {
  alert('Yup, 3 different strings for 3 different listeners...');
});