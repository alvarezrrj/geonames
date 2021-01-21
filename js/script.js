$(window).on("load", function() {
		if ($("#preloader").length){
				$("#preloader").delay(100).fadeOut('slow', function(){
						$(this).remove();
				});
		}
});

//I'm using the fetch API instead of $.ajax because I'm more familiar with it
$('#searchButton').click(function() { 
   	fetch(`php/blabla.php?lat=${$('#lat').val()}&long=${$('#long').val()}&endpoint=${$('#endpoint').val()}`)
			.then(response => response.json())
			.then(function(response){
					if (response.data.ocean){
							$('#results').html(`Ocean name: ${response.data.ocean.name}.`);
					}
					else {
							$('#results').html(`Invalid coordinates`);
					}

			})
			.then(response => console.log(response.data))
			.catch(error => console.error(error));
});	
