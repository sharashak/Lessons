class ManageComponent {
    constructor(action) {
        if(action === 'My Homework') {
            new App('#app', homeWork)
            } else if (action === 'My Work') {
            new App('#app', work)
            } else if(action === 'My Personal Case') {
            new App('#app', petProject)
        }
    } 
}