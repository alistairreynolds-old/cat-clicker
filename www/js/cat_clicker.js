$(function(){
	var model = {
		catsList: {cats: []},
		curCat : 0
	}

	var controller = {
		getCats: function(){
			return model.catsList.cats;
		},

		getCat: function(cat){
			return model.catsList.cats[cat];
		},

		addCat: function(name, img){
			model.catsList.cats.push({"name": name, "imgsrc": img, clicks: 0});
		},

		getCurrentCat: function(){
			return model.curCat;
		},

		setCurrentCat: function(cat){
			model.curCat = cat;
		},

		incCatClicks: function(cat){
			model.catsList.cats[cat].clicks ++;
		}
	}


	var view = {

		showCat: function(cat_id){
			controller.setCurrentCat(cat_id);
			var cat = controller.getCat(cat_id);
			$("#cats-shell").children("h1").html(cat.name);
			$("#cats-shell").children("img").attr("src","img/" + cat.imgsrc);
			$("#cats-shell").children("h3").html("Clicks: " + cat.clicks);
		},

		init: function(){

			var cats = controller.getCats();
			for(i=0; i < cats.length; i++){
				var html = "<li class='cat-item' name='" + i + "'>" + cats[i].name + "</li>";
				$("#cats-list").append(html);
			}

			$(".cat-img").click(function(){
				var catID = controller.getCurrentCat();
				controller.incCatClicks(catID);
				$(this).next().html("Clicks: " + controller.getCat(catID).clicks);
			});

			$(".cat-item").click(function(){
				view.showCat($(this).attr('name'));
			});

			this.showCat(0);
		},
	}

	controller.addCat("bob","bob.jpg");
	controller.addCat("susan","susan.jpg");
	controller.addCat("charlie","charlie.jpg");
	controller.addCat("chris","chris.jpg");
	controller.addCat("betty","betty.jpg");
	controller.addCat("billy","billy.jpg");
	view.init();
})