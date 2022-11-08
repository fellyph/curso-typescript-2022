interface Pessoa {
    rg: number;
    nome: nomePessoa;
    estadoCivil: EstadoCivil;
    endereco: Endereco;
    dataNascimento?: Date;
}

type nomePessoa = string;

interface Endereco {
    rua: string;
    cidade: string;
    numero: string;
    estado?: string;
    apartamento?: string;
}

enum EstadoCivil {
    Solteiro = "SOLTEIRO",
    Casado = "CASADO",
    Divorciado = "DIVORCIADO"
}

let enderecoFellyph:Endereco = {
    estado: "faro",
    rua: "rua bonita",
    cidade: "lagos",
    numero: "31-b"
}

let fellyph:Pessoa = {
    rg: 303030,
    nome: "fellyph cintra",
    estadoCivil: EstadoCivil.Casado,
    endereco: enderecoFellyph
};


function saudacao(pessoa:Pessoa, callback:() => Pessoa ):string {
    let mensagem = `Olá ${pessoa.nome}`;
    return mensagem;
}


function clone<T>(entrada:T):T {
    return Object.apply({}, entrada);
}

const fellyphClone:Pessoa = clone(fellyph);
const copiaEndereco:Endereco = clone(enderecoFellyph);