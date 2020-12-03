const formatString = function(string) {
    // твой код
    let str = '';
    
    if (string.length > 40) {
        str = string.substr(0,40);
        str += '...';
        console.log(`Строка больше 40 символов будет отформатирована:`);
        }
        else {str = string} 
     

return(str);
  };

  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка