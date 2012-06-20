/*global yepnope, FB */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);


function setup() {};

var menus = {
    geolocation : menu('Location', [
    {
    label: 'my location',
    script: '{lat: 0, long: 0}',
    type: 'location'
    }
}; 

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

