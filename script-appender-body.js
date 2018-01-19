var bodyScripts = [
    'https://rawgit.com/Caundy/widget-bundles/master/inline.2ff5dde95cfc4ae441ed.bundle.js',
    'https://rawgit.com/Caundy/widget-bundles/master/polyfills.32225f5d64cec6731cb0.bundle.js',
    'https://rawgit.com/Caundy/widget-bundles/master/main.838956031441a33bedc8.bundle.js'
];

/* var widget = document.createElement('widget');
document.body.appendChild(widget); */

for (var i=0; i < bodyScripts.length; i++){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = bodyScripts[i];
    //script.async = true;    

    console.log('appending')        
    document.body.appendChild(script);
}

