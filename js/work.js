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
	pic: "img/macklogo.png",
	link: "http://www.guillermomack.com"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x311",
	link: "#"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x311",
	link: "#"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x311",
	link: "#"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x311",
	link: "#"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x311",
	link: "#"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x311",
	link: "#"
},
{
	title: "Placeholder",
	pic: "http://placehold.it/300x311",
	link: "#"
}
];

for (var i = 0; i < works.length; i++){
	$("#work").append("\n<div class='col-xs-12 col-md-4'>\n" +
		"<a href='" + works[i].link +"' class='work-img'>\n" +
		"<img class='img-responsive center-block' src='" + works[i].pic + "'>\n" +
		"</a></div>\n" +
		"");

}

var $cols = $('.workrows');
for(var i = 0, l = $cols.length; i < l; i += 3) {
    $cols.slice(i, i+3).wrapAll('<div class="row"></div>');
}