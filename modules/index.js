// import { person as human, cat as catty } from './person.js';
// const person = {
//     name: 'Ivan',
//     age: 23
// }
// console.log(human);
// console.log(person);
// console.log(catty);

// import * as animals from './person.js';
// console.log(animals);
// console.log(animals.cat);

// import Person from './person.js';
// console.log(Person);

// export default  можно сразу записать новым именем, при этом в исходнике имя не поменяется
// import SHTUKA from './person.js';
// console.log(new SHTUKA);

import SHTUKA, {person, cat as dog} from './person.js';
console.log(new SHTUKA);
console.log(person);
console.log(dog);