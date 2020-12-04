const findLongestWord = function(string) {
    // твой код
    let newMassive = string.split(' ');   // Переводим строку в массив  newMassive


    let longWord =  String(newMassive[0]);          //Присваиваем переменной первое слово в массиве
    let longWordId = String(newMassive[0]).length;  //Присваеваем переменой размер первого элемента массива

    for (let i = 1; newMassive.length > i ; i++){   //цикл листающий элементы массива newMassive
         if (longWordId < newMassive[i].length) {
              longWordId = newMassive[i].length;
              longWord = newMassive[i];
        }        
   }
    return(longWord);
  };
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you'));  // 'force'