class App {
    constructor(querySelector, component) {
        document.querySelector(querySelector).innerHTML = component.render()
    }
}