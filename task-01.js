const logItems = function(array) {
    for (let i = 0; array.length > i; i++)
    console.log(`Номер элемента: ${i+1}, значение элемента: ${array[i]}`)
    return  
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);