/*global yepnope, FB */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);

function setup() {};

var accelerometer = {};
accelerometer.direction = "";
accelerometer.LR = 0;
accelerometer.FB = 0;
accelerometer.DIR = 0;

var menus = {
    accelerometer : menu('Motion', [
    {
    label: 'tilt direction',
    script: 'accelerometer.direction',
    type: 'string'
    } , {
    label: 'when device turned [choice:directions]', 
    trigger: true,
    slot: false,
    containers: 1,
    script: 'setInterval( function(){ if(accelerometer.direction.indexOf( {{1}} ) != -1 ){ [[1]] } }, 1000);'
        }
      ])
}; 

if(window.DeviceOrientationEvent){

	window.addEventListener('deviceorientation', function(eventData) {
	
	//Otetaan kallistuskulmat talteen
		accelerometer.LR = event.gamma;
		accelerometer.FB = event.beta;
		accelerometer.DIR = event.alpha;
		
		//Päivitetään laitteen asento
		getTilt();
		});
}else{
	console.log("Ei toomi tässä :/");
}
	
function getTilt(){
		
		//Raja, jossa kallistuskulma menee.
		var limit = 10;
		accelerometer.direction = "";
		
		//Väli-ilmansuunnat
		if(accelerometer.FB > limit && accelerometer.LR > limit){
			accelerometer.direction = "upright";
		}else if(accelerometer.LR > limit && accelerometer.FB < -limit){
			accelerometer.direction = "downright";
		}else if(accelerometer.LR < -limit && accelerometer.FB < -limit){
			accelerometer.direction = "downleft";
		}else if(accelerometer.LR < -limit && accelerometer.FB > limit){
			accelerometer.direction = "upright";
		//Pääilmansuunnat
		}else if(accelerometer.FB > limit){
			accelerometer.direction = "up";
		}else if(accelerometer.LR > limit){
			accelerometer.direction = "right";
		}else if(accelerometer.FB < -limit){
			accelerometer.direction = "down";
		}else if(accelerometer.LR < -limit){
			accelerometerdirection =  "left";
		}
	
		return accelerometer.direction;
};

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

