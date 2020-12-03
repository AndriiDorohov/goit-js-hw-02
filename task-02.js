const calculateEngravingPrice = function(message, pricePerWord) {
    console.log(message);
    let i = message.split(' ');     // в эту переменную записываем массив слов разделенных пробелами
    //i= i.join(''); сливает в одну строку для подсчета стоимости гравировки по символам
    let j=i.length;                 // в эту переменную записываем количество элементов в массиве
    console.log(`Количество слов: ${j}, стоимостью ${pricePerWord} за слово, общая стоимость гравировки = ${j*pricePerWord}`);
    return j*pricePerWord;
};
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
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