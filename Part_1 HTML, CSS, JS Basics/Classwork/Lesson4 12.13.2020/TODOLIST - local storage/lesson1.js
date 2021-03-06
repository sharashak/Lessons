let dataRepository = {
    getItem: () => {
        let string = localStorage.getItem("todo-list");
        return JSON.parse(string)
    },

    setItem: (value) => {
        let json = JSON.stringify(value)
        localStorage.setItem('todo-list', json)
    },

    delete: (card) => { },
    //Подменяем переданной карточкой старую с условием по идентификатор
    update: (card) => {
        let newCards = dataRepository.getAllCards().map((el) => {
            if (el.id == card.id) {
                return card
            } else {
                return el
            }
        })

        dataRepository.setItem(newCards)
    },
    create: (card) => { },
    getAllCards: () => {
        return dataRepository.getItem('todo-list')
    }
}


//Определяем шаблон (в нашем случае это элемент списка с названием, описанием, чекбоксом из HTML)
var todoItemTemplate =
    '<li class="todo-item todo-item-important">' +
    '<h2> {title}' +
    '<input id="todo-item-{item-id}" data-id="{item-id}" type="checkbox" {isChecked}/>' +
    '<label for="todo-item-{item-id}">' +
    '</label>' +
    '</h2>' +
    '<p>' +
    '{description}' +
    '</p>' +
    '</li>';

//Функция инициализации, имеющая в теле функцию render. Главная функция по родительскому признаку.
function init() {
    console.log("Инициализация прошла")

    loadSampleData()
    render()
}

function updateCardAttributeById(id, attribute, value) {
    let findedCard = dataRepository.getAllCards().filter((el) => {
        return el.id == id
    })[0]
    findedCard[attribute] = value
    dataRepository.update(findedCard)
}

function bindUserInputEvents() {
    let elements = document.querySelectorAll('input');
    console.log(elements)
    elements.forEach((el) => {
        el.addEventListener('change', (event) => {
            updateCardAttributeById(el.getAttribute("data-id"), "isChecked", el.checked)
        })
    });
}

function loadSampleData() {
    if (dataRepository.getItem("todo-list") != null) {
        return
    }
    dataRepository.setItem([
        {
            id: 1,
            title: "Помыть посуду",
            description: "Помыть посуду пока мама не вернулась с работы",
            isChecked: false
        },
        {
            id: 2,
            title: "Погулять с собакой",
            description: "Выгуливать собаку не менее 1 часа",
            isChecked: false
        },
        {
            id: 3,
            title: "Приготовить покушать",
            description: "Список продуктов",
            isChecked: false
        }
    ])
}

//Отображаем карточки
function render() {
    var html = "";
    let cards = dataRepository.getAllCards()
    console.log(cards);
    //Цикл, проходящий по списку наших карточек чеклиста
    for (var i = 0; i < cards.length; i++) {
        html += fillCardTemplateWithCardObject(cards[i]); //Заполнение объектов (карточек) на карточки с уже изменёнными данными
    }
    //Возвращает массив всех элементов, относящихся к нашему классу todo-list-items, то есть трёх айтемов из чеклиста
    let element = window.document.getElementsByClassName("todo-list-items")[0];
    //Получает разметку наших элементов из HTML
    element.innerHTML = html

    //Как только элементы готовы, биндимся на них
    bindUserInputEvents() 
}

//Заполняем шаблон и возвращаем его. Замена осуществляется постепенно, от карточки до карточки именно то количество раз, сколько у нас карточек.
function fillCardTemplateWithCardObject(card) {
    return todoItemTemplate
        .replaceAll('{title}', card.title) //Замена шаблона названия на название из карточки
        .replaceAll('{isChecked}', card.isChecked ? 'checked' : '') //Замена состояния чекбокса на чекбокс из нашей карточки
        .replaceAll('{item-id}', card.id) //Замена идентификатора
        .replaceAll('{description}', card.description) //Замена описания
}

//Изменяем состояние карточки на противоположное
function toggle(card) {
    card.isChecked = !card.isChecked
}

//Страница загружена, вызываем то, что нам нужно
window.onload = (event) => {
    init();
};