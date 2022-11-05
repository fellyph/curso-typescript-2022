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

let fellyph:Pessoa = {
    rg: 303030,
    nome: "fellyph cintra",
    estadoCivil: EstadoCivil.Casado,
    endereco: {
        estado: "faro",
        rua: "rua bonita",
        cidade: "lagos",
        numero: "31-b"
    }
};

function saudacao(pessoa:Pessoa, callback:() => Pessoa ):string {
    let mensagem = `Olá ${pessoa.nome}`;
    return mensagem;
}
