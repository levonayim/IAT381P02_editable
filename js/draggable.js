/*
See http://www.greensock.com/draggable/ for details. 
This demo uses ThrowPropsPlugin which is a membership benefit of Club GreenSock, http://www.greensock.com/club/
*/

Draggable.create("#zoom", {type:"x,y", edgeResistance:0.65, bounds:"#zoomwrapper", throwProps:true});

//positional velocity
Draggable.create("#movableID", {
	type:"x,y",
	throwProps:true,
	onDragEnd:function() {
		console.log("x velocity is: " + ThrowPropsPlugin.getVelocity(this, "x") + " and the duration is " + this.tween.duration() + " seconds.");
	}
});

//scroll velocity
Draggable.create("#scrollableID", {
	type:"scroll",
	throwProps:true,
	onDragEnd:function() {
		console.log("vertical scroll velocity is: " + ThrowPropsPlugin.getVelocity(this.scrollProxy, "top") + ", horizontal scroll velocity is: " + ThrowPropsPlugin.getVelocity(this.scrollProxy, "left"));
	}
});

var $snap = $("#snap"),
  $liveSnap = $("#liveSnap"),
	$zoomwrapper = $("#zoomwrapper"),
	gridWidth = 196,
	gridHeight = 100,
	gridRows = 6,
	gridColumns = 5,
	i, x, y;

//loop through and create the grid (a div for each cell). Feel free to tweak the variables above
for (i = 0; i < gridRows * gridColumns; i++) {
	y = Math.floor(i / gridColumns) * gridHeight;
	x = (i * gridWidth) % (gridColumns * gridWidth);
	$("<div/>").css({position:"absolute", border:"1px solid #454545", width:gridWidth-1, height:gridHeight-1, top:y, left:x}).prependTo($zoomwrapper);
}

//set the zoomwrapper's size to match the grid, and ensure that the box widths/heights reflect the variables above
TweenLite.set($zoomwrapper, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth + 1});
TweenLite.set(".button", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});

//the update() function is what creates the Draggable according to the options selected (snapping).
function update() {
  var snap = $snap.prop("checked"),
      liveSnap = $liveSnap.prop("checked");
	Draggable.create(".button", {
		bounds:$zoomwrapper,
		edgeResistance:0.65,
		type:"x,y",
		throwProps:true,
		liveSnap:liveSnap,
		snap:{
			x: function(endValue) {
				return (snap || liveSnap) ? Math.round(endValue / gridWidth) * gridWidth : endValue;
			},
			y: function(endValue) {
				return (snap || liveSnap) ? Math.round(endValue / gridHeight) * gridHeight : endValue;
			}
		}
	});
}

//when the user toggles one of the "snap" modes, make the necessary updates...
$snap.on("change", applySnap);
$liveSnap.on("change", applySnap);

function applySnap() {
	if ($snap.prop("checked") || $liveSnap.prop("checked")) {
		$(".button").each(function(index, element) {
			TweenLite.to(element, 0.5, {
				x:Math.round(element._gsTransform.x / gridWidth) * gridWidth,
				y:Math.round(element._gsTransform.y / gridHeight) * gridHeight,
				delay:0.1,
				ease:Power2.easeInOut
			});
		});
	}
	update();
}

update();