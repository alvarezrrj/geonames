$(window).on("load", function() {
		if ($("#preloader").length){
				$("#preloader").delay(100).fadeOut('slow', function(){
						$(this).remove();
				});
		}
});


$('#searchButton').click(function() {
	fetch('php/blabla.php', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				'lat': $('#lat').val(),
				'long': $('#long').val(),
				'endpoint': $('#endpoint').val()
			})
	})
	.then(response => console.log(`Response: ${response.body}`))
	.then(response => $('#results').val(response))
	.catch(error => console.error(error));
});	
