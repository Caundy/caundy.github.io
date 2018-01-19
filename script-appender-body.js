var bodyScripts = [
    'https://cdn.rawgit.com/Caundy/widget-bundles/1cd9f19d/inline.f270198606ce1cad91ee.bundle.js',
    'https://cdn.rawgit.com/Caundy/widget-bundles/1cd9f19d/polyfills.32225f5d64cec6731cb0.bundle.js',
    'https://cdn.rawgit.com/Caundy/widget-bundles/1cd9f19d/main.2dca7b33c27144a5305f.bundle.js'
];

var widget = document.createElement('mail-widget');
document.body.appendChild(widget);

for (var i=0; i < bodyScripts.length; i++){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = bodyScripts[i];

    document.body.appendChild(script);
}

