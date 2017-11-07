$(function() {
	$(".delete-burger").on("click", function(event) {
		var id = $(this).data("id");
		//console.log("delete burger")
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(
		function() {
			console.log("deleted id ", id);
			location.reload();
		}
		)
	});

	$("#create-form").on("submit", function(event) {
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
})