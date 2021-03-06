const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if ((login.length >= 4) && (login.length <= 16)) {return(true)}
    else {return(false)}
};

const isLoginUnique = function(allLogins, login) {
        if (allLogins.includes(login) === true) {
            return(false)
        }                                // условие ищет совпадение логина в массиве, найден - true иначе - false
        else {
            return(true)
        }                                 // при true возвращает значение функции false, т.к. элемент имеется и не будет добавлен
};

const addLogin = function(allLogins, login) {
     if ((isLoginValid(login) === true) && (isLoginUnique(logins,login) === true)) {
        logins.push(login); 
        return(`Логин успешно добавлен!`);
        }
        else if (isLoginValid(login) === false) {
            return(`Ошибка! Логин должен быть от 4 до 16 символов`)
        }
            else {
                return(`Такой логин уже используется!`)
               }
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

