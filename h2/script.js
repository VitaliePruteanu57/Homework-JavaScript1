const val = +prompt("Введите значение:");
const number = Number(val);

if (!isNaN(number)) {
    console.log("Это значение можно преобразовать в число");
} else {
    console.log("Это значение преобразовать в число не получится. Получится NaN");
}
