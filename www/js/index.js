$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	storeItem('text',text);
    alert(getItem('text'));
}

function storeValue(key, value) {
	 /*var person= {
		"firstName": "Homer",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	}

        storeItem("person", JSON.stringify(person));
        storeItem("hair", "brown");
        storeItem("beard", "messy");
        storeItem("weather", "weird");
        storeItem("date", "16th oct 2017");
        
        document.getElementById("storage1").innerHTML = "First name: " + JSON.parse(getItem("person")).firstName;
        document.getElementById("storage2").innerHTML = "Storage items: " + window.localStorage.length;
       */
}
 function storeItem(key, item){
        window.localStorage.setItem( key, item );
    }

    function getItem(key){
        return window.localStorage.getItem( key );
    }