/*global yepnope, FB */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);

function setup() {};

var direction = "";
var LR = 0;
var FB = 0;
var DIR = 0;

var menus = {
    accelerometer : menu('Motion', [
    {
    label: 'tilt direction',
    script: 'direction',
    type: 'string'
    } , {
    label: 'when device turned [choice:directions]', 
    trigger: true,
    slot: false,
    containers: 1,
    script: 'setInterval( function(){ if(direction.indexOf( {{1}} ) != -1 ){ [[1]] } }, 1000);'
        }
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
		
		//Väli-ilmansuunnat
		if(FB > limit && LR > limit){
			direction = "upright";
		}else if(LR > limit && FB < -limit){
			direction = "downright";
		}else if(LR < -limit && FB < -limit){
			direction = "downleft";
		}else if(LR < -limit && FB > limit){
			direction = "upright";
		//Pääilmansuunnat
		}else if(FB > limit){
			direction = "up";
		}else if(LR > limit){
			direction = "right";
		}else if(FB < -limit){
			direction = "down";
		}else if(LR < -limit){
			direction =  "left";
		}
	
		return direction;
};

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

