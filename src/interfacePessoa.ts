interface Pessoa {
    id: number;
    nome: string;
    estadoCivil: EstadoCivil;
    endereco: Endereco;
    dataNascimento?: Date;
}

interface Funcionario {
    id: number;
    nome: string;
    estadoCivil: EstadoCivil;
    endereco: Endereco;
    dataNascimento?: Date;
    dataContratacao?:Date;
}

interface Produto {
    id: number,
    nome: string;
}


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
    id: 303030,
    nome: "fellyph cintra",
    estadoCivil: EstadoCivil.Casado,
    endereco: enderecoFellyph
};

let fellyphFucionaio:Funcionario = {
    id: 303030,
    nome: "fellyph cintra",
    estadoCivil: EstadoCivil.Casado,
    endereco: enderecoFellyph,
    dataContratacao: new Date('01-01-2020')
};


function saudacao<T extends Pessoa>( pessoa:T ):string {
    let mensagem = `Olá ${pessoa.nome}`;
    return mensagem;
}


function clone<T1, T2>(entrada:T1):T2 {
    return Object.apply({}, entrada);
}

const fellyphClone:Pessoa = clone<Pessoa, Pessoa>(fellyph);
const copiaEndereco:Endereco = clone(enderecoFellyph);
const mensagem:string = saudacao(fellyphFucionaio);