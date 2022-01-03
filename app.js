const logo = document.querySelectorAll("#logo path");

for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function TopNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }