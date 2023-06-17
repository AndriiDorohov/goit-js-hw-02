# Admission criteria

- The repository `goit-js-hw-02` has been created
- When submitting homework, there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`.
  Use `<script type="module">` to close the task code in a separate
scope and avoid identifier name conflicts.
- The names of variables and functions are clear, descriptive
- The code is formatted with Prettier

# Task 1

Write a function `logItems(array)' that gets an array and uses a loop
`for`, which for each element of the array will output a message to the console in
the format `[element number] - [element value]`.

Numbering should start with `1'. For example, for the first element of the array
`['Mango', 'Poly', 'Ajax']` with index `0` will output `1 - Mango", and for
index `2` will output `3 - Ajax".

``js
const logItems = function(array) {
// your code
};

/*
* Function calls to check the health of your implementation.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
```

# Task 2

Write a script for calculating the cost of engraving jewelry. To do this, create a function
`calculateEngravingPrice(message, pricePerWord)` that accepts a string (
there will be only words and spaces in the string) and the price of engraving one word, and returns
the price of engraving all words in the string.

``js
const calculateEngravingPrice = function(message, pricePerWord) {
// your code
};

/*
* Function calls to check the health of your implementation.
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
```

# Task 3

Write the function `findLongestWord(string)`, which takes
an arbitrary string as a parameter (there will be only words and spaces in the string) and returns the
longest word in this string.

``js
const findLongestWord = function(string) {
// your code
};

/*
 * Function calls to check the health of your implementation.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
```

# Task 4

Write a function `formatString(string)` that accepts a string and formats it
if necessary.

- If the string length does not exceed `40 characters`, the function returns it in its original
form.
- If the length is more than `40 characters`, the function cuts the string to 40 characters
  and adds a colon `..." to the end of the line, after which it returns
  a shortened version.

``js
const formatString = function(string) {
// your code
};

/*
* Function calls to check the health of your implementation.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// the original string will be returned

console.log(formatString('Vestibulum facilitis, purus nec pulvinar iaculis.'));
// the formatted string will be returned

console.log(formatString('Curabitur ligula sapien.'));
// the original string will be returned

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
),
);
// the formatted string will be returned
```

# Task 5

Write a function `checkForSpam(message)` that accepts 1 parameter `message' -
string. The function checks it for the content of the words `spam` and `sale'. If a
forbidden word is found, the function returns `true`, if there are no forbidden words, the function
returns `false`. Words in a string can be in any case.

``js
const checkForSpam = function(message) {
// your code
};

/*
* Function calls to check the health of your implementation.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
```

# Task 6

Write a script with the following functionality:

- When loading the page, the user is prompted to enter a number in the `prompt`. Input
  it is stored in the variable `input` and added to the array of numbers `numbers'.
- The operation of entering a number by the user and saving it to an array continues until
  until the user clicks `Cancel` in `prompt'.
- After the user has stopped typing by pressing `Cancel` if the array is not
  empty, it is necessary to calculate the sum of all the elements of the array and write it to
  the `total` variable. Use the `for` or `for...of` loop. After that
, output the line `The total sum of the numbers is [sum]" to the console.

🔔 It is not necessary to check that the user entered a number, and not an arbitrary
set of characters. If you want, in case of incorrect input,
show `alert` with the text `Not a number was entered, try again", when
in this case, the result of `prompt` does not need to be written to an array of numbers, after which
the user is again prompted to enter a number in `prompt`.

```js
let input;
const numbers = [];
let total = 0;
```

# Task 7 is optional, it is not necessary to perform

There is an array of `logins` with user logins. Write a script for adding a login to
the 'logins` array. The login to be added must:

- pass the check for a length from 4 to 16 characters inclusive
- be unique, that is, be absent from the `logins` array

Break the task into subtasks using functions.

Write the function `isLoginValid(login)`, in which check the number of characters
of the parameter `login` and return `true` or `false`, depending on whether
the length of the parameter falls within the specified range from 4 to 16 characters inclusive.

Write the function `isLoginUnique(allLogins, login)`, which takes a list of all
logins and the login being added as parameters and checks for the presence of `login` in the array
`allLogins`, returning `true` if there is no such login yet and `false` if the login
is already in use.

Write the function `addLogin(allLogins, login)` which:

- Accepts a new login and an array of all logins as parameters
- Checks the validity of the login using the auxiliary function `isLoginValid`
- If the login is not valid, stop executing the `addLogin` function and return
  the line `Error! The login must be from 4 to 16 characters"
- If the login is valid, the `addLogin` function checks the uniqueness of the login with
  using the `isLoginUnique` function
- If `isLoginUnique` returns `false`, then `addLogin` does not add the login to the
array and returns the string `This login is already in use!'`
- If `isLoginUnique` returns `true`, `addLogin` adds a new login to
  `logins` and returns the string `Login successfully added!'`

🔔 **The principle of the sole responsibility of the function** - each function does
one thing. This allows you to reuse the code and change the logic of the function
only in one place, without affecting the operation of the program as a whole.

Predicate functions return only `true` or `false'. Such functions are usually
called starting with `is`: `isLoginUnique` and `isLoginValid' in our case.

- `isLoginUnique` only checks if there is such a login in the array and returns
  `true` or `false'.
- `isLoginValid` only checks if the login is valid and returns `true' or
  `false`.
- `addLogin` adds or does not add a login to the array. At the same time, it
uses the results of calls to other functions -
`isLoginUnique` and `isLoginValid` to check the addition condition.

```js
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
// your code
};

const isLoginUnique = function(allLogins, login) {
// your code
};

const addLogin = function(allLogins, login) {
// your code
};

/*
 * Function calls to check the health of your implementation.
 */
console.log(addLogin(logins, 'Ajax')); // 'Login successfully added!'
console.log(addLogin(logins, 'robotGoogles')); // 'This login is already in use!'
console.log(addLogin(logins, 'Zod')); // 'Error! The login must be from 4 to 16 characters'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Error! The login must be from 4 to 16 characters '
``
