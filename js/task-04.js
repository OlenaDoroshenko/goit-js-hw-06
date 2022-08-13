/*Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.*/

// let counterValue = 0;

// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');
// const text = document.querySelector('#value');
// console.log(increment, decrement,text);

// decrement.addEventListener("click", () => {
//     counterValue-=1;
//     text.textContent = counterValue;
//   });

// increment.addEventListener("click", () => {
//     counterValue+=1;
//     text.textContent = counterValue;
//   });

const getCounter = () => {
    let counterValue = 0;

    const decrement = () => counterValue -= 1; 

    const increment = () => counterValue += 1;
    
    return {decrement, increment}; 
}

const counter = getCounter();

document.querySelector('[data-action="decrement"]').addEventListener("click", () => {
    document.querySelector('#value').textContent = counter.decrement();
});

document.querySelector('[data-action="increment"]').addEventListener("click", () => {
    document.querySelector('#value').textContent = counter.increment();
})