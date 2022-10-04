let person = {
    firstName: "Donovan",
    lastName: "Tong",
    height: 6,
    age: 21,
    favorites: {
        movie1: "Spiderman",
        movie2: "Batman"
    },
    favFoods: ['rice', 'pizza', 'noodles']
}

// console.log(person.firstName)

let {lastName: last_name} = person

// console.log(last_name)
// let dog1 = {
//     name: '',
//     color:'',
//     age: 7
// }

class Dog {
    constructor(name, color, age) {
        this.name = name
        this.color = color
        this.age = age
    }
    greeting() {
        console.log(`Hi, my name is ${this.name}, and I'm ${this.age}.`)
    }
}

let dog1 = new Dog('Sophie', 'brown', 7)
dog1.greeting()

class Puppy extends Dog {
    constructor(name, color, age, trainingLevel) {
        super(name,color,age)
        this.trainingLevel = trainingLevel
    }
    levelUp(num) {
        return this.trainingLevel += num
    }
}

let puppy1 = new Puppy ('a', 'green', 4, 6)

// console.log(puppy1)

console.log(puppy1.levelUp(3))

let food = {
    name: "pizza",
    price: 10,
    introduction: () => {
        console.log('hi, I love pizza')
    }
}

food.introduction()