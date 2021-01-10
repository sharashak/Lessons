class TodoListComponent extends Component {
    
    template() {
         return "<div class='todo-list'>" +
            "<h1>{title}</h1>" +
            "<ul style='display:flex; flex-flow: column;'>" + 
            this.renderItems() + 
            "</ul>" +
         "</div>" 
         
    }

    renderItems() {
        return this.data().items.reduce((acc, el) => {
            let todoListItemComponent = new TodoListItemComponent(el)
            return acc + todoListItemComponent.render()
        }, "")
    }
}
