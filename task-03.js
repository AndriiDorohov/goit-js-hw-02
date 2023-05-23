const findLongestWord = function(string) {
    let wordsArray = string.split(' ');  // Convert the string into an array of words
    
    let longestWord = wordsArray[0];     // Assign the first word in the array as the initial longest word
    let longestWordLength = longestWord.length;  // Assign the length of the first word as the initial longest word length

    for (let i = 1; i < wordsArray.length; i++) {
        if (longestWordLength < wordsArray[i].length) {
            longestWordLength = wordsArray[i].length;
            longestWord = wordsArray[i];
        }
    }
    
    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you'));  // 'force'
