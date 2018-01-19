var bodyScripts = [
    'https://cdn.rawgit.com/Caundy/widget-bundles/a5df6981/inline.52f6c100d38402101898.bundle.js',
    'https://cdn.rawgit.com/Caundy/widget-bundles/a5df6981/polyfills.32225f5d64cec6731cb0.bundle.js',
    'https://cdn.rawgit.com/Caundy/widget-bundles/a5df6981/main.ea95cb6133e3850a7270.bundle.js'
];

var widget = document.createElement('mail-widget');
document.body.appendChild(widget);

for (var i=0; i < bodyScripts.length; i++){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = bodyScripts[i];
           
    document.body.appendChild(script);
}

