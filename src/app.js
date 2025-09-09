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




const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];


//snack 1 
/*  Crea un array (longBooks) con i libri che hanno più di 300 pagine;
Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
Stampa in console ogni titolo nella console. */


const longBooks = books.filter(b => b.pages > 300);
console.log(longBooks);

const longBooksTitles = longBooks.map(b => b.title);
console.log(longBooksTitles);


//snack 2
/* Creare un array (availableBooks) che contiene tutti i libri disponibili.
Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi). */

const availableBooks = books.filter(b => b.available === true);
console.log(availableBooks);

const discountedBooks = availableBooks.map(b => {
    const discount = (parseFloat(b.price) * 20) / 100;
    const newPrice = (parseFloat(b.price)) - discount;

    return {
        ...b,
        price: parseFloat(newPrice.toFixed(2))
    }

})

console.log(discountedBooks);


const fullPricedBook = discountedBooks.find(b => b.price % 1 === 0);
console.log(fullPricedBook);


//esercizio 3
/* Creare un array (authors) che contiene gli autori dei libri.
Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
Ordina l’array authors in base all’età, senza creare un nuovo array.
(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)*/

const authors = books.map(b => b.author);
console.log(authors);

const areAuthorsAdults = authors.every(a => a.age >= 18);
console.log('Sono tutti maggiorenni?', areAuthorsAdults);

authors.sort((a, b) => b.age - a.age);


//esercizio 4
/* Creare un array (ages) che contiene le età degli autori dei libri.
Calcola la somma delle età (agesSum) usando reduce.
Stampa in console l’età media degli autori dei libri. */

const ages = authors.map(a => a.age);

const agesSum = ages.reduce((acc, curr) => acc + curr, 0);

const averageAges = agesSum / authors.length;
console.log(averageAges);