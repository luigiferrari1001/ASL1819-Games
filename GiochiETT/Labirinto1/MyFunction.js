var bordi, testa = 98;
var celle;

class Cella {
    constructor(bordo) {
        bordi = this.setBordi(bordo);

        this.nord = bordi[0];
        this.est = bordi[1];
        this.sud = bordi[2];
        this.ovest = bordi[3];
    }
    
    setBordi(bordi) {
        switch(bordi) {
            case "O":
                return [false, false, false, true];
            case "S":
                return [false, false, true, false];
            case "SO": ;
            case "OS":
                return [false, false, true, true];
            case "E":
                return [false, true, false, false];
            case "EO": ;
            case "OE":
                return [false, true, false, true];
            case "ES": ;
            case "SE":
                return [false, true, true, false];
            case "ESO": ;
            case "EOS": ;
            case "OES": ;
            case "OSE": ;
            case "SOE": ;
            case "SEO":
                return [false, true, true, true];
            case "N":
                return [true, false, false, false];
            case "NO": ;
            case "ON":
                return [true, false, false, true];
            case "NS": ; 
            case "SN":
                return [true, false, true, false];
            case "NSO": ;
            case "NOS": ; 
            case "ONS": ; 
            case "OSN": ;
            case "SON": ;
            case "SNO":
                return [true, false, true, true];
            case "NE": ;
            case "EN":
                return [true, true, false, false];
            case "NEO": ; 
            case "NOE": ;
            case "ONE": ;
            case "OEN": ;
            case "EON": ;
            case "ENO":
                return [true, true, false, true];
            case "NES": ;
            case "NSE": ;
            case "SNE": ;
            case "SEN": ;
            case "ESN": ;
            case "ENS":
                return [true, true, true, false];
            case "":
                return [false, false, false, false];
            case "TUTTO":
                return [true,true,true,true];
        }
    }

}

function drawer(maze) {
    loc = document.getElementById('mazeLocation');
    var i = 0, counter = 0;

    document.getElementById('ppp').innerHTML += "<div id='mazeLocation' class='row'>";
    for (i = 0; i < maze.length; i++)
        for (j = 0; j < maze[i].length; j++) {
            if(((i == 0 || i == 1 || i == 2 || i == 3) && ( j == 1 || j == 2 || j == 0 || j == 3)) || ((i == 12 || i == 13 || i == 14 || i == 15) && (j == 20 || j == 21 || j == 22 || j == 23))){
                document.getElementById('mazeLocation').innerHTML += "<div id='" + (counter) + "' class='divTrasparenti' style='height: 3em; width: 4.1%; border-top: " + (maze[i][j].nord == true ? '1px solid black;' : '0;') + " border-right: " + (maze[i][j].est == true ? '1px solid black;' : '0;') + " border-bottom: " + (maze[i][j].sud == true ? '1px solid black;' : '0;') + " border-left: " + (maze[i][j].ovest == true ? '1px solid black;' : '0;') + "'  onmouseover='over("+(counter++)+");'></div>";
            }else{
                document.getElementById('mazeLocation').innerHTML += "<div id='" + (counter) + "' style='height: 3em; width: 4.1%; background-color: white; border-top: " + (maze[i][j].nord == true ? '1px solid black;' : '0;') + " border-right: " + (maze[i][j].est == true ? '1px solid black;' : '0;') + " border-bottom: " + (maze[i][j].sud == true ? '1px solid black;' : '0;') + " border-left: " + (maze[i][j].ovest == true ? '1px solid black;' : '0;') + "' ontouchmove='over("+(counter)+");' onmouseover='over("+(counter++)+");'></div>";
            }
            
        }
    document.getElementById('mazeLocation').innerHTML += "<img class='imgInizio'>";
    document.getElementById('mazeLocation').innerHTML += "<img class='imgFine'>";
    document.getElementById('ppp').innerHTML += "</div>";

    document.getElementById('98').style.backgroundColor = 'lightgreen';
    copiaCelle(maze);
    
    return true;
}

function copiaCelle(celleCopia){
    celle = celleCopia;
}

function over(obj) {
    if (testa == 286 || obj == 74 || obj == 310)
        return;
    xOver = obj % 24;
    yOver = parseInt(obj / 24);
    xTesta = testa % 24;
    yTesta = parseInt(testa / 24);

    if(xOver == xTesta && yOver == (yTesta + 1) && !celle[yTesta][xTesta].sud || xOver == xTesta && yOver == (yTesta - 1) && !celle[yTesta][xTesta].nord || xOver == (xTesta + 1) && yOver == yTesta && !celle[yTesta][xTesta].est || xOver == (xTesta - 1) && yOver == yTesta && !celle[yTesta][xTesta].ovest) {
        
        if(document.getElementById(obj).style.backgroundColor == 'lightblue'){
            document.getElementById(testa).style.backgroundColor = 'white';
        }else{
            document.getElementById(obj).style.backgroundColor = 'lightgreen';
            document.getElementById(testa).style.backgroundColor = 'lightblue';
        }
       
        testa=obj;

        document.getElementById(testa).style.backgroundColor = 'lightgreen';

        if(testa==286)
            alert("Fre hai vinto");
    }
}