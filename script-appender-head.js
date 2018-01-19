var headLinks = [
    "https://fonts.googleapis.com/css?family=Roboto&amp;subset=latin-ext",
    "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css",
    "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "https://rawgit.com/Caundy/widget-bundles/master/styles.21187838e728001cec30.bundle.css"
];

for (var i=0; i < headLinks.length; i++){
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = headLinks[i];    
    
    document.head.appendChild(link);
}
/* 
var widget = document.createElement('mail-widget');
document.body.appendChild(widget); */


