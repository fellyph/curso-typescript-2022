interface Pessoa {
    rg: number;
    nome: string;
    endereco: Endereco;
    dataNascimento?: Date;
}

interface Endereco {
    rua: string;
    cidade: string;
    numero: string;
    estado: string;
    apartamento?: string;
}

let fellyph:Pessoa = {
    rg: 303030,
    nome: "fellyph cintra",
    endereco: "lagos, portugal"
};
