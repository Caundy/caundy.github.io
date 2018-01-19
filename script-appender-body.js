var bodyScripts = [
    'https://cdn.rawgit.com/Caundy/widget-bundles/42a0d2e4/inline.244ed330a0e191a2e259.bundle.js',
    'https://cdn.rawgit.com/Caundy/widget-bundles/42a0d2e4/polyfills.32225f5d64cec6731cb0.bundle.js',
    'https://cdn.rawgit.com/Caundy/widget-bundles/42a0d2e4/main.d9539612a8f3169c33dc.bundle.js'
];

var widget = document.createElement('mail-widget');
document.body.appendChild(widget);

for (var i=0; i < bodyScripts.length; i++){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = bodyScripts[i];

    document.body.appendChild(script);
}

