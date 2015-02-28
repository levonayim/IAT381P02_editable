var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on("panleft panright tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});

var zoom = document.getElementById('zoom');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(zoom);

var noteTemp =  '<div class="note">'
      +'<textarea class="cnt" placeholder="Enter note here"></textarea>'
      +'</div>';

var noteZindex = 10;

function newNote() {
  $(noteTemp).hide().appendTo("#add_new").show("fade", 300).draggable().on('dragstart',
    function(){
       $(this).zIndex(++noteZindex);
    });

function deleteNote(){
    $(this).parent('.note').hide("puff",{ percent: 133}, 250);
};
 
  $('.remove').click(deleteNote);
  $('textarea').autogrow();
  
  $('.cnt')
  return false; 
};

// listen to events...
mc.on("panleft panright tap press", function(e) {
    Hammer(zoom).on("swipe", function(e){
  $('#zoom').newNote();
});
