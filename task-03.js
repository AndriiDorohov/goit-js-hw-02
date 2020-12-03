//i.toString().length



const findLongestWord = function(string) {
    // твой код
    let newMassive = string.split(' ');   // Переводим строку в массив  newMassive


    let longWord =  String(newMassive[0]);          //Присваиваем переменной первое слово в массиве
    let longWordId = String(newMassive[0]).length;  //Присваеваем переменой размер первого элемента массива

    console.log(`Вся строка ${string}`);
    console.log(`Весь массив ${newMassive}`);
    //console.log(`Первое слово ${longWord}`);
    //console.log(`Длина первого элемента ${longWordId}`);
    console.log(`Длина массива ${newMassive.length}`);

      for (let i = 1; newMassive.length > i ; i++){   //цикл листающий элементы массива newMassive
          if (longWordId < newMassive[i].length) {
              longWordId = newMassive[i].length;
              longWord = newMassive[i];
        }        
   }
    return(longWord);
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you'));  // 'force'