// import { log } from './logger'

// log();

// new Map();
// const myMap = new Map();

// myMap.set("key1", "valor1")
// console.log(myMap.get("key1"))

// new Set();

// const mySet = new Set();
// mySet.add('val', 'Lucas')
// console.log(mySet);
// mySet.add('Lucas')
// mySet.add('Lucas')

// console.log();

// import readline from 'readline'

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// rl.question('Qual seu nome?', function (nome) {
//     rl.question('Qual seu idade?', function (idade) {
//         rl.question('Qual seu altura?', function (peso) {
//             console.log('Nome', nome, 'idade', idade, 'peso', peso);
//         })
//     })
// })

// function questions(description) {
//     return new Promise((resolve, reject) => {
//         rl.question(description, (answer) => resolve(answer));
//     })
// }

// async function survey() {
//     const nome = await question('Qual o seu nome ?')
//     const idade = await question('Qual o seu idade ?')
//     const altura = await question('Qual o seu altura ?')
//     const peso = await question('Qual o seu peso ?')
//     console.log('Nome', nome)
//     console.log('idade', idade)
//     console.log('altura', altura)
//     console.log('peso', peso)
// }

// survey();

function delay(time, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), time)
    })
}

async function run() {
    console.log('before delay')

    const all = await Promise.all([
        delay(2000, 1),
        delay(3000, 2),
        delay(1000, 3),
    ])

    console.log(all);

    const allRace = await Promise.race([
        delay(2000, 1),
        delay(3000, 2),
        delay(4000, 3),
    ])
    console.log(allRace);
}

run();