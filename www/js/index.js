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

 function storeItem(key, item){
        window.localStorage.setItem( key, item );
    }

    function getItem(key){
        return window.localStorage.getItem( key );
    }