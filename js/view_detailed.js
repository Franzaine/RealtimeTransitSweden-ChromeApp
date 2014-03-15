function getDepartureInformationFunction (departureId) {
		
		//TODO: Get color, type, station and direction and put it to below respectively 
		
		$(".departureColor").css({
			background:($( "." + departureId ).find ( ".cardColor" ).css( "background-color" ))
		});
		
		$(".departureType").attr(
			'src', ($( "." + departureId ).find ( ".cardType" ).attr( "src" ))
		);
		
		$(".departureStation").text($( "." + departureId ).find( ".cardStation" ).text());
		
		$(".departureDirection").text($( "." + departureId ).find( ".cardDirection" ).text());
		
		//TODO: Append the times returned from server with corresponding realtimemarker
		
		$("departureTimeContainer").empty();
		
		additionalDepartureTimesArray = getAdditionalDepartureTimes(departureId);
		
		for (i = 0; i<additionalDepartureTimesArray.length; i++){
		
			$("#departureTextHolder").append('<div class="departureTimeContainer"><img src="assets/images/icon_realtime_' + additionalDepartureTimesArray[i][1] + '.png" style="height:1.5em; margin-left:10px; margin-right:5px;"><p class="departureTime" style="display:inline;">' + additionalDepartureTimesArray[i][0] + '</p></div>')
				
		}
		
		
		
	
	}