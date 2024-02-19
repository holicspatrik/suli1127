function primszame(szam:number):Boolean{

    var osztodb:number = 0;


    for(var i:number = 1; i <= szam; i++ ){

        if(szam % i == 0){
            osztodb++;
        }
    }

    return osztodb == 2



}

  


function tartalmazeszamot(szoveg:string):boolean{

var szamkarakterek: string[] = ["0","1","2","3","4","5","6","7","8","9"];
var eredmeny: boolean = false;


for(var i:number = 0; i < szoveg.length; i++){


    for(var j:number = 0; j < szamkarakterek.length; j++){


        if(szamkarakterek[j] == szoveg[i]){

            eredmeny = true;
            break
        }
    }



}

return eredmeny;


}




function nevszamlalo(nevek: string[]): Map<string,number>{

    var szotar:Map<string, number> = new Map();


    for(var i:number = 0; i < nevek.length; i++){

        var vizsgaltnev:string = nevek[i]

        if(szotar.has(vizsgaltnev)){

            var db:any = szotar.get(vizsgaltnev)
            db++;
            szotar.set(vizsgaltnev, db)
        }


        else{

            szotar.set(vizsgaltnev, 1)
        }
        
    }


    return szotar;

}



function szindb(szinek:string[]):Set<string>{

    var halmaz:Set<string> = new Set();


    for(var i:number = 0; i < szinek.length; i++){

        halmaz.add(szinek[i])
    }


    return halmaz;



}


interface Auto{

    gyarto:string;
    tipus:string;
    ccm:number;
}


function AutoStat(autok:Auto[]):Map<string, Auto[]>{

    var szotar:Map<string, Auto[]> = new Map();


    for(var i:number = 0; i < autok.length; i++){

        var aktkulcs:string = autok[i].gyarto;


        if(szotar.has(aktkulcs)){

            var akttomb:any = szotar.get(aktkulcs)
            akttomb.push(autok[i]);
            szotar.set(aktkulcs, akttomb);


        }


        else{
            var ujtomb:Auto[] = [autok[i]]
            szotar.set(aktkulcs, ujtomb)
        }
    }

    return szotar;
}






    







console.log(primszame(2))
console.log(primszame(7))
console.log(primszame(12))
console.log(primszame(19))




console.log(tartalmazeszamot("asd"));
console.log(tartalmazeszamot("asd12"));
console.log(tartalmazeszamot("asd5665"));
console.log(tartalmazeszamot("sziv"));


console.log(nevszamlalo(["Laci","Peti","Laci","Jani","Aranka","Aranka","Sándor","Juszti" ]))

console.log(szindb(["kék","kék","lila","fekete","türkiz","narancs","piros","lila"]))


