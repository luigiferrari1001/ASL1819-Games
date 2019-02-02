var bot;   //  id del bottone su cui mi trovo ora
var botPrec="";   // id del bottone su cui sono passato precedentemente
var bot2;   // id del bottone utile per controllo bordi indietro
var b;   // id di appoggio per botPrec
var d;   // id di appoggio per controllo diagonale
//var puntiTot = 10;
var onOff = true;   // dice se un bottone si può accendere o no
var ind = true;   // permette di spegnere i bottoni
var diag = false;   // dice se si è andati in diagonale
var back = new Array();   // array contenente per ogni bottone se può essere spento (per tornare indietro)
var a=0;
var r=0;
var op;   // per memorizzare opacity dei bottoni
var u=0;
var f=0;


for (var i=0; i<384; i++)
	back[i] = false;



function tornaIndietro (el_id){
	//alert (bot+"   "+botPrec+"   "+el_id);
	if (document.getElementById('286b').style.opacity=="0.5" || document.getElementById('286b').style.opacity=="0.6")
		return;
	if (diag == true)
		return;
	if (a > 0)
		return;
	if (el_id == bot2){
		//puntiTot--;
		//punteggio.innerHTML = "Il punteggio attuale &egrave di: " + puntiTot + " punti.";
		ind = true;
		bot2 = "0";
	}
	if (ind == false)
		return;
	
	//alert (back[(el_id.substr(0, el_id.length-1))-1]);
	if (back[(el_id.substr(0, el_id.length-1))-1] == true){
		document.getElementById(botPrec).style.opacity = "0.2";
		document.getElementById(el_id).style.opacity = "0.2";
		cambiaOpacityInd (el_id);
		back[(el_id.substr(0, el_id.length-1))-1] = false;
		back[(botPrec.substr(0, botPrec.length-1))-1] = false;
	}
	
	//if ((botPrec.substr(0, botPrec.length-1))==((el_id.substr(0, el_id.length-1))-24))
		//alert (bot+"   "+botPrec+"   "+el_id);
	// controllo bordi da alto a basso
	if (document.getElementById(botPrec).style.opacity=="0.2" && document.getElementById(el_id).style.opacity=="0.2" && (botPrec.substr(0, botPrec.length-1))==((el_id.substr(0, el_id.length-1))-24) && document.getElementById(el_id.substr(0, el_id.length-1)).style.borderTopWidth=="2px"){
		document.getElementById(el_id).style.opacity = "0.6";
		back[(el_id.substr(0, el_id.length-1))-1] = true;
		ind = false;
		bot2 = botPrec;
	}
	// controllo bordi da basso ad alto
	if (document.getElementById(botPrec).style.opacity=="0.2" && document.getElementById(el_id).style.opacity=="0.2" && ((botPrec.substr(0, botPrec.length-1))-24)==(el_id.substr(0, el_id.length-1)) && document.getElementById(botPrec.substr(0, botPrec.length-1)).style.borderTopWidth=="2px"){
		document.getElementById(el_id).style.opacity = "0.6";
		back[(el_id.substr(0, el_id.length-1))-1] = true;
		ind = false;
		bot2 = botPrec;
	}
	// controllo bordi da sinistra a destra
	if (document.getElementById(botPrec).style.opacity=="0.2" && document.getElementById(el_id).style.opacity=="0.2" && (botPrec.substr(0, botPrec.length-1))==((el_id.substr(0, el_id.length-1))-1) && document.getElementById(botPrec.substr(0, botPrec.length-1)).style.borderRightWidth=="2px"){
		document.getElementById(el_id).style.opacity = "0.6";
		back[(el_id.substr(0, el_id.length-1))-1] = true;
		ind = false;
		bot2 = botPrec;
	}
	// controllo bordi da destra a sinistra
	if (document.getElementById(botPrec).style.opacity=="0.2" && document.getElementById(el_id).style.opacity=="0.2" && ((botPrec.substr(0, botPrec.length-1))-1)==(el_id.substr(0, el_id.length-1)) && document.getElementById(el_id.substr(0, el_id.length-1)).style.borderRightWidth=="2px"){
		document.getElementById(el_id).style.opacity = "0.6";
		back[(el_id.substr(0, el_id.length-1))-1] = true;
		ind = false;
		bot2 = botPrec;
	}
}


// Per colorare solo il primo bottone.
function colBot1 (element_id){
	//alert (botPrec+"   "+bot);
	var k=0;
	for (var i=1; i<385; i++){
		if (document.getElementById(''+i+'b').style.opacity != "0.5" && document.getElementById(''+i+'b').style.opacity != "0.6"){
			k++;
		}
	}
	if (botPrec!="" && botPrec!="54b" && k==383)
		window.location.reload();
	document.getElementById(element_id).style.opacity = "0.6";
	if (f == 0)
		botPrec = element_id;
	f++;
}


// Per far apparire che il mouse è passato sopra un bottone.
function changeColor (element_id){
	//alert (botPrec+"   "+bot);
	if (document.getElementById('53b').style.opacity!="0.5" && document.getElementById('53b').style.opacity!="0.6")
		return;
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	if (document.getElementById('286b').style.opacity=="0.5" || document.getElementById('286b').style.opacity=="0.6"){
		if (u == 0){
			modal.style.display = "block";
			span.onclick = function() {
				modal.style.display = "none";
			}
		
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
		}
		u++;
		return;
	}
	if (ind == false)
		return;
	if (d == element_id){
		//alert ("qui");
		//puntiTot--;
		//punteggio.innerHTML = "Il punteggio attuale &egrave di: " + puntiTot + " punti.";
		diag = false;
		r++;
		d = "0";
	}
	
	if (diag == true)
		return;
	b = botPrec;
	if (element_id == botPrec){
		//puntiTot--;
		//punteggio.innerHTML = "Il punteggio attuale &egrave di: " + puntiTot + " punti.";
		onOff = true;
		document.getElementById(element_id).style.opacity = "0.6";
		a = 0;
	}
	if (onOff == false)
		return;
	
	
	//alert (document.getElementById(botPrec).style.opacity);
	op = document.getElementById(botPrec).style.opacity;
	
	
	document.getElementById(element_id).style.opacity = "0.6";
	back[(botPrec.substr(0, botPrec.length-1))-1] = true;
	//onOff[(element_id.substr(0, element_id.length-1))-1] = true;
	bot = element_id;
	contrDiagonale ();
}


function contrDiagonale (){
	var c = parseInt(botPrec.substr(0, botPrec.length-1));
	/*var c1 = parseInt(bot.substr(0, bot.length-1))+24;
	var c2 = parseInt(bot.substr(0, bot.length-1))-24;
	var c3 = parseInt(bot.substr(0, bot.length-1))+1;
	var c4 = parseInt(bot.substr(0, bot.length-1))-1;
	//alert (c + "   " + c1+"   "+c2+"   "+c3+"   "+c4);
	if (c!=c1 && c!=c2 && c!=c3 && c!=c4){
		alert("err");
		d = botPrec;
		diag = true;
		document.getElementById(bot).style.opacity="0.0";
	}*/
	
	if (diag==false && r==0){
		if (parseInt(bot.substr(0, bot.length-1)) == c+25){
			//alert ("ora si"+bot);
			diag = true;
			//alert (document.getElementById(bot).style.opacity);
			if (document.getElementById(bot).style.opacity=="0.5" || document.getElementById(bot).style.opacity=="0.6")
				document.getElementById(bot).style.opacity="0.0";
			if (back[(bot.substr(0, bot.length-1))-1] == true){
				document.getElementById(bot).style.opacity="0.6";
			}
			d = botPrec;
			return;
		} if (parseInt(bot.substr(0, bot.length-1)) == c+23){
			//alert ("ora si"+bot);
			diag = true;
			//alert (document.getElementById(bot).style.opacity);
			if (document.getElementById(bot).style.opacity=="0.5" || document.getElementById(bot).style.opacity=="0.6")
				document.getElementById(bot).style.opacity="0.0";
			if (back[(bot.substr(0, bot.length-1))-1] == true){
				document.getElementById(bot).style.opacity="0.6";
			}
			d = botPrec;
			return;
		} if (parseInt(bot.substr(0, bot.length-1)) == c-23){
			//alert ("ora si"+bot);
			diag = true;
			//alert (document.getElementById(bot).style.opacity);
			if (document.getElementById(bot).style.opacity=="0.5" || document.getElementById(bot).style.opacity=="0.6")
				document.getElementById(bot).style.opacity="0.0";
			if (back[(bot.substr(0, bot.length-1))-1] == true){
				document.getElementById(bot).style.opacity="0.6";
			}
			d = botPrec;
			return;
		} if (parseInt(bot.substr(0, bot.length-1)) == c-25){
			//alert ("ora si"+bot);
			diag = true;
			//alert (document.getElementById(bot).style.opacity);
			if (document.getElementById(bot).style.opacity=="0.5" || document.getElementById(bot).style.opacity=="0.6")
				document.getElementById(bot).style.opacity="0.0";
			if (back[(bot.substr(0, bot.length-1))-1] == true){
				document.getElementById(bot).style.opacity="0.6";
			}
			d = botPrec;
			return;
		}
	}
	
	
}


// Se si passa sopra i bottoni esterni al labirinto la pagina si ricarica.
function controlloEst (element_id){
	if (document.getElementById('53b').style.opacity!="0.5" && document.getElementById('53b').style.opacity!="0.6")
		return;
	var k=0;
	onOff = false;
	a++;
	for (var i=1; i<385; i++){
		if (document.getElementById(''+i+'b').style.opacity != "0.5" && document.getElementById(''+i+'b').style.opacity != "0.6"){
			k++;
		}
	}
	if (document.getElementById('53b').style.opacity=="0.5" || document.getElementById('53b').style.opacity=="0.6" && k==383)
		window.location.reload();
}


// Rende più trasparenti gli ultimi due bottoni su cui è passato il mouse.
function cambiaOpacity (){
	if (document.getElementById('286b').style.opacity=="0.5" || document.getElementById('286b').style.opacity=="0.6")
		return;
	if (onOff == false)
		return;
	if (ind == false)
		return;
	if (diag==true)
		return;
	document.getElementById (''+bot).style.opacity = "0.5";
	document.getElementById (''+botPrec).style.opacity = "0.5";
	for (var i=1; i<385; i++){
		if (document.getElementById (''+i+'b').id!=bot && document.getElementById (''+i+'b').id!=botPrec && document.getElementById (''+i+'b').style.opacity=="0.5")
			document.getElementById (''+i+'b').style.opacity = "0.6";
	}
}


// Rende bianchi i bottoni per tornare indietro.
function cambiaOpacityInd (el_id){
	if (diag==true)
		return;
	for (var i=1; i<385; i++){
		if (document.getElementById (''+i+'b').id!=bot && document.getElementById (''+i+'b').id!=botPrec && document.getElementById (''+i+'b').style.opacity=="0.2")
			document.getElementById (''+i+'b').style.opacity = "0.0";
	}
	if (r != 0){
		r = 0;
		document.getElementById(botPrec).style.opacity = "0.0";
		//alert ("BBBBBBB=   "+botPrec+"   "+document.getElementById(botPrec).style.opacity);
		if (op=="0.5" || op=="0.6"){
			document.getElementById(botPrec).style.opacity = "0.6";
			//alert ("AAAAAAAAA");
		}
	}
}


// Controlla bordo destro e sinistro di un bottone.
function cBordiLato (elTab_id, el_id, el_id2){
	var el1 = document.getElementById(elTab_id);
	var el2 = document.getElementById(el_id);
	var el3 = document.getElementById(el_id2);
	if (el1.style.borderRightWidth=="2px" && el2.style.opacity=="0.5" && el3.style.opacity=="0.5"){
		//alert ("passo da controllo  "+b);
		onOff = false;
		a++;
		document.getElementById(bot).style.opacity = "0.0";
		botPrec = b;
	} else {
		if (onOff == false)
			return;
		
		botPrec = el_id;
	}
	//document.getElementById(el_id).style.opacity=="0.6";
}


// Controlla bordo alto e basso di un bottone.
function cBordiAlBas (elTab_id, el_id, el_id2){
	var el1 = document.getElementById(elTab_id);
	var el2 = document.getElementById(el_id);
	var el3 = document.getElementById(el_id2);
	if (el1.style.borderTopWidth=="2px" && el2.style.opacity=="0.5" && el3.style.opacity=="0.5"){
		//alert ("passo da controllo  "+b);
		onOff = false;
		a++;
		document.getElementById(bot).style.opacity = "0.0";
		botPrec = b;
	} else {
		if (onOff == false)
			return;
		
		botPrec = el_id;
	}
	//document.getElementById(el_id).style.opacity=="0.6";
}


/* Controlla i bordi di tutti i bottoni del labirinto eccetto
quelli della prima riga, quelli dell'ultima riga, quelli
all'estrema destra e quelli all'estrema sinistra del labirinto.*/
function cBordiTot (elTab_id, elTab_left, elTab_down, el_id, el_left, el_right, el_up, el_down){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiLato (elTab_id, el_id, el_right);   // destro
	cBordiAlBas (elTab_id, el_id, el_up);   // alto
	cBordiLato (elTab_left, el_id, el_left);   // sinistro
	cBordiAlBas (elTab_down, el_id, el_down);   // basso
	//botPrec = el_id;
}


// Controlla i bordi dei bottoni della prima riga del labirinto.
function cBordiRiga1 (elTab_id, elTab_left, elTab_down, el_id, el_left, el_right, el_down){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiLato (elTab_id, el_id, el_right);   // destro
	cBordiLato (elTab_left, el_id, el_left);   // sinistro
	cBordiAlBas (elTab_down, el_id, el_down);   // basso
	//botPrec = el_id;
}


// Controlla i bordi dei bottoni dell'ultima riga del labirinto.
function cBordiRigaU (elTab_id, elTab_left, el_id, el_left, el_right, el_up){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiLato (elTab_id, el_id, el_right);   // destro
	cBordiAlBas (elTab_id, el_id, el_up);   // alto
	cBordiLato (elTab_left, el_id, el_left);   // sinistro
	//botPrec = el_id;
}


// Controlla i bordi dei bottoni all'estrema sinistra del labirinto.
function cBordiL (elTab_id, elTab_down, el_id, el_right, el_up, el_down){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiLato (elTab_id, el_id, el_right);   // destro
	cBordiAlBas (elTab_id, el_id, el_up);   // alto
	cBordiAlBas (elTab_down, el_id, el_down);   // basso
	//botPrec = el_id;
}


// Controlla i bordi dei bottoni all'estrema destra del labirinto.
function cBordiR (elTab_id, elTab_left, elTab_down, el_id, el_left, el_up, el_down){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiAlBas (elTab_id, el_id, el_up);   // alto
	cBordiLato (elTab_left, el_id, el_left);   // sinistro
	cBordiAlBas (elTab_down, el_id, el_down);   // basso
	//botPrec = el_id;
}


// Controlla i bordi del bottone in alto a sinistra del labirinto.
function cBordiAS (elTab_id, elTab_down, el_id, el_right, el_down){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiLato (elTab_id, el_id, el_right);   // destro
	cBordiAlBas (elTab_down, el_id, el_down);   // basso
	//botPrec = el_id;
}


// Controlla i bordi del bottone in alto a destra del labirinto.
function cBordiAD (elTab_left, elTab_down, el_id, el_left, el_down){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiLato (elTab_left, el_id, el_left);   // sinistro
	cBordiAlBas (elTab_down, el_id, el_down);   // basso
	//botPrec = el_id;
}


// Controlla i bordi del bottone in basso a sinistra del labirinto.
function cBordiBS (elTab_id, el_id, el_right, el_up){
	cambiaOpacity ();
	tornaIndietro (el_id);
	cBordiLato (elTab_id, el_id, el_right);   // destro
	cBordiAlBas (elTab_id, el_id, el_up);   // alto
	//botPrec = el_id;
}