document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }