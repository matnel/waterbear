/*global yepnope */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);

function setup() {};

// TODO: can helper text be added?
var menus = {
    time : menu('Time', [
    {
    label: 'hours',
    script: '(function(){var d = new Date(); return d.getHours();})()',
    type: 'number'
    } , {
    label: 'minutes', 
    script: '(function(){var d = new Date(); return d.getMinutes();})()',
    type: 'number'
    }, {
    label: 'day of week',
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
	
	switch(number){
	case 0:
		return 'Sunday';
	case 1:
		return 'Monday';
	case 2:
		return 'Tuesday';
	case 3:
		return 'Wednesday';
	case 4:
		return 'Thursday';
	case 5:
		return 'Friday';
	case 6:
		return 'Saturday';
	}
	
};


