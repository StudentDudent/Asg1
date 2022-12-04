window.onscroll = function() {myFunction()};

var topnav = document.getElementById("topnav");

var sticky = topnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

.content {
    padding: 16px;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
}

.sticky + .content {
    padding-top: 60px;
}

.h1 {
    font-weight: bold;
    color: #dcac0e;
    text-align: center;
}
.p {
    font-size: medium;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
