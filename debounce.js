// debounce
// Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.
// const expensiveOperation = () => console.log("Виконую складну операцію..."); constdebouncedExpensiveOperation = debounce(expensiveOperation, 1000);
// debouncedExpensiveOperation();
// debouncedExpensiveOperation();
// debouncedExpensiveOperation();
// // Через 1 секунду після останнього виклику "Виконую складну операцію..." має бути виведене в консоль тільки один раз.

function debounce(callback, delay) {
    let timerId;

    return function () {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
