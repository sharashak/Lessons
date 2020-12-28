


function init() {
   loadSampleData()    
   render()
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

    if(idElement.value == "") {
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


function validateCard(card) {
    let errors = 0;
    let errorStyle = "4px solid #d96e6a"
    let normalStyle = "1px solid black"
    if(card.title == "") {
        document.querySelector("[name='title']").style.border = errorStyle
        errors++
    } else {
        document.querySelector("[name='title']").style.border = normalStyle
    }

    if(card.description == "") {
        document.querySelector("[name='description']").style.border = errorStyle
        errors++
    } else {
        document.querySelector("[name='description']").style.border = normalStyle
    }

    let result = errors == 0
    return result
}

function createCardBy(id, title, description) {
    if(id == "") {
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

function updateCardAttributeById(id, attribute, value) {
   let findedCard = dataRepository.getAllCards().filter((el) => {
       return el.id == id
   })[0]
   findedCard[attribute] = value
   dataRepository.update(findedCard)
}

function bindUserInputEvents() {
   listenFormEvents()
}   

var isFormOpened = false

function toggleForm() {
    if(isFormOpened) {
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
   
   let elements = document.querySelectorAll('.change-theme-button');
   elements.forEach((el) => {
       el.addEventListener('click', (event) => {
           changeTheme()
       })
   });
   elements.forEach((el) => {
       el.addEventListener('click', (event) => {
           changeTheme()
       })
   });
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

//Отображаем карточки
function render() {
   var html = "";
   let cards = dataRepositoryLocalStorage.getAllCards()   
   console.log(cards);
   for(var i = 0; i < cards.length; i++) {
       html += fillCardTemplateWithCardObject(cards[i]);
   }

   let element = window.document.getElementsByClassName("todo-list-items")[0];
   element.innerHTML = html
   
   //Как только элементы готовы, биндимся на них
   bindUserInputEvents()
}

//Заполняем шаблон и возвращаем его
function fillCardTemplateWithCardObject(card) {
   return todoItemTemplate
   .replaceAll('{title}', card.title)
   .replaceAll('{isChecked}', card.isChecked ? 'checked' : '')
   .replaceAll('{item-id}', card.id)
   .replaceAll('{description}', card.description)
}

//Изменяем состояние карточки на противоположное 
function toggle(card) {
   card.isChecked = !card.isChecked
}

//Страница загружена, вызываем то что нам надо
window.onload = (event) => {
   init();    
};  
