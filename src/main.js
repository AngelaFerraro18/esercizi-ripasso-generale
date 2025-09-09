// esercizio 1
// Crea un nuovo array dove ogni prezzo è convertito in dollari (supponiamo 1€ = 1.1$).

let prezzi = [10, 20, 30, 40, 50];

const prezzoConvertito = prezzi.map(item => item * 1.1);
console.log('I prezzi convertiti sono:', prezzoConvertito);

//esercizio 2
//Crea un nuovo array contenente solo i numeri maggiori di 10.

let numeri = [5, 12, 8, 130, 44];

const numeriOverTen = numeri.filter(item => item > 10);
console.log('I numeri maggiori di 10 sono', numeriOverTen);

//esercizio 3
//Trova il primo studente con voto maggiore di 20.

let studenti = [
  { nome: "Luca", voto: 18 },
  { nome: "Anna", voto: 25 },
  { nome: "Marco", voto: 22 }
];

const votoStudente = studenti.find(item => item.voto > 20);
console.log('Lo studente con il voto maggiore di 20 è', votoStudente);

//esercizio 4
//Calcola il prodotto di tutti i numeri usando reduce.

let numeris = [1, 2, 3, 4, 5];

const prodotto = numeris.reduce((acc, curr) => acc * curr, 1);
console.log('Il prodotto totale è', prodotto);

//esercizio 5
//Stampa in console ogni nome con la scritta "Ciao, " davanti (es: "Ciao, Luca").

let nomi = ["Luca", "Anna", "Marco"];

nomi.forEach(item => console.log(`"Ciao, ${item}"`));

//esercizio 6
//Verifica se almeno un numero è maggiore di 8.

let numeriss = [3, 7, 2, 9];

const verifica = numeriss.some(item => item > 8);
console.log('Un numero è almeno maggiore di 8?', verifica);

//esercizio 7
//Verifica se tutti i voti sono maggiori o uguali a 18.

let voti = [18, 20, 25, 22];

const verificaVoti = voti.every(item => item >= 18);
console.log('I voti sono tutti maggiori o uguali a 18?', verificaVoti);

//esercizio 8
//Ordina i numeri in ordine crescente.

let numerisss = [40, 100, 1, 5, 25, 10];

const ordineNumeri = [...numerisss].sort((a, b) => a - b);
console.log(ordineNumeri);

//esercizio 9
//Ordina i nomi in ordine alfabetico corretto considerando gli accenti.

let nomis = ["Zara", "Anna", "Luca", "Éric"];

const ordineNomi = nomis.sort((a, b) => a.localeCompare(b));
console.log(ordineNomi);



