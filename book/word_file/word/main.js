
var max_height = (screen.height);




var for_loop=0;
function $id(id) {
//	alert('asasfa');
//	var cc=document.getElementById(id);
//	alert(cc.value);
//	alert('asasfa');


  return document.getElementById(id);
  
  
  
}


function convert() {

//document.getElementById('hide_div').style.display='none';

document.getElementById('div_0').setAttribute("style","height:"+max_height);	

//alert($id('file').files[0]);

  var selected_file = $id('file').files[0];
//  alert(selected_file+'w23');
  
  
  var reader = new FileReader();
  reader.onload = function(aEvent) {
  convertToPDF(btoa(aEvent.target.result));
  result_fetch(for_loop);
  
  
  };

  // reader.readAsArrayBuffer(selected_file);
  reader.readAsBinaryString(selected_file);
  
}
var numb = 0;
var height_total=0;
var id_c =0;
function convertToPDF(aDocxContent) {
  var content = docx(aDocxContent);
  $id('div_0').textContent = '';
  
  
  
  console.log('content length: ' + content.DOM.length);
  while (content.DOM.length > 0) {
    var node = content.DOM[0];
    
var para = document.createElement('div');
	para.setAttribute("id",numb);
	para.appendChild(node);
	
	var id_inc = 'div_'+id_c;
	$id(id_inc).appendChild(para);

	var ch = document.getElementById(numb).clientHeight;
	height_total = height_total + ch; 
	
//	alert(height_total);
	
	if((max_height - height_total) < 20 )
	{
		
		id_c=id_c+1; 
		
var xm=	document.createElement('div');

xm.setAttribute("id","div_"+id_c);
xm.style.cssText= 'height:'+max_height+'; border: 1px #000 solid; margin-top: 10px;';

//xm.innerHTML ='<div id="container1" style="width:500px;height: 600px; border: 1px #000 solid; margin-top: 10px;"></div>';

document.getElementById('display_none').appendChild(xm);





if(height_total >(max_height-30)  )
		{

			var old_div = document.getElementById(numb).innerHTML;
			
			document.getElementById(numb).remove();
			
		var new_div= document.createElement('div');
		
		new_div.setAttribute("id",numb);
		
		new_div.innerHTML = old_div;
			
			
			$id('div_'+id_c).appendChild(new_div);
			
			}




		for_loop=id_c;
		
		height_total = 0;
	//	alert(max_height-height_total);
		}else{
			
			
			}
//	alert(ch+'======='+height_total);	
numb++;
//	var clientHeight = document.getElementById('container').height;
	
	
	//alert(clientHeight);
	
//	alert(node.innerHTML );
  }
}

window.addEventListener('load', function() {
  document.getElementById('convert').onclick = convert;
  
});

