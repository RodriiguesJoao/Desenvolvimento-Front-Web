// Exercícios TypeScript

// 1. Declare uma variável que pode conter uma string ou um número.
let variavel: string | number;

variavel = "João Rodrigues";
console.log(variavel);

variavel = 42;
console.log(variavel);

// 2. Crie uma função que receba dois números e retorne a soma deles.
function soma(a: number, b: number): number {
    return a + b;
}

console.log(soma(3, 5));

// 3. Crie uma interface para representar uma pessoa com nome e idade, ambos obrigatórios.
interface Pessoa {
    nome: string;
    idade: number;
}

let pessoa: Pessoa = {
    nome: "João",
    idade: 26
};
console.log(pessoa);

// 4. Crie uma classe Animal com um método falar, e uma classe Cachorro que herda de Animal e sobrescreva o método falar para imprimir "Au Au".
class Animal {
    falar(): void {
        console.log("Som indefinido");
    }
}

class Cachorro extends Animal {
    falar(): void {
        console.log("Au Au");
    }
}

let meuCachorro = new Cachorro();
meuCachorro.falar();

// 5. Crie uma função que receba um array de números e retorne o maior valor.
function maiorValor(numeros: number[]): number {
    return Math.max(...numeros);
}

let numeros = [10, 2, 8, 15, 4];
console.log(maiorValor(numeros));

// 6. Crie um enum para representar as cores: vermelho, verde e azul.
enum Cores {
    Vermelho = "VERMELHO",
    Verde = "VERDE",
    Azul = "AZUL"
}

let corFavorita: Cores = Cores.Azul;
console.log(corFavorita); 

// 7. Crie uma função que receba um parâmetro que pode ser uma string ou um número e retorne o tamanho (se for string) ou o dobro do valor (se for número).
function tamanhoOuDobro(valor: string | number): number {
    if (typeof valor === "string") {
        return valor.length;
    } else {
        return valor * 2;
    }
}

console.log(tamanhoOuDobro("Teste")); 
console.log(tamanhoOuDobro(7));