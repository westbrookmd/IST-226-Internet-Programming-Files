"use strict";

/*

   Author: Marshall Westbrook
   Date:  12/4/2021

   Filename:   p_script.js  

   Function List:
   collapsibleHandler - A way to create click events on buttons with class names
   
	
*/



const listOfButtonClasses = ["chapter0", "chapter1", "chapter2", "chapter3",
 "chapter4", "chapter5", "chapter6", "chapter7", "chapter8", "chapter9", "chapter10"];
var i;
for(i = 0; i < listOfButtonClasses.length; i++)
{
    collapsibleHandler(document.getElementsByClassName(listOfButtonClasses[i]));
}

function collapsibleHandler(coll){
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "flex") {
            content.style.display = "none";
          } else {
            content.style.display = "flex";
          }
        });
      }
}