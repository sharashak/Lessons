let dataRepositoryLocalStorage = {
    storageKey: "todo-list",
    getItem: () => {
        let string = localStorage.getItem(dataRepositoryLocalStorage.storageKey)
        return JSON.parse(string)
    },

    setItem: (value) => {
        let json = JSON.stringify(value)
        localStorage.setItem(dataRepositoryLocalStorage.storageKey, json)
    },

    getAllCards: () => {
        return dataRepositoryLocalStorage.getItem('todo-list')
    },

    create: (card) => {
        let newCards = dataRepositoryLocalStorage.getAllCards()
        newCards.unshift(card)
        dataRepositoryLocalStorage.setItem(newCards)
    },

    delete: (card) => {
        let newCards = dataRepositoryLocalStorage
            .getAllCards()
            .filter((el) => {
                return el.id != card.id
            })
        dataRepositoryLocalStorage.setItem(newCards)
    },

    update: (card) => {
        let newCards = dataRepositoryLocalStorage.getAllCards().map((el) => {
            if (el.id == card.id) {
                return card
            } else {
                return el
            }
        })
        dataRepositoryLocalStorage.setItem(newCards)
    }
}

var todoItemTemplate =
    '<li class="todo-item todo-item-important">' +
    '<h2> {title}' +
    '<input id="todo-item-{item-id}" data-id="{item-id}"  type="checkbox" {isChecked}/>' +
    '<label for="todo-item-{item-id}">' +
    '</label>' +
    '</h2>' +
    '<p>' +
    '{description}' +
    '</p>' +
    '<div>' +
    '<a href="javascript:void(0)" onclick="deleteCard({item-id})">Удалить</a>&nbsp;' +
    '<a href="javascript:void(0)" onclick="editCard({item-id})">Изменить</a>' +
    '</div>' +
    '</li>';

function createCardBy(id, title, description) {
    if (id == "") {
        id = dataRepositoryLocalStorage.getAllCards().length + 1
    }
    let card = {
        id: id,
        title: title,
        description: description,
        isChecked: false
    }
    return card
}

function deleteCard(cardId) {
    if (confirm("Вы действительно хотите удалить эту карточку?")) {
        let card = dataRepositoryLocalStorage.getAllCards().filter((el) => {
            return el.id == cardId
        })[0]
        dataRepositoryLocalStorage.delete(card)
        render()
    }
}

function editCard(cardId) {
    let idElement = document.querySelector("[name='id']")
    let titleElement = document.querySelector("[name='title']")
    let descriptionElement = document.querySelector("[name='description']")
    idElement.value = cardId
    let cardForEdit = dataRepositoryLocalStorage.getAllCards().filter(card => cardId == card.id)[0]
    titleElement.value = cardForEdit.title
    descriptionElement.value = cardForEdit.description
    if (!isFormOpened) {
        toggleForm()
    }
}

function saveCard() {
    let idElement = document.querySelector("[name='id']")
    let titleElement = document.querySelector("[name='title']")
    let descriptionElement = document.querySelector("[name='description']")
    let createdCart = createCardBy(idElement.value, titleElement.value, descriptionElement.value)
    if (!validateCard(createdCart)) {
        return
    }
    if (idElement.value == "") {
        dataRepositoryLocalStorage.create(createdCart)
    } else {
        dataRepositoryLocalStorage.update(createdCart)
    }
    idElement.value = ""
    titleElement.value = ""
    descriptionElement.value = ""
    toggleForm()
    render()
}

function updateCardAttributeById(id, attribute, value) {
    let findedCard = dataRepositoryLocalStorage.getAllCards().filter((el) => {
        return el.id == id
    })[0]
    findedCard[attribute] = value
    dataRepositoryLocalStorage.update(findedCard)
}

function validateCard(card) {
    let errors = 0
    let errorStyle = "4px solid #d96e6a"
    let normalStyle = "1px solid black"
    if (card.title == "") {
        document.querySelector("[name='title']").style.border = errorStyle
        errors++
    } else {
        document.querySelector("[name='title']").style.border = normalStyle
    }

    if (card.description == "") {
        document.querySelector("[name='description']").style.border = errorStyle
        errors++
    } else {
        document.querySelector("[name='description']").style.border = normalStyle
    }

    let result = errors == 0
    return result
}

function toggleForm() {
    var isFormOpened = false
    if (isFormOpened) {
        document.getElementsByClassName("edit-form")[0].style.display = "none"
        document.getElementsByClassName("panel")[0].style.display = "flex"
        isFormOpened = false
    } else {
        document.getElementsByClassName("edit-form")[0].style.display = "flex"
        document.getElementsByClassName("panel")[0].style.display = "none"
        isFormOpened = true
    }
}

function listenFormEvents() {
    let openFormButton = document.querySelector("#openTodoForm")
    openFormButton.addEventListener('click', toggleForm)
}

function bindUserInputEvents() {
    let elements = document.querySelectorAll('input')
    console.log(elements)
    elements.forEach((el) => {
        el.addEventListener('change', (event) => {
            updateCardAttributeById(el.getAttribute("data-id"), "isChecked", el.checked)
        })
    })
    listenFormEvents()
}

function loadSampleData() {
    if (dataRepositoryLocalStorage.getItem("todo-list") != null) {
        return
    }

    dataRepositoryLocalStorage.setItem([
        {
            id: 1,
            title: "Помыть посуду",
            description: "Помыть посуду пока мамка не вернулась с работы и не дала пизды",
            isChecked: false
        },
        {
            id: 2,
            title: "Погулять с собакой",
            description: "не менее 1 часа",
            isChecked: false
        },
        {
            id: 3,
            title: "Приготовить покушать",
            description: "Список еды какой нибудь здесь",
            isChecked: false
        }
    ])
}

function toggle(card) {
    card.isChecked = !card.isChecked
}

//Заполняем шаблон и возвращаем его
function fillCardTemplateWithCardObject(card) {
    return todoItemTemplate
        .replaceAll('{title}', card.title)
        .replaceAll('{isChecked}', card.isChecked ? 'checked' : '')
        .replaceAll('{item-id}', card.id)
        .replaceAll('{description}', card.description)
}

//Отображаем карточки
function render() {
    var html = ""
    let cards = dataRepositoryLocalStorage.getAllCards()
    console.log(cards)
    for (var i = 0; i < cards.length; i++) {
        html += fillCardTemplateWithCardObject(cards[i])
    }
    let element = window.document.getElementsByClassName("todo-list-items")[0]
    element.innerHTML = html
    bindUserInputEvents() //Как только элементы готовы, биндимся на них
}

//Функция инициализации
function init() {
    console.log("The initialization was successful.")
    loadSampleData()
    render()
}

//Страница загружена, вызываем то что нам надо
window.onload = () => {
    init()
}