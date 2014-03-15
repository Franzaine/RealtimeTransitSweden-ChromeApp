

	//TODO: Smarter server stuff should be the way instead of this card coded BS:
	
	function getDeparturesFromServer (devicePositionVar, searchbarContentVar, userDepartureValueVar) {
		
		$("#debugtext").text(devicePositionVar + searchbarContentVar + userDepartureValueVar);
		
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