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
    label: 'play sound [string:src]',
    script: 'playSound({{1}});'
    } 
      ])
}; 

$('body').append( $('<audio>' , { id: "playaudio", src: "http://upload.wikimedia.org/wikipedia/commons/a/aa/AcousticShuffle.ogg", type: "audio/ogg", preload:"auto" } ) );

function checkBrowser(audio_source){

	//detect type of sound file
	var type = audio_source.substr(audio_source.length-3, 3);
	type.toLowerCase();
	
	console.log(type);

	var a = document.getElementById("playaudio");

//Checks does the browser support <audio>	
	if(a.canPlayType === false){
		alert("Your browser doesn't support <audio>");
		return false;
	}
	
	//Checks does the browser support given sound format
	if(type === "mp3"){
		if(!!!(a.canPlayType('audio/mpeg;').replace(/no/, ''))){
			alert("Your browser doesn't support mp3");
			return false;
		}
		$('#playaudio').attr('type', 'audio/mpeg');
		
	}else if(type === "ogg"){
		if(!!!(a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '')) ){
			alert("Your browser doesn't support ogg");
			return false;
		}
		$('#playaudio').attr('type', 'audio/ogg');
	}else if(type === "wav"){
		if(!!!(a.canPlayType('audio/wav; codecs="1"').replace(/no/, ''))){
			alert("Your browser doesn't support wav");
			return false;
		}
		$('#playaudio').attr('type', 'audio/wav');
	}else if(type != "wav" && type != "ogg" && type != "mp3"){
		alert("Your browser doesn't support " + type);
		return false;
	}
	
	return true;
		
}

function playSound(audio_source) {

		if(checkBrowser(audio_source)){

			$('#playaudio').attr('src', audio_source);
        	var audioPlayer = document.getElementById("playaudio");
        	audioPlayer.load();
        	audioPlayer.play();
        }
}

load_current_scripts();
$('.scripts_workspace').trigger('init');

$('.socket input').live('click',function(){
    $(this).focus();
    $(this).select();
});

