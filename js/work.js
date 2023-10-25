
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
