var c = document.querySelector('canvas');
var ctx = c.getContext("2d");

//===================================================
function wherept(x,y) {
	var xmin = 50;
	var xmax = 550;
	var ymin = 50;
	var ymax = 200;
	
	if ((x > xmax) && (y>ymax)){
		return  5;
	}
	else if ((x > xmax) && (y < ymin)) {
		return 3;
	}
	else if (x > xmax) {
		return  4;
	}
	else if ((x < xmin) && (y > ymax)) {
		return  7;
	}
	else if ((x < xmin) && (y < ymin)) {
		return 1;
	}
	else if (x < xmin) {
		return 8;
	}
	else if (y > ymax) {
		return 6;
	}
	else if (y < ymin) {
		return 2;
	}
	else {
		return  0;
	}
}
// -----

function pos(A,B){
	if ((A == 0 ) && (B == 0)){
		let color = '#74B72e';
		let message = "Os dois pontos estão dentro";
		let statusA = 0;
		let statusB = 0;
		return {color,message, statusA,statusB};
	}
	else if  (B == 0) {
		let color = '#FFA500';
		let message = "O ponto A está fora";
		let statusA = 1;
		let statusB = 0;
		return {color,message, statusA,statusB};
	}
	else if  (A == 0) {
		let color = '#FFA500';
		let message = "O ponto B está fora";
		let statusA = 0;
		let statusB = 1;
		return {color,message, statusA,statusB};
	}
	else{
		let color = '#B92E2A';
		let message = "Os dois pontos estão fora";
		let statusA = 1;
		let statusB = 1;
		return {color,message,statusA,statusB};
	}
}
// -----

function cutA(x1,y1,x2,y2,A,statusA){
	// variáveis definidas dentro da função
	var m = (y2-y1)/(x2-x1);
	var xmin = 50;
	var xmax = 550;
	var ymin = 50;
	var ymax = 200;
	
	
	if (statusA == 1){
			//acima
		if ((A >=1) && (A<=3)){
			x5 = x2 + (ymin - y2)/m;
			if ((xmin <= x5) && (xmax >= x5)){
				let x3 = x5;
				let y3 = ymin;
				return {x3,y3};
			}
		}
			//direita
		if ((A >=3) && (A<=5)){
			y5 = y2 + (xmax - x2)*m;
			if ((ymin <= y5) && (ymax >= y5)){
				let x3 = xmax;
				let y3 = y5;
				return {x3,y3};
			}
			
		}
			//abaixo
		if ((A >=5) && (A<=7)){
			x5 = x2 + (ymax - y2)/m;
			if ((xmin <= x5) && (xmax >= x5)){
				let x3 = x5;
				let y3 = ymax;
				return {x3,y3};
			}
			
		}
			//esquerda
		if ((A ==7) ||(A == 8) || (A==1)){
			y5 = y2 + (xmin - x2)*m;
			if ((ymin <= y5) && (ymax >= y5)){
				let x3 = xmin;
				let y3 = y5;
				return {x3,y3};
			}
		}			
	}
	else {
		let x3 = x1;
		let y3 = y1;
		return {x3,y3};
	}
}
// -----------

function cutB(x1,y1,x2,y2,B,statusB){
	
	// variáveis definidas dentro da função
	var m = (y2-y1)/(x2-x1);
	var xmin = 50;
	var xmax = 550;
	var ymin = 50;
	var ymax = 200;	
	
	
	if (statusB == 1){
			//acima
		if ((B >=1) && (B<=3)){
			x5 = x1 + (ymin - y1)/m;
			if ((xmin <= x5) && (xmax >= x5)){
				let x4 = x5;
				let y4 = ymin;
				return {x4,y4};
			}
		}
			//direita
		if ((B >=3) && (B<=5)){
			y5 = y1 + (xmax - x1)*m;
			if ((ymin <= y5) && (ymax >= y5)){
				let x4 = xmax;
				let y4 = y5;
				return {x4,y4};
			}
			
		}
			//abaixo
		if ((B >=5) && (B<=7)){
			x5 = x1 + (ymax - y1)/m;
			if ((xmin <= x5) && (xmax >= x5)){
				let x4 = x5;
				let y4 = ymax;
				return {x4,y4};
			}
			
		}
			//esquerda
		if ((B ==7) ||(B == 8) || (B==1)){
			y5 = y1 + (xmin - x1)*m;
			if ((ymin <= y5) && (ymax >= y5)){
				let x4 = xmin;
				let y4 = y5;
				return {x4,y4};
			}
			
		}
	}
	else {
		let x4 = x2;
		let y4 = y2;
		return {x4,y4};
	}
}
//---------

function newcol(statusA,statusB) {
	if ((statusA ==1) && (statusB ==1)){
		return '#FFA500';
	}
	if (statusB ==1){
		return '#FFA500';
	}
	else {
		return '#74B72e';
	}
}

//Função disponível em https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing?rq=1
function clearCanvas() {
  ctx.save();
  ctx.globalCompositeOperation = 'copy';
  ctx.strokeStyle = 'transparent';
  ctx.beginPath();
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.restore();
}



//===============================================
setInterval(function(){

// Define as coordenadas dos pontos A e B
let x1 = Math.floor((Math.random()*600)+1);
let x2 = Math.floor((Math.random()*600)+1);
let y1 = Math.floor((Math.random()*250)+5);
let y2 = Math.floor((Math.random()*250)+5);

// Desenha o retângulo 
ctx.beginPath();
ctx.rect(50,50, 500,150);
ctx.closePath();
ctx.strokeStyle = '#000000'
ctx.stroke();


// Desenha as legendas para os pontos A e B
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.closePath();
ctx.strokeStyle = '#4169e1';
ctx.stroke();
ctx.font = "12px Arial";
ctx.fillText("A", x1 - 1, y1-5);
ctx.font = "12px Arial";
ctx.fillText("B", x2-1, y2 - 5);


// Calcula a posição do ponto A
var whrA = wherept(x1,y1);

ctx.font = "12px Arial";
ctx.fillText("A: ", 0, 220);
ctx.fillText(`${whrA}`, 15, 220);

// Calcula a posição do ponto B
var whrB = wherept(x2,y2);

ctx.font = "12px Arial";
ctx.fillText("B: ", 0, 240);
ctx.fillText(`${whrB}`, 15, 240);




// Descreve a situação do segmento AB
var posAB = pos(whrA,whrB);
var message = posAB.message;
var color = posAB.color;
var statusA = posAB.statusA;
var statusB = posAB.statusB;
	
	
// Faz o clipping em A
try{
var cut1 = cutA(x1,y1,x2,y2,whrA,statusA);
var x3 = cut1.x3;
var y3 = cut1.y3;
}
catch(err){

}
	
// Determina a cor depois do clipping A

var newcolor = newcol(statusA,statusB); 


// Faz o clipping em B
try{
var cut2 = cutB(x1,y1,x2,y2,whrB,statusB);
var x4 = cut2.x4;
var y4 = cut2.y4;
}
catch(err){

}

	
// Cria um sistema de cores para definir quantos "cortes" deve-se fazer na reta	
	setTimeout(function(){
	ctx.font = "12px Arial";
	ctx.fillText(`${message}`, 0, 260);
	ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.lineWidth = 2;
		ctx.closePath();
		ctx.strokeStyle = color;
	ctx.stroke();
	},1000);
	
	
// Faz o clipping em A se esse ponto estiver fora do retângulo	
	setTimeout(function(){
		if (statusA ==1) {
		try{
			// Para "apagar" uma linha
			// Solução disponível em https://stackoverflow.com/questions/2571899/javascript-jquery-remove-shape-path-from-canvas
		ctx.font = "12px Arial";
		ctx.save();
		ctx.globalCompositeOperation = "destination-out";
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	
		ctx.beginPath();
		ctx.moveTo(x3, y3);
		ctx.lineTo(x2, y2);
		ctx.lineWidth = 2;
		ctx.closePath();
		ctx.strokeStyle = newcolor ;
		ctx.stroke();
		}
		//Erro ocorre quando não existe x3 e y3, ou seja, que a intersecção da reta com o lado do retângulo está fora deste
		catch (err){
		ctx.save();
		ctx.globalCompositeOperation = "destination-out";
		ctx.beginPath();
		ctx.moveTo(x1, y2);
		ctx.lineTo(x2, y2);
		ctx.lineWidth = 2;
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
		}
		
		
			ctx.font = "12px Arial";
			ctx.fillText("Fazendo o clipping no ponto A", 0, 280);
		}
	},2000);
	
// Faz o clipping em B se esse ponto estiver fora do retângulo		
	setTimeout (function() {
	if (statusB == 1){
		try{
		ctx.save();
		ctx.globalCompositeOperation = "destination-out";
		ctx.moveTo(x3, y3);
		ctx.lineTo(x2, y2);
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();
		ctx.restore();	
	
	ctx.beginPath();
		ctx.moveTo(x3, y3);
		ctx.lineTo(x4, y4);
		ctx.lineWidth = 2;
		ctx.closePath();
		ctx.strokeStyle = '#74B72e';
		ctx.stroke();
		}
//Erro ocorre quando não existe x3 e y3, ou seja, que a intersecção da reta com o lado do retângulo está fora deste
		catch (err){
		ctx.save();
		ctx.globalCompositeOperation = "destination-out";
		ctx.beginPath();
		ctx.moveTo(x1, y2);
		ctx.lineTo(x2, y2);
		ctx.lineWidth = 2;
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
		}
		
		ctx.font = "12px Arial";
		ctx.fillText("Fazendo o clipping no ponto B", 0, 300);
	}
	},3000);
	
	setTimeout (function (){
		clearCanvas();
	},5000);
	
	
	
},5500);

