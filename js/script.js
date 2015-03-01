var noteTemp =  '<div class="note animated bounceInLeft">'
					+ 	'<div class="note_cnt">'
					+ 		'<textarea class="cnt" placeholder="Enter note description here"></textarea>'
					+	'</div> '
					+'</div>';
	  
var noteZindex = 1;

function newNote() {
  $(noteTemp).hide().appendTo("#board").show("fade", 300).draggable().on('dragstart',
    function(){
       $(this).zIndex(++noteZindex);
    });
 
	$('textarea').autogrow();
	
  $('.note')
	return false; 
};



$(document).ready(function() {
    
    $("#board").height($(document).height());
    
    $("#add_new").click(newNote);

    newNote();
	  
    return false;
});