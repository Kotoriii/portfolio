

var works = [
{
	pic: "img/macklogo.jpg",
	link: "http://www.guillermomack.com",
	title: "Guillermo Mack",
	text: "Architect portfolio. Non-responsive design, CSS-Zoom, Owl-Carousel, Lightbox, PHP Contact form"
},
{
	pic: "img/picommerce.jpg",
	title: "E-Commerce Template",
	text: "Bootstrap, ASP/C#, Content Management System, Online Shop, MSSQL",
	link: "http://picommerce.gear.host"
},
{
	pic: "img/bikeberlin.jpg",
	title: "Ruby on Rails Web App",
	text: "Bootstrap, Ruby on Rails, Devise mailing, CanCanCan user management, Heroku",
	link: "http://testbikeberlin.herokuapp.com"
}
];

for (var i = 0; i < works.length; i++){
	$("#work").append("\n<div class='col-xs-6 col-md-4 workrows'>\n" +
		"<a href='" + works[i].link +"'>\n" +
		"<img class='img-responsive center-block work-img' src='" + works[i].pic + "'>\n" +
		"<div class='hoverwork'><div class='title overtext'>" + works[i].title + "</div>\n" +
		"<div class='tagline overtext'>" + works[i].text + "</div>\n" +
		"</div></a></div>\n" +
		"");
}

var size;

function checkwidth(){
if ($(window).width() <= 760) {size = 2;}
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
