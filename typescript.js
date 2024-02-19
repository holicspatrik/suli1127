function primszame(szam) {
    var osztodb = 0;
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztodb++;
        }
    }
    return osztodb == 2;
}
function tartalmazeszamot(szoveg) {
    var szamkarakterek = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var eredmeny = false;
    for (var i = 0; i < szoveg.length; i++) {
        for (var j = 0; j < szamkarakterek.length; j++) {
            if (szamkarakterek[j] == szoveg[i]) {
                eredmeny = true;
                break;
            }
        }
    }
    return eredmeny;
}
function nevszamlalo(nevek) {
    var szotar = new Map();
    for (var i = 0; i < nevek.length; i++) {
        var vizsgaltnev = nevek[i];
        if (szotar.has(vizsgaltnev)) {
            var db = szotar.get(vizsgaltnev);
            db++;
            szotar.set(vizsgaltnev, db);
        }
        else {
            szotar.set(vizsgaltnev, 1);
        }
    }
    return szotar;
}
function szindb(szinek) {
    var halmaz = new Set();
    for (var i = 0; i < szinek.length; i++) {
        halmaz.add(szinek[i]);
    }
    return halmaz;
}
console.log(primszame(2));
console.log(primszame(7));
console.log(primszame(12));
console.log(primszame(19));
console.log(tartalmazeszamot("asd"));
console.log(tartalmazeszamot("asd12"));
console.log(tartalmazeszamot("asd5665"));
console.log(tartalmazeszamot("sziv"));
console.log(nevszamlalo(["Laci", "Peti", "Laci", "Jani", "Aranka", "Aranka", "Sándor", "Juszti"]));
console.log(szindb(["kék", "kék", "lila", "fekete", "türkiz", "narancs", "piros", "lila"]));
