/* Set the width of the side navigation to 500px */
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 165);
  function frame() {
    if (width >= 24) {
      clearInterval(id);
      document.getElementById("myP").className = "w3-text-black w3-animate-opacity";
      document.getElementById("myP").innerHTML = "24 Years Old (1998-12-25)";
    } else {
      width++;
      elem.style.width = width + '%';
      var num = width * 1 / 1;
      num = num.toFixed(0)
      document.getElementById("demo").innerHTML = num;
    }
  }
}