const formatString = function(string) {
    let str = '';
    
    if (string.length > 40) {
        str = string.substr(0, 40);
        str += '...';
    } else {
        str = string;
    }
    
    return str;
};

/*
 * Function calls to test its functionality
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// Returns the original string

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// Returns the formatted string

console.log(formatString('Curabitur ligula sapien.'));
// Returns the original string

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// Returns the formatted string
