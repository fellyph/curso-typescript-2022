interface Pessoa {
    id: number;
    nome: string;
    estadoCivil: EstadoCivil;
    endereco: Endereco;
    dataNascimento?: DataString;
}

interface Funcionario {
    id: number;
    nome: string;
    estadoCivil: EstadoCivil;
    endereco: Endereco;
    dataNascimento?: DataString;
    dataContratacao?: DataString;
}

type DataString = Date | string;
type ProdutoComEndereco = Produto & Endereco;

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

// Trabalhando com enum
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

// trabalhando com generics, garantindo propriedades
function saudacao<T extends Pessoa>( pessoa:T ):string {
    let mensagem = `Olá ${pessoa.nome}`;
    return mensagem;
}

// exemplo de generics com dois tipos de propriedades
function clone<T1, T2>(entrada:T1):T2 {
    return Object.apply({}, entrada);
}

const fellyphClone:Pessoa = clone<Pessoa, Pessoa>(fellyph);
const copiaEndereco:Endereco = clone(enderecoFellyph);
const mensagem:string = saudacao(fellyphFucionaio);

// Exemplo com keyof
function getValue<T>(fonte:T, nomePropriedade:keyof T) {
    return fonte[nomePropriedade];
}

const endereco = getValue(fellyph, 'endereco');
const cidadeFellyph = getValue(enderecoFellyph, 'cidade');