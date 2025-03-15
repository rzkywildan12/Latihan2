//4. Hapus kemunculan pertama dari sebuah string
function removeFirstOccurrence(str, searchStr) {
    return str.replace(searchStr, '');
}
console.log(removeFirstOccurrence("Hello world", "ell")); // Output: "Ho world"
