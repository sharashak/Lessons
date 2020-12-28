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
