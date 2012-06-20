/*global yepnope, FB */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);


function setup() {};

var loc = {};

var menus = {
    geolocation : menu('Location', [
    {
    label: 'my location',
    script: 'loc',
    type: 'location'
    } , {
    label: 'update location',
    script: 'navigator.geolocation.getCurrentPosition( function(data){ loc.latitude = data.coords.latitude; loc.longitude = data.coords.longitude; }, $.noop);'
    }
] ) }; 

function location( data ) {
  loc.latitude = data.coords.latitude;
  loc.longitude = data.coords.longitude;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(location, $.noop);
}

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

