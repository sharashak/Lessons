class TodoListItemComponent extends Component {
    template() {
        return '<li class="todo-item todo-item-important">' +
            '<h2> {title}' +
                '<input id="todo-item-{itemId}" data-id="{itemId}"  type="checkbox" {isChecked}/>' +
                '<label for="todo-item-{itemId}">' +
                '</label>' +
            '</h2>' +
            '<p>' +
                '{description}' +
            '</p>' + 
            '<div>' +
                '<a href="javascript:void(0)" onclick="deleteCard({item-id})">Удалить</a>&nbsp' + 
                '<a href="javascript:void(0)" onclick="editCard({item-id})">Изменить</a>' +
            '</div>' +
            '</li>';    
    }
}