let correctas = 0; // Contador para respuestas correctas
let incorrectas = 0; // Contador para respuestas incorrectas

function pregunta4(){
	let ansText = document.getElementById('pregunta4').value;
	if(ansText  === 'b'){
		document.getElementById('result4').innerHTML = 'Respuesta Correcta!';
		correctas+=1;
	}else{
		document.getElementById('result4').innerHTML = 'Respuesta Incorrecta!';
		incorrectas+=1;
  }
console.info(correctas)}

function pregunta5(){
	let ansText = document.getElementById('pregunta5').value;
	if(ansText  === 'a'){
		document.getElementById('result5').innerHTML = 'Respuesta Correcta!';
		correctas+=1;
	}else{
		document.getElementById('result5').innerHTML = 'Respuesta Incorrecta!';
		incorrectas+=1;
  }
console.info(correctas)}

function pregunta6(){
	let ansText = document.getElementById('pregunta6').value;
	if(ansText  === 'b'){
		document.getElementById('result6').innerHTML = 'Respuesta Correcta!';
		correctas+=1;
	}else{
		document.getElementById('result6').innerHTML = 'Respuesta Incorrecta!';
		incorrectas+=1;
  }
  console.info(correctas);

document.getElementById('right-answers').innerHTML += correctas;
document.getElementById('wrong-answers').innerHTML += incorrectas;
}
