// Store cats in json
var cats = [
	{"name": "bob", clicks: 0},
	{"name": "susan", clicks: 0},
	{"name": "charlie", clicks: 0},
	{"name": "chris", clicks: 0},
	{"name": "betty", clicks: 0},
	{"name": "billy", clicks: 0}
];

// generate cats list
for(i=0; i<cats.length; i++){
	var html = "<li class='cat-item' onclick='showCat(" + i + ")'>" + cats[i].name + "</li>";
	$("#cats-list").append(html);
}

showCat(0);

// Update the json cat array and update the html
$(".cat-img").click(function(){
	var catID = $(this).attr("name");
	console.log(catID);
	cats[catID].clicks ++;
	$(this).next().html("Clicks: " + cats[catID].clicks);
});

// Shows the passed cat number
function showCat(cat){
	$("#cats-shell").children("h1").html(cats[cat].name);
	$("#cats-shell").children("h1").attr("name", cat);
	$("#cats-shell").children("img").attr("src","img/cat-" + cat + ".jpg");
	$("#cats-shell").children("img").attr("name", cat);
	$("#cats-shell").children("h3").html("Clicks: " + cats[cat].clicks);
};
