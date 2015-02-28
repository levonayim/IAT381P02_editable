var zoom = document.getElementById('zoom');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(zoom);

// listen to events...
mc.on("panleft panright tap press", function(ev) {
    zoom.textContent = ev.type +" gesture detected.";
});