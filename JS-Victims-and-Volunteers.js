//Function to enter Information
function Info(vicorvol) {
	var data = [];
	var x = confirm("Would you like to enter a "+ vicorvol + "?");
	while(x === true) {
		var victimObj = {
			Name: prompt("What is the " + vicorvol + " name?"),
			Phone: prompt("What is the " + vicorvol + " phone number?"),
			Street: prompt("What is the " + vicorvol + " Street?"),
		};
		data.push(victimObj);
		x = confirm("Would you like to enter another " + vicorvol + " name?");
	}
	return data;
}
//Victim #
//var victimNumber = prompt("How many Disaster Victims are there?");
var victimsList = Info("Victim");

//Volunteer #
//var volunNumber = prompt("How many Volunteers are there?")
var volunList = Info("Volunteer");


var personNeed = prompt("Please enter the name of the person in need.");

function find(vol, vic, name) {
	var nameList = []
	for(var i = 0; i < vic.length; i++){
		if(vic[i].name === name)
		 nameList.push(vic[i].name)
		}
		
		
	var found = nameList.indexOf(name);
	
	if(found === -1){
		return alert("We could not find anyone with the name of "+ name)
	}
	
	var vicStreet = (vic[0].street);
	console.log(found)
	
	var volList = []
	for(var j = 0; j < vol.length; j++){
		if (vicStreet === vol[j].street){
			volList.push(vol[j].name)
		}
	}
	
	if (volList.length === 0) {
		alert("We could not find any volunteers on "+ vicStreet + " street!");
	}
	else {
		alert("Here is a list of the Volunters that can help you find "+ name + ": " + volList)
	}
	
}

find(volunList, victimsList, personNeed)

console.log(volunList,victimsList)