// De acordo com as melhores práticas, deve-se evitar o máximo possível o tipo (any)

let price = 40
let item = 'apple'
let insStore = true

let value
value = 10
value = 'Max'


//Array : Quando tiver um array específico para number ou strings, sempre especificar o tipo, como abaixo.

let values: number[] = [10, 20, 40, 60]


//enum: Ele trabalha com lista de itens relacionados e sem ele a quantidade de código fica muito grande

//const admin = 1
//const read = 2
//const backup = 3

enum Role {admin = 1, read = 2, backup = 3}

const user = {
    fisrtName: 'Max',
    age: 30,
    role: Role.backup
}

//return: Aqui o return , retorna o que o typescript acha que foi definido
// O terceiro number e um hardcode, especificando que o return tem de ser um number

function add(num1:number, num2:number):number {
    return num1 + num2
}


//void: Significa que a função como no expemplo, não tem um return (undefined)

function result(price:number) {
    console.log ('the result is ' + price)
}


//objects :
//abaixo seria como especificar o property e o type dela.
// Isso e usado para especificar apenas algo que não e obvio dentro do objeto. Normalmente nas boas práticas não se usa.

const userAdmin: {
    firstName: string;
    age: number;
    lastName: string
    } = {
    firstName: 'Max',
    age: 30,
    lastName: 'Oliveira'
}



//unknown: O unknown, pode ser qualquer coisa de forma temporária, mas depois eu vou associar a um formato fixo. (ex: string)
//Precisa de uma verificação extra.

let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = 'Apple'

if (itemInput === 'string') {
    itemName = itemInput
}


//never: Ele nunca retorna um valor para o console

function generateError(message: string, code: number): never {
    throw {message: message, erroCode: code}
}

generateError('The application Crashed', 500)


//alias(pseudônimo)
//Utilizando o type você coloca as properties dentro de uma Alias e pode reutilizar essas properties em outras constantes, por exemplo.

type Users = {
    firstName: string
    age: number
}

const User: Users = {
    firstName: 'Max',
    age: 30
}

console.log(user)


//union | : Significa que em um parâmetro ou variável, você pode armazenar dois tipos e o Typescript não reclama.

function userInput(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'string' && typeof input2 === 'number') {
        result = input1 + input2
    }
    else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineName = userInput('Apple', 'Avocado')
console.log(combineName)


// literal: Você associa um valor específico a uma variável e se mudar o valor o Typescript reclama.

let productPrice: 10 | 20 | 30 |40
let productSize: 'S' | 'M' | 'L'

productPrice = 20
productSize = 'S'


//intersection: E a forma de combinar dois objetos ou duas alias.

type User = {
    firstName: string
    age: number
}

type JobRole = {
    id: number
    role: string
}

type employee = User & JobRole
const e1: employee = {
    firstName: 'Max',
    age: 29,
    id: 333,
    role: 'Admin'
}



