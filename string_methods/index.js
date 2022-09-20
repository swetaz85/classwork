console.log('Hello'.toLocaleUpperCase());
console.log('Hello'.toLocaleLowerCase());
console.log('Hello'[1].toLocaleUpperCase()); // E
console.log('Hello'.charAt(1)); // e
console.log(' He ll o '.trim()); // убирает пробелы с краев
console.log('Hello'.padEnd(19)); // добавляет пробелы до конца 
console.log('Hello world'.includes('Hel')); // проверяет есть ли нужные слова
console.log('Hello world'.startsWith('wo'));
console.log('Hello world'.endsWith('lo'));
console.log('Hello world'.repeat('3'));
console.log('Hello world'.indexOf('llo'));
console.log('Hello world'.slice(2, 5));
console.log('Hello world'.replace('ello', 'ip hop')); // заменяет, если во всей строке  replaceAll


const regex = new Regex('\\d');
const regex2 = /abc/;