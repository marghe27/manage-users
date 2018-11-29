var idCounter = 0;
var users = [];


var addUser = function (name, surname) {
	'use strict';
	var user = {
		name: name,
		surname: surname,
		id: idCounter++
	};
	
	users.push(user);
	
	return users;
};



 addUser("carlo" , "ardenti");
 addUser("agata", "stella");
 addUser("stefania", "bua");
 addUser("stefania", "delacqua");
addUser("stefania", "baccio");
 addUser("stefania", "montante");
 addUser("stefania", "torrisi");
addUser("stefania", "distefano");




var deleteUserById = function(paramId){
	'use strict';
	for(var i=0; i<users.length; i++){
		
		//console.log("listUsers",listUsers);
		if(paramId===users[i].id){
			
			 users.splice(i, 1);
		}
		
	}
}; 


var returnArray = function(){
	'use strict';
	 return users;
};




var searchByName = function (paramName) {
	'use strict';
	for (var i = 0; i < users.length; i++) {
		if (paramName === users[i].name) {
			return users[i].name;
		}
		
	}
};


returnArray();
console.log(" Array returnArray ", returnArray());

deleteUserById(0);

console.log(" Array returnArray ", returnArray());

searchByName("stefania");

console.log(" Array returnArray ", searchByName("stefania"));
