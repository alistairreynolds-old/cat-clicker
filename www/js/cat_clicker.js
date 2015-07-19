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
			//console.log(this.getCat(cat).clicks);
		},

		init: function(){
			view.showCat(0);
			view.showList();
		}
	}


	var view = {
		showCat: function(cat_id){
			controller.setCurrentCat(cat_id);
			var cat = controller.getCat(cat_id);
			$('#cats-shell').html();
			$("#cat-name").html(cat.name);
			$("#cat-img").attr("src","img/" + cat.imgsrc);
			$("#cat-clicks").html("Clicks: " + cat.clicks);

		},

		showList: function(){
			var cats = controller.getCats();
			$('#cats-list').html("");
			for(i=0; i < cats.length; i++){
				var html = "<li class='cat-item' name='" + i + "'>" + cats[i].name + "</li>";
				$("#cats-list").append(html);

			}
			$(".cat-item").click(function(){
				view.showCat($(this).attr('name'));
			});
			$("#cat-img").click(function(){
				var cat_id = controller.getCurrentCat();
				console.log(cat_id);
				controller.incCatClicks(cat_id);
				$(this).next().html("Clicks: " + controller.getCat(cat_id).clicks);
			});
		},
	}

	controller.addCat("bob","bob.jpg");
	controller.addCat("susan","susan.jpg");
	controller.addCat("charlie","charlie.jpg");
	controller.addCat("chris","chris.jpg");
	controller.addCat("betty","betty.jpg");
	controller.addCat("billy","billy.jpg");
	controller.init();

})