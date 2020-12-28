let array = [
    "Жека",
    "Женя",
    "Вова",
    "Кирилл"
];

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
        description: "Список еды какой нибудь здесь",
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

function toggle(card) {
    card.isChecked = !card.isChecked
}


console.log(sum(10, 30));

toggle(object)