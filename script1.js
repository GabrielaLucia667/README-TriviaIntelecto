let correctas = 0; // Contador para respuestas correctas
let incorrectas = 0; // Contador para respuestas incorrectas

function pregunta1(){
	let ansText = document.getElementById('pregunta1').value;
	if(ansText  === 'b'){
		document.getElementById('result1').innerHTML = 'Respuesta Correcta!';
		correctas+=1;
	}else{
		document.getElementById('result1').innerHTML = 'Respuesta Incorrecta!';
		incorrectas+=1;
	}
console.info(correctas)}

function pregunta2(){
	let ansText = document.getElementById('pregunta2').value;
	if(ansText  === 'a'){
		document.getElementById('result2').innerHTML = 'Respuesta Correcta!';
		correctas+=1;
	}else{
		document.getElementById('result2').innerHTML = 'Respuesta Incorrecta!';
		incorrectas+=1;
	}
console.info(correctas)}

function pregunta3(){
	let ansText = document.getElementById('pregunta3').value;
	if(ansText  === 'c'){
		document.getElementById('result3').innerHTML = 'Respuesta Correcta!';
		correctas+=1;
	}else{
		document.getElementById('result3').innerHTML = 'Respuesta Incorrecta!';
		incorrectas+=1;
	}
console.info(correctas);
document.getElementById('right-answers').innerHTML += correctas;
document.getElementById('wrong-answers').innerHTML += incorrectas;
}
