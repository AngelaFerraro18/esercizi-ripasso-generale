// esercizio 1
// Filtra i prodotti disponibili.
// Trasforma il prezzo in dollari (1€ = 1.1$).
// Stampa un nuovo array solo con nome e prezzo in dollari.

let prodotti = [
    { nome: "Maglietta", prezzo: 15, disponibilità: true },
    { nome: "Pantaloni", prezzo: 35, disponibilità: false },
    { nome: "Cappello", prezzo: 20, disponibilità: true },
    { nome: "Giacca", prezzo: 50, disponibilità: true }
];

const disponibili = prodotti.filter(p => p.disponibilità === true);
console.log('I prodotti disponibili sono', disponibili);

const nuoviProdotti = disponibili.map(p => {
    return {
        nome: p.nome,
        prezzo: (p.prezzo * 1.1).toFixed(2)
    }
}
)

console.log('i nuovi prodotti sono:', nuoviProdotti);

//esercizio 2
/* Filtra gli studenti con voto maggiore di 20.
Crea un nuovo array con solo i nomi di questi studenti.
Ordina i nomi in ordine alfabetico. */

let studenti = [
    { nome: "Luca", voto: 18 },
    { nome: "Anna", voto: 25 },
    { nome: "Zacinto", voto: 22 },
    { nome: "Sara", voto: 28 }
];


const studentFilter = studenti.filter(stu => stu.voto > 20);
const nomiStudenti = studentFilter.map(stu => stu.nome);
console.log(nomiStudenti);
const sortedStudent = [...nomiStudenti].sort((a, b) => a.localeCompare(b));
console.log(sortedStudent);


//esercizio 3
/* Seleziona solo i numeri pari.
Calcola la somma di questi numeri usando reduce.
Stampa il risultato finale. */

let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNum = numeri.filter(num => num % 2 === 0);
console.log(filterNum);

const somma = filterNum.reduce((acc, curr) => acc + curr, 0);
console.log(somma);


//esercizio 4
/* 
Controlla se tutte le parole hanno almeno 4 lettere.
Filtra le parole che iniziano con "a".
Ordina alfabeticamente le parole filtrate.
*/

let parole = ["banana", "mela", "arancia", "kiwi", "anguria"];

const lunghezza = parole.every(pa => pa.length >= 4);
console.log('Le parole sono tutte lunghe 4?', lunghezza);

const iniziale = parole.filter(pa => pa.charAt(0) === 'a');
console.log('Le parole che iniziano per a sono:', iniziale);

const ordinamento = [...iniziale].sort((a, b) => a.localeCompare(b));
console.log(ordinamento);


//esercizio 5
/* Verifica se almeno un utente è minorenne.
Filtra solo gli utenti maggiorenni.
Crea un array con solo i nomi degli utenti maggiorenni, ordinati alfabeticamente. */

let utenti = [
    { nome: "Luca", età: 25 },
    { nome: "Anna", età: 30 },
    { nome: "Marco", età: 20 },
    { nome: "Sara", età: 17 }
];


const minorenne = utenti.some(u => u.età < 18);
console.log('ci sono minorenni?', minorenne);

const maggiorenni = utenti.filter(u => u.età >= 18);
console.log('i maggiorenni sono:', maggiorenni);

const nomiMagg = maggiorenni.map(m => m.nome);
const ordineNomi = [...nomiMagg].sort((a, b) => a.localeCompare(b));
console.log(ordineNomi);