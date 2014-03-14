
$( document ).ready(function() {

	addCardFunction();
	
	$('.deleteCardButton').click(function() {
	
		//Make sure that if the deleteCardButton is clicked (together with the respective departureCard) the button gets the class removedCard
		//this is to stop the card from firing when deletebutton is pressed (the button is a part of the card)
		$(this).addClass("removedCard");

	});
	
	$('.departureCard').click(function() {
		
		//is it the deleteCardButton being pressed or the the rest of the departureCard?
		if($(this).find(".deleteCardButton").hasClass("removedCard")) {
			//$(removeCardFunction($(this).parents().attr("class")));
			removeCardFunction(this);
		} else {
			cardPressedFunction(this);
		}
	});
	
	
	$('#backbutton').click(function() {
		/*
		$("#departureContainer").css({
			display: "none"
		});
  
		$("#cardContainer").css({
			display: "block"
		});
	
		$("#backbutton").css({
			display: "none"
		});*/
	toggleVisibilityFunction();
	});
	
	$('.removedView').click(function() {
		
		regretCardRemovalFunction(this);
		
	});
	
	
});


	function addCardFunction () {
	
	$("#debugtext").text("cards added");
	
	var departureArray = getDeparturesFromPosition(13651523);
	
	for (i = 0; i<departureArray.length; i++){
		
        $("#cardContainer").append('<div style="background-color:white; margin:10px; float:left;" class="' + i.toString() + '"> <div class="departureCard"> <table ><tr><td class="cardColor" style="background-color:' + departureArray[i][1] + '; width:5px; min-width:5px;"></td><td><img class="cardType" src="assets/images/card_traffic_' + departureArray[i][0] + '.png" style="margin:3px"></td><td><table style="margin-right:10px"><tr><td class="cardTime"><img class="cardRealtime" src="assets/images/icon_realtime_' + departureArray[i][3] + '.png" style="height:1em; margin-right:5px; white-space: nowrap; overflow:hidden; text-overflow:ellipsis;">' + departureArray[i][2] + '</td></tr><tr><td class="cardStation" style="white-space: nowrap;  overflow:hidden; text-overflow:ellipsis;">' + departureArray[i][4] + '</td></tr><tr><td class="cardDirection" style="white-space: nowrap;  overflow:hidden; text-overflow:ellipsis;">' + departureArray[i][5] + '</td></tr></table></td><td style="vertical-align:initial;"> <img class="deleteCardButton" src="assets/images/button_delete.png" style="height:1.2em;"> </td></tr></table> </div> <div class="removedView" > <table style="background-color: gray;" ><tr><td><img src="assets/images/card_guide_shortcut.png" style="margin:3px"></td> <td>Departure deleted. Regret?</td></tr></table></div> </div>')
				
	}
		
	}
	
	function removeCardFunction(cardId){
	
		$("#debugtext").text("card removestate changed " + cardId);
	
		$(cardId).parent().find(".removedView").toggleClass("deleted");
		
		$(cardId).toggleClass("deleted");
		
	}
	
	function regretCardRemovalFunction(regretButton) {
	
		$("#debugtext").text("regretCardRemovalFunction");
		
		$(regretButton).toggleClass("deleted");
		
		$(regretButton).parent().find(".departureCard").toggleClass("deleted");
		
		$(regretButton).parent().find(".deleteCardButton").removeClass("removedCard");
		
	}
	
	function cardPressedFunction (pressedId) {
		
		$("#debugtext").text("cardPressedFunction");
		
		toggleVisibilityFunction ();

		var cardNumber = $(pressedId).parent().attr("class");
		
		$("#debugtext").text(cardNumber);
		
		getDepartureInformationFunction (cardNumber);
			
		/*
		$(".departureTime").text($( this ).find( ".cardTime" ).text());
		
		$(".departureStation").text($( this ).find( ".cardStation" ).text());
		
		$(".departureDirection").text($( this ).find( ".cardDirection" ).text());
		
		$(".departureColor").css({
			background:($( this ).find ( ".cardColor" ).css( "background-color" ))
		});
		
		$(".departureType").attr(
			'src', ($( this ).find ( ".cardType" ).attr( "src" ))
		);
		
		$(".departureRealtime").attr(
			'src', ($( this ).find ( ".cardRealtime" ).attr( "src" ))
		);*/
		
	}
	
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
		
		additionalDepartureTimesArray = getAdditionalDepartureTimes(departureId);
		
		for (i = 0; i<additionalDepartureTimesArray.length; i++){
		
			$("#departureTextHolder").append('<div><img src="assets/images/icon_realtime_' + additionalDepartureTimesArray[i][1] + '.png" style="height:1.5em; margin-left:10px; margin-right:5px;"><p class="departureTime" style="display:inline;">' + additionalDepartureTimesArray[i][0] + '</p></div>')
				
		}
		
		//<img class="departureRealtime" src="assets/images/icon_realtime_off.png" style="height:1.5em; margin-left:10px; margin-right:5px;">
		//<p class="departureTime" style="display:inline;">Placeholder</p>
		
	
	}
	
	
	
	
	
	//TODO: Smarter server stuff should be the way instead of this card coded BS:
	
	function getDeparturesFromPosition (userPosition) {
		
		var departureArray=[[0, 0],[1, 0],[2, 0],[3, 0],[4, 0],[5, 0],[6, 0],[7, 0],[8, 0],[9, 0]];
		departureArray[0][0] = "bus";
		departureArray[0][1] = "red";
		departureArray[0][2] = "0 min (12:45)";
		departureArray[0][3] = "on";
		departureArray[0][4] = "Öreby C.";
		departureArray[0][5] = "0 Öresunds forskningscentral";
		
		departureArray[1][0] = "bus";
		departureArray[1][1] = "orange";
		departureArray[1][2] = "1 min (12:45)";
		departureArray[1][3] = "off";
		departureArray[1][4] = "Apacheindianernas tillhåll";
		departureArray[1][5] = "1 Adamsberg";
		
		departureArray[2][0] = "bus";
		departureArray[2][1] = "green";
		departureArray[2][2] = "2 min (12:45)";
		departureArray[2][3] = "on";
		departureArray[2][4] = "Birger Jarlsgatan 4b";
		departureArray[2][5] = "2 Breda Stockholms Södra Pendelstationscentral";
		
		departureArray[3][0] = "tram";
		departureArray[3][1] = "hotPink";
		departureArray[3][2] = "3 min (12:45)";
		departureArray[3][3] = "off";
		departureArray[3][4] = "Crecents gamla fabrik";
		departureArray[3][5] = "3 Crigs place";
		
		departureArray[4][0] = "bus";
		departureArray[4][1] = "green";
		departureArray[4][2] = "4 min (12:45)";
		departureArray[4][3] = "on";
		departureArray[4][4] = "Davids tillhåll";
		departureArray[4][5] = "4 Down";
		
		departureArray[5][0] = "bus";
		departureArray[5][1] = "black";
		departureArray[5][2] = "5 min (12:45)";
		departureArray[5][3] = "off";
		departureArray[5][4] = "Efterköping";
		departureArray[5][5] = "5 Ekeby";
		
		departureArray[6][0] = "subway";
		departureArray[6][1] = "pink";
		departureArray[6][2] = "6 min (12:45)";
		departureArray[6][3] = "on";
		departureArray[6][4] = "Falköping";
		departureArray[6][5] = "6 Falsterbo Ektorp";
		
		departureArray[7][0] = "bus";
		departureArray[7][1] = "gray";
		departureArray[7][2] = "7 min (12:45)";
		departureArray[7][3] = "off";
		departureArray[7][4] = "Skogstaholms bar och kebab";
		departureArray[7][5] = "West";
		
		departureArray[8][0] = "train";
		departureArray[8][1] = "green";
		departureArray[8][2] = "8 min (12:45)";
		departureArray[8][3] = "on";
		departureArray[8][4] = "Skogstaholms bar och kebab";
		departureArray[8][5] = "West";
		
		departureArray[9][0] = "tram";
		departureArray[9][1] = "blue";
		departureArray[9][2] = "9 min (12:45)";
		departureArray[9][3] = "on";
		departureArray[9][4] = "Skogstaholms bar och kebab lååååååååånga texter";
		departureArray[9][5] = "West eller kooooooortaaaaaaa";
		
		return departureArray;
	
	}
	
	function getAdditionalDepartureTimes(departureId) {
		//User the departureId to find the more departures, maybe? NO! HARDCODE ALL THE THINGS!
		
		additionalDepartureTimesArray=[[0, 0],[1, 0],[2, 0],[3, 0]];
		
		additionalDepartureTimesArray[0][0] = "1 h (13:45)";
		additionalDepartureTimesArray[0][1] = "on";
		
		additionalDepartureTimesArray[1][0] = "2 h (14:45)";
		additionalDepartureTimesArray[1][1] = "on";
		
		additionalDepartureTimesArray[2][0] = "3 h (15:45)";
		additionalDepartureTimesArray[2][1] = "off";
		
		additionalDepartureTimesArray[3][0] = "4 h (16:45)";
		additionalDepartureTimesArray[3][1] = "off";
		
		return additionalDepartureTimesArray;
	
	}