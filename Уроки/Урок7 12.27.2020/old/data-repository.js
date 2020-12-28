let dataRepositoryLocalStorage = {
    storageKey: "todo-list",
    getItem: () => {
        let string = localStorage.getItem(dataRepositoryLocalStorage.storageKey);
        return JSON.parse(string);
    },
    setItem: (value) => {
       let json = JSON.stringify(value)
       localStorage.setItem(dataRepositoryLocalStorage.storageKey, json)
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
    },
    create: (card) => {
        let newCards = dataRepositoryLocalStorage.getAllCards()    
        newCards.unshift(card)
        dataRepositoryLocalStorage.setItem(newCards)
    },
    getAllCards: () => {
       return dataRepositoryLocalStorage.getItem('todo-list')
    }
}