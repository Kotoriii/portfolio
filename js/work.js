
for (var i = 0; i < works.length; i++){
	$(".controw").append("\n<div class='col-xs-6 col-md-3 workrows'>\n" +
		"<a target='_blank' href='" + works[i].link +"'>\n" +
		"<img class='img-responsive center-block work-img' src='" + works[i].pic + "'>\n" +
		"<div class='hoverwork'><div class='title overtext'>" + works[i].title + "</div>\n" +
		"<div class='tagline overtext'>" + works[i].text + "</div>\n" +
		"</div>" +
		"</a><div class='visible-xs visible-sm'>\n" +
		"<div class='projtitle'><span>" + works[i].title + "</span></div><br>" + "<span class='projtext'>" + works[i].text + "</span></div>\n" + 
		"</div></div>\n" +
		"");
}

var companies = [
{
	pic: "img/companies/comgy.png",
	link: "https://comgy.io"
},
{
	pic: "img/companies/hyconic.png",
	link: "#"
},
{
	pic: "img/companies/jobpioneer.png",
	link: "#"
},
{
	pic: "img/companies/compuccino.png",
	link: "https://compuccino.com"
},
];

for (var i = 0; i < companies.length; i++){
	$(".companiesrow").append("\n<div class='col-xs-6 col-md-3 companies'>\n" +
		"<a target='_blank' href='" + companies[i].link +"'>\n" +
		"<img class='img-responsive center-block company-img' src='" + companies[i].pic + "'>\n" +
		"</a></div>\n" +
		"");
}

/*
var size;

function checkwidth(){
if ($(window).width() <= 760) {size = 2;}
else {size = 4;}
}

checkwidth();

$(window).resize(function(){
checkwidth();
});	

var cols = $('.workrows');
	for(var i = 0, l = cols.length; i < l; i += size) {
    cols.slice(i, i+size).wrapAll('<div class="row"></div>');
} */

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
