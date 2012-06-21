/*global yepnope, jQuery */

yepnope(
    {
        load: [
            'lib/raphael-1.3.1-min.js',
            'lib/raphael-path.js',
            'lib/sketchy.js',
            'lib/colorwheel.js',
            'lib/beautify.js',
            'lib/highlight.js',
            'lib/highlight-javascript.js',
            'lib/highlight-github.css'
        ],
        complete: setup
    }
);

function setup(){

    console.log('All done?');
    $('#block_menu').accordion({ autoHeight: false,  collapsible: true });
    $('#block_menu').show();
};
