// intervalRace
// Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах. Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t. Коли всі функції виконано, intervalRace має повернути масив із результатами.
function intervalRace(functions, t) {
    let results = [];
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < functions.length) {
            try {
                results.push(functions[index]());
            } catch (error) {
                results.push(error);
            }
            index++;
        } else {
            clearInterval(intervalId);
            console.log(results);
        }
    }, t);
}

intervalRace([
    () => "Function 1 result",
    () => "Function 2 result",
    () => "Function 3 result"
], 1000);