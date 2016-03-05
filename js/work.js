var works = [
/*"img/macklogo.png' alt='Mack Arquitectos'",
"http://placehold.it/300x311' alt='Placeholder'", 
"http://placehold.it/300x311' alt='Placeholder'",
"http://placehold.it/300x311' alt='Placeholder'",
"http://placehold.it/300x311' alt='Placeholder'",
"http://placehold.it/300x311' alt='Placeholder'",
"http://placehold.it/300x311' alt='Placeholder'",
"http://placehold.it/300x311' alt='Placeholder'"*/
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

$(window).resize(function(){
if ($(window).width() <= 768) {size = 2;}
else { size = 3;}
});	

var cols = $('.workrows');
	for(var i = 0, l = cols.length; i < l; i += size) {
    cols.slice(i, i+size).wrapAll('<div class="row"></div>');
}

