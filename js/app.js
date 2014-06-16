var app = angular.module('band', [] );

$(document).ready(function(){

	menuYloc = parseInt($("#navbarMain").css("top").substring(0,$("#navbarMain").css("top").indexOf("px")));

	$(window).scroll(function(event) {

		var y = $(window).scrollTop();

		var offset = menuYloc + y + "px";

		$("#navbarMain").animate({
			top : offset
		},{
	    duration: 500,
		queue : false});
	});
});

(function(){
	app.controller('SiteController', ['$scope', function($scope){
		this.mainViews = objVisible;
		this.articles = [{}];
		buildData();
		this.articles = posts;
		$("#div-body").hide();
		$("#div-body").ready(function(){
			$("#div-body").fadeIn();
		});
		$("#div-body").unload(function(){
			$("#div-body").fadeOut();
		});

		$scope.toggleVisible = function(value) {
			// // Check that the value is not the same as the current view
			// if (objVisible[value].div_body == true) 
			// 	{
			// 		return;
			// 	};

			// for (var index = 0; index < objVisible.length; index++) {
			// 	objVisible[index] = false;
			// 	// Show or hide the element
			// 	if (objVisible[index].div_body) {
			// 		$("#div-body" + index).slideDown();
			// 	} else {
			// 		$("#div-body" + index).slideUp();
			// 	}
			// };

			// objVisible[value].div_body = true;
			// var posY;

			// // Scroll the window to the top
			// while($(window).scrollTop() != 0)
			// {
			// 	posY = $(window).scrollTop() - 0.01;
			// 	$(window).scrollTop(posY);
			// }
			
			// // Show or hide the element
			// if (objVisible[value].div_body) {
			// 	$("#div-body" + value).slideDown();
			// } else {
			// 	$("#div-body" + value).slideUp();
			// }

			for (var index = 0; index < objVisible.length; index++) {
				$("#div-body" + index).hide();
			};

			$("#div-body" + value).slideToggle("slow");
		};
	}]);

	var posts = [{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	}];

	// var objVisible = [
	// 		{div_body : true},
	// 		{div_body : false},
	// 		{div_body : false},
	// 		{div_body : false}
	// 	];

	var objVisible = [
			{div_body : function(value) {$("#div-body" + value).slideToggle()}},
			{div_body : function(value) {$("#div-body" + value).slideToggle()}},
			{div_body : function(value) {$("#div-body" + value).slideToggle()}},
			{div_body : function(value) {$("#div-body" + value).slideToggle()}}
		];
}
)();

function buildData()
{
	publishPosts();
}

function publishPosts()
{
	var post;

	for (var i = 0; i < 10; i++) {
		try{
			post = {
				author : "Shvacher Noam",
				headline : "My first article",
				body : "greetins, this is my first article, " + 
						"i hope that everyone likes it!"
			}

			app.articles.add(post);
		} 
		catch(e){
		}
	};
}

// function toggleVisible(i)
// {
// 	app.mainViews[i].div_body = true;
// }