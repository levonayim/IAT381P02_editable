/* $(function() {      
      $("#add_new").swipe( {
        pinchIn:function(event, direction, distance, duration, fingerCount, pinchZoom)
        {
         $(this).parent('.note').hide("puff",{ percent: 133}, 250);
		 	$( "button" ).click(function() {$( "p" ).remove();});
        },
       
        fingers:2,  
        pinchThreshold:0  
      });
    });
	
	 */

function gestureChange( e ) {
    e.preventDefault();

    scale = e.scale;
    
    var tempWidth = width * scale;

    if ( tempWidth < min ) tempWidth = min;

    $( '#add_new' ).css( {
        width  : tempWidth + 'px',
        height : tempWidth + 'px'
    } );
}

function gestureEnd( e ) {
    e.preventDefault();
    
    $(this).parent('.note').hide("puff",{ percent: 133}, 250);
}

Hammer( add_new ).on( 'pinch', gestureChange );

