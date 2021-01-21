$(window).on("load", function() {
		if ($("#preloader").length){
				$("#preloader").delay(100).fadeOut('slow', function(){
						$(this).remove();
				});
		}
});

//I'm using the fetch API instead of $.ajax because I'm more familiar with it
$('#searchButton').click(function() { 
		fetch(`php/blabla.php`, {
			method: "POST",
			headers: {
					'Content-Type': 'application/json',
					'lat': $('#lat').val(),
					'long': $('#long').val(),
					'endpoint': $('#endpoint').val()
			}/*,
			body: JSON.stringify({
				'lat': $('#lat').val(),
				'long': $('#long').val(),
				'endpoint': $('#endpoint').val()
			})*/
	})
	.then(data => $('#results').html(data))
	.catch(error => console.error(error));
});	
