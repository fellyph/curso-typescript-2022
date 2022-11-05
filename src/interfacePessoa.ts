interface Pessoa {
    rg: number;
    nome: nomePessoa;
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

let fellyph:Pessoa = {
    rg: 303030,
    nome: "fellyph cintra",
    endereco: {
        estado: "faro",
        rua: "rua bonita",
        cidade: "lagos",
        numero: "31-b"
    }
};
