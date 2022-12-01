export const arrWords = ['яблоко', 'груша', 'банан', 'киви', 'арбуз'];
export let randWord = arrWords[Math.floor(Math.random() * arrWords.length)];

export const arrWordForRandom = randWord.split('');

export const dashesNode = document.getElementById('dashes');

export const dashes = arrWordForRandom.map(item => item = '_');

export let inputNode = document.getElementById('input-id');
export let btn = document.getElementById('btn');




