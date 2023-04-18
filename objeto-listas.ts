const pessoa = {
    nome:"Mariana",
    idade: 28,
    profissao:"Desenvolvedora"
}

pessoa.idade = 25;

const Andre: (nome: string, idade: number, profissão: string) => {
    nome: "Andre",
    idade: 23,
    profissao: "Pintor"
}

const Paula: (nome: string, idade: number, profissão: string) => {
    nome: "Paula",
    idade: 23,
    profissao: "Desenvolvedora"
}

enum profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadoradefutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: pessoa = {
    nome: "vanessa",
    idade: 23,
    profissao: profissao.Desenvolvedora
}

const maria: pessoa = {
    nome: "Maria",
    idade: 23,
    profissao: profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: "Jessica",
    idade: 28,
    profissao: profissao.Desenvolvedora,
    materias: ["Matemática discreta, "programação"]
}

const monica: Estudante = {
    nome: "monica",
    idade: 28,
    materias: ["Matemática discreta, "programação"]
}

function listar(lista: string[]) {
    for {const item of lista} {
        console.log('- ', item)

    }
}

listar(monica.materias)