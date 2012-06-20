/*global yepnope, FB */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);

function setup() { console.log("Acceleration setup");};

var direction = "";
var LR = 0;
var FB = 0;
var DIR = 0;

var menus = {
    accelerometer : menu('Accelerometer', [
    {
    label: 'tilt direction',
    script: 'direction',
    type: 'string'
    } 
      ])
}; 

if(window.DeviceOrientationEvent){

	window.addEventListener('deviceorientation', function(eventData) {
	
	//Otetaan kallistuskulmat talteen
		LR = event.gamma;
		LB = event.beta;
		DIR = event.alpha;
		});
}else{
	console.log("Ei toomi tässä :/");
}
	
function getTilt(){
		
		//Raja, jossa kallistus kulma menee.
		var limit = 10;
		direction = "";
		
		//Väli-ilmansuunnat
		if(FB > limit && LF > limit){
			direction = "northeast";
			return;
		}else if(LR > limit && FB < -limit){
			direction = "southeast";
			return;
		}else if(LR < -limit && FB < -limit){
			direction = "southwest";
			return;
		}else if(LR < -limit && FB > limit){
			direction = "northwest";
			return;
		}
		
		//Pääilmansuunnat
		if(FB > limit){
			direction = "north";
			return;
		}else if(LR > limit){
			direction = "east";
			return;
		}else if(FB < -limit){
			direction = "south";
			return;
		}else if(LR < -limit){
			direction =  "west";
			return;
		}
	
		//Laitetta ei kallistettu tai kallistelu ei toiminut
		return;
};

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

