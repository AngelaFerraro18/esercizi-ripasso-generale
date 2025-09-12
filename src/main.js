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

//Calcola la somma dei numeri da 1 a 100.
let somma = 0;
for (let i = 1; i <= 100; i++) {

  somma += i;
}

console.log('la somma dei numeri tra 1 e 100 è', somma);

//Con un ciclo for, stampa solo i numeri maggiori di 5.

let num = [3, 7, 2, 9, 5];


for (let i = 0; i < num.length; i++) {

  if (num[i] > 5) {
    console.log('i numeri > di 5 sono:', num[i]);
  }
}

//stampa solo le parole con più di 5 lettere
let parole = ["cane", "gatto", "elefante", "orso", "ippopotamo"];


for (let i = 1; i < parole.length; i++) {

  if (parole[i].length > 5) {
    console.log(parole[i]);
  }

}

//Crea una funzione filtroPari che:
//prende un array di numeri,
//restituisce un nuovo array contenente solo i numeri pari.
//(Non puoi usare filter.)

function filtroPari(arr) {

  let filtro = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      filtro.push(arr[i]);
    }

  }

  return filtro;
}


console.log(filtroPari([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]


//Crea una funzione trovaParolaLunga che:
//prende un array di stringhe,
//restituisce la prima parola che ha più di 5 lettere.
//(Non puoi usare find.)

function trovaParolaLunga(arr) {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].length > 5) {
      return arr[i];
    }
  }
  return null;
}

console.log(trovaParolaLunga(["sole", "luna", "stella", "galassia"]));
// "stella"
