/* Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato” */


let datiRicevuti: unknown;

if (typeof datiRicevuti === 'string') {
  console.log(datiRicevuti.toUpperCase());
}
if (typeof datiRicevuti === 'number') {
  console.log(datiRicevuti * 2);
}
if (typeof datiRicevuti === 'boolean') {
  console.log(datiRicevuti ? 'Si' : 'No')
} if (datiRicevuti === null) {
  console.log('Il dato è vuoto');
} if (Array.isArray(datiRicevuti)) {
  console.log(datiRicevuti.length)
} if (datiRicevuti instanceof Promise) {
  datiRicevuti.then((message) => console.log(message))
} else {
  console.log('Tipo non supportato')
};


/* Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
🎯 BONUS
Il type alias Dipendente, ha anche i seguenti dati:

emailAziendale → Email assegnata al dipendente (non si può modificare)
contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”. */


type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
}


/* Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

Developer
livelloEsperienza → Il livello di esperienza del developer (le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda (opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer (può essere vuoto).
ProjectManager
teamSize → Il numero di persone nel team gestito dal Project Manager (può essere null se non ha ancora un team assegnato).
budgetGestito → Il totale del budget annuale gestito dal PM (opzionale).
stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora (può essere vuoto).
🎯 BONUS
Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:

nome → Nome del team (stringa).
progettoAttuale → Nome del progetto su cui lavora il team (può essere null se il team è in attesa di assegnazione).
budget → Importo numerico del budget assegnato al team (sempre presente).
membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers (almeno un developer obbligatorio). */


type Developer = Dipendente & {
  livelloEsperienza: 'junior' | 'mid' | 'senior',
  linguaggi?: string[],
  certificazioni: string[]

}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}


type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]]

}


/* Esercizio 1: Controllo tipo dati API

Hai ricevuto un dato di tipo unknown da un’API.

Se è una stringa: stampa la lunghezza.

Se è un numero: controlla se è pari o dispari.

Se è un booleano: stampa "vero" o "falso".

Se è un array: stampa "Array con X elementi".

Se è un oggetto: stampa "Oggetto ricevuto".

Altrimenti: stampa "Tipo non riconosciuto". */


let datoApi: unknown;

if (typeof datoApi === 'string') {
  console.log(datoApi.length);
} else if (typeof datoApi === 'number') {
  console.log(datoApi % 2 === 0 ? 'Pari' : 'Dispari');
} else if (typeof datoApi === 'boolean') {
  console.log(datoApi ? 'true' : 'false');
} else if (Array.isArray(datoApi)) {
  console.log(`Array con ${datoApi.length} elementi`);
} else if (datoApi !== null && typeof datoApi === 'object') {
  console.log('Oggetto ricevuto');
} else {
  console.log('Tipo non riconosciuto');
}

// anche null ha tipo object quindi meglio fare un controllo anche per quel caso per poter controllare che sia veramente un oggetto 


/* 🔹 Esercizio 2: Definisci un type alias Cliente

Un Cliente ha:

id: numero (readonly, non modificabile)

nome: stringa

email: stringa

tipo: può essere "premium" | "standard" | "ospite"

ordini: array di numeri (gli ID degli ordini)

🎯 BONUS:
Aggiungi sconto → opzionale, di tipo numero. */

type Cliente = {
  readonly id: number,
  nome: string,
  email: string,
  tipo: 'premium' | 'standard' | 'ospite',
  ordini: number[],
  sconto?: number
}


/* 🔹 Esercizio 3: Estendi Cliente per casi specifici

ClientePremium: ha sempre sconto e contiene un campo puntiFedeltà (numero).

ClienteOspite: non ha email (può essere null) e non ha ordini (sempre array vuoto). */

type ClientePremium = Cliente & {
  sconto: number,
  puntiFedeltà: number
}

type ClienteOspite = Cliente & {
  email: null,
  ordini: number[]
}


/* 🔹 Esercizio 4: Definisci un type alias Prodotto

Ogni prodotto ha:

nome: stringa

prezzo: numero

categoria: "alimentari" | "tecnologia" | "abbigliamento"

disponibile: boolean

🎯 BONUS:
Crea un type alias Carrello che è una tuple:

Primo elemento → sempre un Cliente

Secondo elemento → array di Prodotto */

type Prodotto = {
  nome: string,
  prezzo: number,
  categoria: "alimentari" | "tecnologia" | "abbigliamento",
  disponibile: boolean
}

type Carrello = [Cliente, ...Prodotto[]];


/* Crea una funzione processaInput(input: string | number | boolean) che:

Se riceve una stringa → la stampa in minuscolo.

Se riceve un numero → lo eleva al quadrato.

Se riceve un booleano → stampa "ok" se true, "ko" se false. */

function processaInput(input: string | number | boolean) {
  if (typeof input === 'string') {
    return console.log(input.toLowerCase());
  } else if (typeof input === 'number') {
    return console.log(input ** 2);
  } else if (typeof input === 'boolean') {
    return console.log(input ? 'ok' : 'ko')
  }
}



