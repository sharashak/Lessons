/* class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide() {
        this.$el.style.display = 'none'
    }
    
    show() {
        this.$el.style.display = 'block'   
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box(
    {
        selector: '#box1',
        size: 100,
        color: 'red'
    }
)

const box2 = new Box(
    {
        selector: '#box2',
        size: 150,
        color: 'darkcyan'
    }
)

class Circle extends Box {
    constructor(options){
        super(options)

        this.$el.style.borderRadius = '50%'
        this.$el.style.background = options.color
    }
}

const circle1 = new Circle(
    {
        selector: '#circle1',
        size: 90,
        color: 'orangered'
    }
) 

 const person = {
    name: 'Evgeny',
    age: 24,
    greet: function() {
        console.log('Greetings!')
    }
 }

const person = new Object(
    {
        name: 'Evgeny',
        age: 24,
        greet: function() {
        console.log('Greetings!')
        }
    }
)

Object.prototype.sayHello = function() {
    console.log('Privet')
}

const person2 = Object.create(person)
person2.name = 'Alyona'

const str = 'I am string'
const str = new String('I am string') */

/* function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Evgeny',
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(document)
} */