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
    script: 'getTilt()',
    type: 'string'
    } /*, {
    label: 'when device turned [choice:directions]', 
    trigger: true,
    slot: false,
    containers: 1,
    script: 'setInterval(function(){if(direction == {{1}})([[1]])}, 1000);'
        }*/
      ])
}; 

if(window.DeviceOrientationEvent){

	window.addEventListener('deviceorientation', function(eventData) {
	
	//Otetaan kallistuskulmat talteen
		LR = event.gamma;
		FB = event.beta;
		DIR = event.alpha;
		
		//Päivitetään laitteen asento
		getTilt();
		});
}else{
	console.log("Ei toomi tässä :/");
}
	
function getTilt(){
		
		//Raja, jossa kallistuskulma menee.
		var limit = 10;
		direction = "";
		
		console.log("FB: " + FB);
		console.log("LR: " + LR);
		console.log("DIR: " + DIR);
		
		//Väli-ilmansuunnat
		if(FB > limit && LR > limit){
			direction = "northeast";
		}else if(LR > limit && FB < -limit){
			direction = "southeast";
		}else if(LR < -limit && FB < -limit){
			direction = "southwest";
		}else if(LR < -limit && FB > limit){
			direction = "northwest";
		//Pääilmansuunnat
		}else if(FB > limit){
			direction = "north";
		}else if(LR > limit){
			direction = "east";
		}else if(FB < -limit){
			direction = "south";
		}else if(LR < -limit){
			direction =  "west";
		}
	
		return direction;
};

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

