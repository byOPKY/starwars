 var template ='<option value="{{number}}">{{especie}}</option>';
 var plantilla ='<div>{{personas}}</div>'
			    
 $(document).ready(function() {
   
    $.getJSON("http://swapi.co/api/species/", function(response){
    	var especies="";
    	var personajes="";
    	$.each(response.results, function(i, especie){
    		var numero ="";
    		var slach;
    		for (var i = 0; i < especie.people.length; i++) {
    			numero += especie.people[i].substr(-3);
    			slach = numero.substring(0,numero.length-1)
    		}
    		especies += template.replace("{{especie}}", especie.name).replace("{{number}}", slach);
    	}); 
    	$("#especimen").change(function(event){
    		var personajes="";
    	    var contador = $(this).val().split("/");
    		for (var i = 0; i < contador.length; i++) {
    			$.getJSON("http://swapi.co/api/people/" + contador[i], function(responsep){
    				personajes += plantilla.replace("{{personas}}", responsep.name);
    				$("#show").html(personajes);
    			});
    		}
    	});
    	$("#especimen").html(especies);
    });
});