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
       output.innerHTML += "<li>"+ studente[key]+ "</li>";
    }
    // PARTE 2
    // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  Ricordatevi, è un array, quindi? for.
 
    var studenti=[

        {
        nome: 'Alessandro',
        congnome: "Veneziano",
        età : 20
        }

        {
        nome: 'Filippo',
        congnome: "Genovesi",
        età : 58
        }

        {
        nome: 'Pippo',
        congnome: "Baudo",
        età : 80
        }

    ]
    console.log(studenti); */

    //PARTE 3
    var output2 = document.getElementById("output2");
    //Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età. */
    var classe = {
        Prof:"Ottavio Fogliata" ,
        studenti: []  // array!
    }

    var newStudent = {}  // oggetto vuoto.

    //attraverso 3 prompt()

    newStudent.name = prompt("inserisci nome");
    newStudent.surName = prompt("inserisci cognome");
    newStudent.age = parseInt(prompt("inserisci età"));

    classe.studenti.push(newStudent);

    for(var key in newStudent){    
        output2.innerHTML += "<li>"+ newStudent[key]+ "</li>";
     }
})