var celle;
var x=-1,y=-1;

class Cella{
    
    /*
        Tipo - b = cella normale  n = cella nera  a = cella azzurra
        Contenuto - la lettera corretta, in caso di cella nera inserire ""
        Numero - il numero che identifica l'inizio della parola, dove non presente inserire ""
    */
    constructor (tipo,contenuto,numero){
        this.tipo=tipo;
        this.contenuto=contenuto;
        this.numero=numero;
        if(tipo=="n")
            this.isGiusto=true
        else     
            this.isGiusto=false;
    }
}

function copiaCelle(celleCopia){
    celle=celleCopia;
}


function drawer() {
    

    var i,j;
    
    
    for (i = 0; i < celle.length; i++){
        document.getElementById('game').innerHTML+="<div id=\"riga"+i+"\" class=\"row justify-content-center\">";
        for (j = 0; j < celle[i].length; j++) {
            
            if(celle[i][j].tipo=='b')
                document.getElementById('riga'+i).innerHTML += "<div id=\""+i+"-"+j+"\" class=\"cella\" onclick=\"set("+i+","+j+")\"><p class=\"num\">"+celle[i][j].numero+"</p><bdi id=\"val"+i+"-"+j+"\"></bdi></div>";
            
            if(celle[i][j].tipo=='a')
                document.getElementById('riga'+i).innerHTML += "<div id=\""+i+"-"+j+"\" class=\"cella azzurra\" onclick=\"set("+i+","+j+")\"><p class=\"num\">"+celle[i][j].numero+"</p><bdi id=\"val"+i+"-"+j+"\"></bdi></div>";
            
            if(celle[i][j].tipo=='n')
                document.getElementById('riga'+i).innerHTML += "<div id=\""+i+"-"+j+"\" class=\"cella nera\"></div>";
            
            if(i==0)
                document.getElementById(i+"-"+j).classList.add("top");
            if(i==celle.length-1)
                document.getElementById(i+"-"+j).classList.add("bottom");
            if(j==0)
                document.getElementById(i+"-"+j).classList.add("left");
            if(j==celle[i].length-1)
                document.getElementById(i+"-"+j).classList.add("right");
            
           
            
        }
        document.getElementById('game').innerHTML+="</div>";
    }
    
    return true;
}

function set(inputX,inputY){
    
    if(x!=-1 && y!=-1)
        document.getElementById(x+"-"+y).classList.remove("selected");
       
    x=inputX;
    y=inputY;
    document.getElementById(x+"-"+y).classList.add("selected");
}

function send(value){
    if(x==-1 || y==-1)
        return;
    document.getElementById("val"+x+"-"+y).innerHTML=value;
    if(celle[x][y].contenuto==value)
        celle[x][y].isGiusto=true;
    else
        celle[x][y].isGiusto=false;
    document.getElementById(x+"-"+y).classList.remove("selected");
    x=-1;
    y=-1;
    
    if(check())
        alert("Hai vinto!");
}

function check(){
    var i,j;
    for(i=0;i<celle.length;i++)
        for(j=0;j<celle[i].length;j++)
            if(!celle[i][j].isGiusto)
                return false;    
    return true;
}

