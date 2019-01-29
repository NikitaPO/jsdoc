/** @const {string} */ const hiWord = 'Hello';
/**
* возвращает приветствие
* принимает строку или ничто, в случае ничто возвращает безымянное приветствие
*/
function sayHello(name = 'NikitaPO') {
return `${hiWord}, ${name}!`;
}
console.log(sayHello());
