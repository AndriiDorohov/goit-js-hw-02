const calculateEngravingPrice = function(message, pricePerWord) {
    console.log(message);
    let words = message.split(' ');   // Split the message into an array of words
    let wordCount = words.length;     // Get the number of elements (words) in the array
    return wordCount * pricePerWord;
};   

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
); // 80

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
); // 160

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
