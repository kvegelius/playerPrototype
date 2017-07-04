
// Grab the template script
var theTemplateScript = $("#address-template").html();

// Compile the template
var theTemplate = Handlebars.compile(theTemplateScript);

// Define our data object
var data={
	"clock": 11
};

countDown();


function countDown(){
	if(data.clock === 0){
		alert("Start!!!");
	}
	else{
		setTimeout(function(){ 
			data.clock -= 1;
			// Pass our data to the template
			var theCompiledHtml = theTemplate(data);	  

			// Add the compiled html to the page
			$('.content-placeholder').html(theCompiledHtml);
			countDown();
		}, 1000);		
	}
}




  