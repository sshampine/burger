$(function() {
	$(".devour-burger").on("click", function(event) {
		var id = $(this).data("id");
		//console.log("delete burger")
		//var newEat = $(this).data("newEat");

		var newEatState = {
			devoured: true
		};

		$.ajax("/api/burgers/" + id, {
			//type: "DELETE"
			type: "PUT",
			data: newEatState
		}).then(
		function() {
			console.log("changed devoured to ");
			location.reload();
		}
		)
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			name: $("#burg").val().trim(),
		}
		$.ajax("api/burgers/", {
			type: "POST",
			data: newBurger
		}).then(function(){
			console.log("created new burger")
			location.reload();
		})
	})

	$(".poop-burger").on("click", function(event) {
		var id = $(this).data("id");
		console.log(id)
		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(
			function() {
				console.log("deleted burger, " + id);
				location.reload()
			}
		)
	})

	
})