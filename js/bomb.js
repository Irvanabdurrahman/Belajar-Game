var ajaxObject;
var json ;
var posbom = new Array();

var menit=3;
var detik=0;
var interval;

$(document).ready(function(){
	$("#start").click(function(){
			$(".bomb").hide();
			$("#bg").slideDown("slow").queue(function(){
				interval = setInterval(time,1000);
			});
	});
});

function time(){
	if(detik==0  && menit==0 ){
		$(document).ready(function(){	
				$("#").show(100, alert("TIME IS OVER"));
				$("#bg").hide();
		});
		clearInterval(interval);
	}else{
		if(detik==0){
			detik=59;
			menit--;
		}else{
			detik--;
		}
		
		$("#waktu").html("<div class='time'>"+menit+" : "+detik+"</div>");
		
	}
}
	
function ajaxFunction(){
	if(window.XMLHttpRequest){
		ajaxObject = new XMLHttpRequest();
	}
	else if(window.ActiveXObject){
		ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxObject.onreadystatechange = function(){
		if(ajaxObject.readyState==4 && ajaxObject.status==200){
			json=eval('(' + ajaxObject.responseText + ')');
			setBom();
		}
	};
	ajaxObject.open("GET","bomb.json",true);
	ajaxObject.send();
}			

function setBom(){
	var j=0;
	while(j<20){
		var sama=false;
		bomSementara = Math.floor(Math.random()*50)+1; // math random akan menghasilkan angka diantara 0 - 1 , jadi agar hasilnya dintara 1 -25 maka dikalikan 25 , lalu dibulatkan kebawah lalu + 1 contoh. (0.23121212341234 *25) 5.xxxx dibulatkan jadi 5 lalu tambah 1 jadi 6				
		if(j>0){
			for(var i=0;i<posbom.length;i++){
				if(bomSementara == posbom[i]){ //untuk mengecek apakah posisi bom sementara memiliki posisi bom yg sudah ada
					sama=true;
					break;
				}
			}
		}
		
		if(sama==false){					
			// klo tidak sama maka j ditambah dan bom sementara di dimasukkan
			posbom[j] = bomSementara;
			j++;
		}
	} 
	
	/*masukkan bom*/
	for(i=0;i<posbom.length;i++){ //karena nilai posisi bom adalah id kotak jadi ini benar
		$("#"+posbom[i]).append("<img src='"+json.fungsi[0].bomb+" ' class='bomb'>");
	}
}
			
function cek(el){ //element (this) di tangkap oleh variabel el
	var anak = el.childNodes; //pke s , node(s) berarti berindeks. semacam array
	var adaBom=false;
	
	for(var i =0 ; i<anak.length;i++){ // di ulang sebanyak anak elemen this itu
		if(anak[i].nodeName=="IMG"){
			adaBom=true;
		}
	}

	if(adaBom==true){
		$(el).empty().append("<img src=' "+json.fungsi[0].bomb+" '>");
		//alert(json.fungsi[0].bomb);
		$(document).ready(function(){	
				$("").show(100,alert("BOMB"));
				$("#bg").hide();
				eval("location='index.php'");
		});
		clearInterval(interval);
	}else{
		$(el).empty().append("<img src='"+json.fungsi[1].benar+" '>");
		$(el).removeAttr('Onclick');
	} 
}