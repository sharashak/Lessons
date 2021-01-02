class BoardComponent extends Component {
    template() {
        return "<div style='display:flex; flex-flow:column; justify-content: space-between;'>"+
            "<div style='display:flex; flex-flow:column;'>" +
                "<h1 class='card' style='width: calc(100% - 40px);'>{title}</h1>" +
            "</div>" +
            "<div style='display:flex; flex-flow: row; justify-content: space-between;'>"+ 
                this.renderColumns() + 
            "</div>" +
        "</div>"
    }

    renderColumns() {
        return this.data().items.reduce((acc, el) => {
            let todoList = new TodoListComponent(el)
            return acc + todoList.render()
        }, "")
    }
}