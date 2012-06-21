/*global yepnope, FB */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);

function setup() {};

var menus = {
    Time : menu('Time', [
    {
    label: 'hours',
    script: '(function(){var d = new Date(); return d.getHours();})()',
    type: 'number'
    } , {
    label: 'minutes', 
    script: '(function(){var d = new Date(); return d.getMinutes();})()',
    type: 'number'
    }, {
    label: 'weekday',
    script: 'getWeekday()',
    type: 'string'
     } , {
    label: 'day',
    script: '(function(){var d = new Date(); return d.getDate();})()',
    type: 'number'
    }, {
    label: 'month',
    script: '(function(){var d = new Date(); return d.getMonth() + 1;})()',
    type: 'number'
    }, {
    label: 'year',
    script: '(function(){var d = new Date(); return d.getFullYear();})()',
    type: 'number'
    }
      ])
}; 

function getWeekday(){

	var number = new Date().getDay();
	var weekday = "";
	
	switch(number){
	case 0:
		weekday = 'Sunday';
		break;
	case 1:
		weekday = 'Monday';
		break;
	case 2:
		weekday = 'Tuesday';
		break;
	case 3:
		weekday = 'Wednesday';
		break;
	case 4:
		weekday = 'Thursday';
		break;
	case 5:
		weekday = 'Friday';
		break;
	case 6:
		weekday = 'Saturday';
		break;
	}
	
	return weekday;	
};

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

