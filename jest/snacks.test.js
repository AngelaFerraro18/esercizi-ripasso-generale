const { getInitials, createSlug, average, isPalindrome } = require('./functions');

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Angela Ferraro')).toBe('AF');
})


test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('Titanic')).toBe('titanic');
})

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3])).toBe(2);
})

test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Il signore degli anelli")).toBe('il-signore-degli-anelli');
})


test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('osso')).toBeTruthy();
})