interface Pessoa {
    id: number;
    nome: string;
    estadoCivil: EstadoCivil;
    endereco: Endereco;
    dataNascimento?: Date;
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

let fellyph:Pessoa = {
    id: 303030,
    nome: "fellyph cintra",
    estadoCivil: EstadoCivil.Casado,
    endereco: {
        estado: "faro",
        rua: "rua bonita",
        cidade: "lagos",
        numero: "31-b"
    }
};

let bolsa:Produto = {
    id: 202,
    nome: "Bolsa Zara"
}

function saudacao<T extends Produto>(item:T ):string {
    let mensagem = `Olá ${item.nome}`;
    return mensagem;
}

let mensagemPessoa = saudacao(fellyph);
let mensagemBolsa = saudacao(bolsa);
