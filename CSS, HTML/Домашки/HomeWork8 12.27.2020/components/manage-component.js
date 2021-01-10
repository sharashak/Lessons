class ManageComponent { //Создание класса ManageComponent
    constructor(action) { //Создание конструктора с ветвлением внутри в зависимости от выбранной кнопки из верхнего листинга.
        if(action === 'My Homework') {
            new App('#app', homeWork)
            } else if (action === 'My Work') {
            new App('#app', work)
            } else if(action === 'My Personal Case') {
            new App('#app', petProject)
        }
    } 
}