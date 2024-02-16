let wINdo = [ "vomiting leaf", "wandering trill" , "good dull filler", "really thick curve", "winnowy gullet", "random hearth", "full belly", "orange", "loud keyboard", "calculating turn", "burgeoning chest", "zinger"]

let allcolors = ["blue", "green", "yellow", "red", "black", "white", "pink", "purple", "navy", "orange", "turquoise"]

window.onscroll = function () {
           document.getElementById("agar").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
           document.getElementById("color").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
       };

document.getElementById("all").onclick = function() {
   document.getElementById("agar").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
   document.getElementById("color").innerHTML = wINdo[Math.floor(Math.random() * wINdo.length)];
};

document.getElementById("p1").onclick = function () {
   document.getElementById("p2").style.display = "block";
}


document.getElementById("p1").onmouseenter = function() {
           this.style.backgroundImage = "url('p4.gif')";
           this.style.opacity = ".6";
           document.getElementById("all").style.color = "blue";
           this.style.backgroundColor = allcolors[Math.floor(Math.random() * wINdo.length)];
           document.getElementById("all").style.border = "green dotted 60px";
           document.getElementById("all").style.backgroundImage = "url('p1.jpg'), url('p2.jpg')";
         };

document.getElementById("p1").onmouseleave = function() {
           this.style.backgroundImage = "none";
           this.style.opacity = "1";
           document.getElementById("all").style.color = "white";
           this.style.backgroundColor = allcolors[Math.floor(Math.random() * wINdo.length)];
           document.getElementById("all").style.border = "purple dashed 60px";
           document.getElementById("all").style.backgroundImage = "conic-gradient(green, red, yellow, red, yellow, green)";
         };

