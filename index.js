var toggle_btn = document.getElementById("toggle-btn");
var sidebar = document.getElementById("sidebar");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");
var text6 = document.getElementById("text6");
var text7 = document.getElementById("text7");

toggle_btn.addEventListener('click', function(){

   sidebar.classList.toggle("sidebar");
   sidebar.classList.toggle("sidebarClose");
   text1.class.toggle("open");
   text2.class.toggle("open");
   text3.class.toggle("open");
   text4.class.toggle("open");
   text5.class.toggle("open");
   text6.class.toggle("open");
   text7.class.toggle("open");

});

