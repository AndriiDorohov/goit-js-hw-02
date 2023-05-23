const checkForSpam = function(message) {
    let str = message.toLowerCase();
    
    // Variant 1
    // if ((str.indexOf('spam') !== -1) || (str.indexOf('sale') !== -1)) {
    //     return true;
    // } else {
    //     return false;
    // }
    
    // Variant 2
    if (str.includes('spam') || str.includes('sale')) {
        return true;
    } else {
        return false;
    }
};

/*
 * Function calls to test its functionality
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
