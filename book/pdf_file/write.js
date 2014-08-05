// JavaScript Document



function writeFileFromSDCard(pg,d) {
	
	
	alert(d);
	
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
   fileSystem.root.getDirectory("myappfolder", {
           create: true
       }, function(directory) {
					   
                       //var DocumentName = document.getElementById('name').value;
					   var FileName = pg + ".png";
                       directory.getFile(FileName, { create: true, exclusive: false }, function(fileEntry) {
						  
                           fileEntry.createWriter(function(writer) {
							   
                               writer.seek(writer.length);
								//var content = document.getElementById('noise').value;
                               writer.write(d);
							   alert("file saved successfully");
							   //window.location = "index.html";
                           }, fail);
                       }, fail);
                   }, fail);
},fail);
	
              
			   
			   
}

function fail(){
				alert("sorry some error occured in saving file. Please try again.");   
			   }


