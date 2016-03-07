

var works = [
{
	title: "Mack Arquitectos",
	pic: "img/macklogo.jpg",
	link: "http://www.guillermomack.com"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x300",
	link: "#"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x300",
	link: "#"
}
];

for (var i = 0; i < works.length; i++){
	$("#work").append("\n<div class='col-xs-6 col-md-4 workrows'>\n" +
		"<a href='" + works[i].link +"' class='work-img'>\n" +
		"<img class='img-responsive center-block' src='" + works[i].pic + "'>\n" +
		"</a></div>\n" +
		"");
}

var size;

function checkwidth(){
if ($(window).width() <= 768) {size = 2;}
else {size = 3;}
}

checkwidth();

$(window).resize(function(){
checkwidth();
});	

var cols = $('.workrows');
	for(var i = 0, l = cols.length; i < l; i += size) {
    cols.slice(i, i+size).wrapAll('<div class="row"></div>');
}

$(document).ready(function(){
	var $root = $('html, body');
    $('.navbar-inverse a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
 });   
