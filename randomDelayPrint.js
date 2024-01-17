// randomDelayPrint
// Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди. Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.
// randomDelayPrint("Hello"); 
// // Очікуваний результат (затримки між літерами будуть різними):
// // H (невелика затримка)
// // e (велика затримка)
// // l (маленька затримка)
// // l (маленька затримка)
// // o (велика затримка)

function randomDelayPrint(message) {
    let delay = 0;

    for (let i = 0; i < message.length; i++) {
        delay += Math.random() * 1000;

        (function (char) {
            setTimeout(function () {
                console.log(char);
            }, delay);
        })(message[i]);
    }
}

randomDelayPrint("Hello");