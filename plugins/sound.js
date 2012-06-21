/*global yepnope, FB */
yepnope(
    {
        load: ['plugins/javascript.css'],
        complete: setup
    }
);

function setup() {};

var menus = {
    Sound : menu('Sound', [
    {
    label: 'play sound',
    script: '$("#playaudio")',
    } 
      ])
}; 

$('body').append( $('audio' , { id: 'playaudio', autoplay: 'autoplay', src: "sound.mp3" } ) );

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

