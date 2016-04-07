$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "../contact.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#button-send').click(function(){
				$('.modal-content').text('<h1>sdfsdf</h1>');
			});
			$("#form").trigger("reset");
		});
		return false;
	});
	
});