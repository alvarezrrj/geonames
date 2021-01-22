$(window).on("load", function() {
	if ($("#preloader").length){
		$("#preloader").delay(100).fadeOut('slow', function(){
			$(this).remove();
		});
	}
});



$('#searchButton').click(function() { 
	let endpoint = $('#endpoint').val();
	$.ajax(`php/blabla.php`, 
		{
		method: 'POST',
		dataType: 'json', //expect json back from server.
		data : {
			'lat': $('#lat').val(),
			'long': $('#long').val(),
			'endpoint': $('#endpoint').val(), 
		},
		success: function(response, status, req) {
			console.log(response);
			if (endpoint == 'oceanJSON' && response.data.ocean) {
				$('#results').html(`Ocean name: ${response.data.ocean.name}.`); 
			}
			else if (endpoint == 'gtopo30JSON' && response.data.gtopo30) {
				let elev = response.data.gtopo30;
				$('#results').html(
					elev == -9999 ? 'Invalid coordinates' : `Elevation: ${elev}m`
				) 
			}
			else if (endpoint == "findNearbyPlaceNameJSON" && response.data.geonames[0]) {
				$('#results').html(response.data.geonames[0].adminName1);
			}
			else {
				$('#results').html(`Invalid coordinates`);
			}


		},
		error: function(req, message, error){
			console.error(message);
		},
		});
});
