/* PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
PARTE 2
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.
PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età. */
document.addEventListener("DOMContentLoaded", function() {
    // PARTE 1
    var output = document.getElementById("output");
    //Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
    
    var studente = {

        nome: 'Alessandro',
        congnome: "Veneziano",
        età : 20

    }
    for(var key in studente){    
       output.innerHTML += "<li>"+ key + " : " + studente[key]+ "</li>";
    }
    // PARTE 2
    var output1 = document.getElementById("output1");
    // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.
 
     var studenti=[

        {
        nome: 'Alessandro',
        congnome: "Veneziano",
        età : 20
        },

        {
        nome: 'Pippo',
        congnome: "Baudo",
        età : 80
        }

    ];
    console.log(studenti); 

    for( var x =0 ; x < studenti.length; x++){
        output1.innerHTML+=(studenti[x].nome,studenti[x].congnome);
    }



    //PARTE 3
    var output2 = document.getElementById("output2");
    function firstCaps(a){
        var result = a[0].toUpperCase()+ a.slice(1);
        return result
    }
    //Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età. */
    var classe = {
        Prof:"Ottavio Fogliata" ,
        studenti: []  // array!
    }

    var newStudent = {}  // oggetto vuoto.

    //attraverso 3 prompt()

    newStudent.name =firstCaps(prompt("inserisci nome"));
    newStudent.surName =firstCaps(prompt("inserisci cognome"));
    newStudent.age = parseInt(prompt("inserisci età"));

    classe.studenti.push(newStudent);

    for(var key in newStudent){    
        output2.innerHTML += "<li>"+ key + " : " +  newStudent[key]+ "</li>";
     }
})