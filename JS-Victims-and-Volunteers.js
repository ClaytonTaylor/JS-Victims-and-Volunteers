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


//Dummy Data
var vic1 = [{
	name: "Kyle",
	phone: 4242,
	street: "104th",
},{
	name: "Talbot",
	phone: 4242,
	street: "104th",
},
{
	name: "Daulton",
	phone: 4242,
	street: "104th",
}]

var vol1 = [{
	name: "Clay",
	phone: 54353,
	street: "104th"
},
{
	name: "Andy",
	phone: 54353,
	street: "105th"
}]

var personNeed = prompt("Please enter the name of the person in need.");

function find(vol, vic, name) {
	var nameList = []
	for(var i = 0; i < vic1.length; i++){
		if(vic1[i].name === name)
		 nameList.push(vic1[i].name)
		}
		
		
	var found = nameList.indexOf(name);
	
	if(found === -1){
		return alert("We could not find anyone with the name of "+ name)
	}
	
	var vicStreet = (vic1[0].street);
	console.log(found)
	
	var volList = []
	for(var j = 0; j < vol1.length; j++){
		if (vicStreet === vol1[j].street){
			volList.push(vol1[j].name)
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