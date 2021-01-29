const altura=document.body.scrollHeight - window.innerheight;
const fondo=document.getElementById('fondo');

window.onscroll=()=>{
	const anchofondo=(window.pageYOffset/altura) * 900;
	if(anchofondo<=100){
		fondo..style.width=anchofondo + '%';
	}
}  /*TODO EL CODIGO ANTERIOR ES PARA HACER QUE APARESCA UNA IMAGEN MIENTRAS BAJAMOS EN LA PAGINA WEB*/