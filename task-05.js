const checkForSpam = function(message) {
    let str = message.toLowerCase();
  //    if ((str.indexOf('spam')+1) || (str.indexOf('sale')+1)) {return(true)}    //Вариант 1
//      else {return(false)};
    
      if ((str.includes('spam')) || (str.includes('sale'))) {return(true)}      //Вариант 2
          else {return(false)};
    
    // твой код
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true