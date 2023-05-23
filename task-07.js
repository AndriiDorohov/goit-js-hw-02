const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login); 
    return 'Login successfully added!';
  } else if (!isLoginValid(login)) {
    return 'Error! The login must be between 4 and 16 characters.';
  } else {
    return 'This login is already in use!';
  }
};

console.log(addLogin(logins, 'Ajax')); // 'Login successfully added!'
console.log(addLogin(logins, 'robotGoogles')); // 'This login is already in use!'
console.log(addLogin(logins, 'Zod')); // 'Error! The login must be between 4 and 16 characters.'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Error! The login must be between 4 and 16 characters.'
