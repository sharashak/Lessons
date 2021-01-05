class BoardComponent extends Component { //Создаём новый класс с полем внутри класса Component
    template() { //Функция template возвращает шаблон списка (на флексах и с рассчитанной шириной, чтобы смотрелось нормально)
        return "<div style='display:flex; flex-flow:column; justify-content: space-between;'>"+
            "<div style='display:flex; flex-flow:column;'>" +
                "<h1 class='card' style='width: calc(100% - 40px);'>{title}</h1>" +
            "</div>" +
            "<div style='display:flex; flex-flow: row; justify-content: space-between;'>"+ 
                this.renderColumns() +  //Здесь мы добавляем рендер элементов, который берётся ===>
            "</div>" +
        "</div>"
    }

    renderColumns() { //===> с помощью метода reduce
        return this.data().items.reduce((acc, el) => {
            let todoList = new TodoListComponent(el) //Пусть переменная todoList - новый элемент класса TodoListComponent
            return acc + todoList.render() 
        }, "")
    }
}