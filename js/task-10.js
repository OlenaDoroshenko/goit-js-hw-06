function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

/* Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи. */

// Input
const input = document.querySelector("input");

const inputFunctions = () => {

  const getInputData = () => {
    return Number(input.value);
  };

  const removeInputData = () => {
    input.value = "";
  }

  return {getInputData, removeInputData};
}

const inputData = inputFunctions();

// Boxes
const boxes = document.querySelector("#boxes");

let initialWidth = 30;
let initialHeight = 30;

function createOneBox() {
  const box = document.createElement('div');
  box.style.background = getRandomHexColor();
  box.style.width = initialWidth + "px";
  box.style.height = initialHeight + "px";
  box.classList.add('div-box');
  return box;
};

function addBoxes() {

  const divBoxes = [];

      for (let i = 1; i <= inputData.getInputData(); i+=1) {
        const box = createOneBox();   
        initialWidth +=10;
        initialHeight += 10;
        divBoxes.push(box);
      };

  boxes.append(...divBoxes);

}

const changeToInitialSize = () => {
  initialWidth = 30;
  initialHeight = 30;
}

function removeBoxes() {
  document.querySelectorAll(".div-box").forEach(box => box.remove());
  inputData.removeInputData();
  changeToInitialSize();
};

document.querySelector("[data-create]").addEventListener("click", addBoxes);
document.querySelector("[data-destroy]").addEventListener("click", removeBoxes);
