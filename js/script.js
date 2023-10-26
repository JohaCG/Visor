var imgVisor= document.querySelector("#visor");
var ArrayImagen =["Img0.gif","Img1.gif","Img2.gif","Img3.gif"];
var contador=0;

function Siguiente(){

    if(contador <=ArrayImagen.length -1){
        imgVisor.src="img/"+ArrayImagen[contador];
        contador++;
    }
  
}

function Anterior(){
    contador--;
    if(contador>=0){
        imgVisor.src="img/"+ArrayImagen[contador];     
    }
}