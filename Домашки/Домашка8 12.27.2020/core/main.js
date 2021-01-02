let buttons = document.getElementsByClassName("selectorButton")

function onButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget
    let value = clickedElement.value
    new ManageComponent(`${value}`)
    return value
}

for(let i = 0; i < buttons.length; i++) {
    let button = buttons[i]
    button.addEventListener('click', onButtonClick)
}