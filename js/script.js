$(window).on("load", function() {
		if ($("#preloader").length){
				$("#preloader").delay(100).fadeOut('slow', function(){
						$(this).remove();
				});
		}
});

//I'm using the fetch API instead of $.ajax because I'm more familiar with it
$('#searchButton').click(function() { 
	let endpoint = $('#endpoint').val();

   	fetch(`php/blabla.php?lat=${$('#lat').val()}&long=${$('#long').val()}&endpoint=${$('#endpoint').val()}`)
			.then(response => response.json())
			.then(function(response){
					console.log(response);
					if (endpoint == "oceanJSON" && response.data.ocean){
							$('#results').html(`Ocean name: ${response.data.ocean.name}.`);
					}
					else if (endpoint == "gtopo30JSON" && response.data.gtopo30){
							let elev = response.data.gtopo30;
							$('#results').html(
									elev == -9999 ? 'Invalid coordinates' : `Elevation: ${elev}m`
							)
					}
					else if (endpoint == "findNearbyPlaceNameJSON" && response.data.geonames[0]){
							$('#results').html(response.data.geonames[0].adminName1);
					}
					else {
							$('#results').html(`Invalid coordinates`);
					}

			})
			.catch(error => console.error(error));
});	
