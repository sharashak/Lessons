function init() {
    console.log("Инициализация")
}

let cards = [
    {
        title: "Помыть посуду",
        description: "Помыть посуду пока мамка не вернулась с работы и не дала пизды",
        isChecked: false
    },
    {
        title: "Погулять с собакой",
        description: "не менее 1 часа",
        isChecked: false
    },
    {
        title: "Приготовить покушать",
        description: "список еды",
        isChecked: false
    }
];

if (cards.length > 0) {
    console.log("Сработало")
} else {
    console.log("Не сработало")
}

console.table(cards)

function sum(a, b) {
    return a + b
}

//Изменяем состояние карточки на противоположное
function toggle(card) {
    card.isChecked = !card.isChecked
}

//Страница загружена, вызываем то, что нам надо
window.onload = (event) => {
    init();
}