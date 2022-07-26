// 4. Написать игру камень ножницы бумага
// игра до 10 побед пользователя либо компа ( при победе выводим имя победителя )
// пользователь должен вводить "камень" "ножницы" либо "бумага"
// компьютер должен рандомно генерировать "камень" "ножницы" либо "бумага"
// после чего выводим сообщение вида
// "вы выиграли ваш выбор: камень, выбор компа: "ножницы""
// и засчитываем очко соответствующему игроку, после чего начинаем следующий раунд
// при ничьей, очко никому не засчитываем

let user;
const comp = ["Камень", "Ножницы", "Бумага"];
let computer;
let users = 0;
let computers = 0;
for (let i = 0; i < 10; i++) {
    user = prompt(`Введите "Камень", "Ножницы" или "Бумага"`);
    computer = comp[ Math.floor(Math.random() * comp.length) ];
    if (user === "Камень" &&  computer === "Камень") {
        console.log("Ничья. Ваш выбор " + user + " , выбор компа: " + computer);
    }
    if (user === "Ножницы" &&  computer === "Ножницы") {
        console.log("Ничья. Ваш выбор " + user + " , выбор компа: " + computer);
    }
    if (user === "Бумага" &&  computer === "Бумага") {
        console.log("Ничья. Ваш выбор " + user + " , выбор компа: " + computer);
    }
    if (user === "Камень" &&  computer === "Ножницы") {
        console.log("Вы выйграли. Ваш выбор " + user + " , выбор компа: " + computer);
        users++;
    }
    if (user === "Камень" &&  computer === "Бумага") {
        console.log("Вы проиграли. Ваш выбор " + user + " , выбор компа: " + computer);
        computers++;
    }
    if (user === "Ножницы" &&  computer === "Камень") {
        console.log("Вы проиграли. Ваш выбор " + user + " , выбор компа: " + computer);
        computers++;
    }
    if (user === "Ножницы" &&  computer === "Бумага") {
        console.log("Вы выйграли. Ваш выбор " + user + " , выбор компа: " + computer);
        users++;
    }
    if (user === "Бумага" &&  computer === "Камень") {
        console.log("Вы выйграли. Ваш выбор " + user + " , выбор компа: " + computer);
        users++;
    }
    if (user === "Бумага" &&  computer === "Ножницы") {
        console.log("Вы проиграли. Ваш выбор " + user + " , выбор компа: " + computer);
        computers++;
    }

}
if (users > computers) {
    console.log("Победа за Вами!!!");
} else if (users < computers) {
    console.log("Комп рулит, Вы проиграли");
} else if (users === computers) {
    console.log("Боевая ничья");
}
