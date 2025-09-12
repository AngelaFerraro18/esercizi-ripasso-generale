//funzione getInitials

function getInitials(nomeCompleto) {

    const splittedName = nomeCompleto.split(' ');
    const initials = splittedName[0][0].toUpperCase() + splittedName[1][0].toUpperCase();

    return initials;
}


function createSlug(string) {

    if (!string) {
        throw new Error('Il titolo non può essere vuoto!');
    }

    const titleLower = string.toLowerCase();
    const titleNoSpaces = titleLower.replaceAll(' ', '-');

    return titleNoSpaces;
}

function average(arr) {

    const somma = arr.reduce((acc, curr) => acc + curr, 0);
    const average = somma / arr.length;

    return average;

}

function isPalindrome(string) {

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
        return true;
    }

}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}