type Hero = {
    name: string;
    vulgo: string;
};

function printObject(pessoa: Hero) {
    console.log(pessoa)
}

printObject({
    name: "Bruce Wayne",
    vulgo: "batman",
});

// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Gleidson";
let idade: number = 41;
let altura: number = 1.89;

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previbilidade
let produto: object = {
    name: "gleidson",
    cidade: "jatai",
    idade: 41,
}

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

// objeto tipado com presivibilidade
let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 120.45,
    unidades: 3,
}

// arrays
let dados: string[] = ["gleidson", "felipe", "ana"];
let dados2: Array<string> = ["jose", "maria", "pedro"];

let infos: (string | number)[] = ["felipe", 45, "Gleidson", 31];

// tuplas: um tipo de arry mas definido a ordem dos tipos de dados a serem posicionados no vetor.
let boleto:[string, number, number] = ["agua conta", 79.87, 255447878899654321];

// métodos de arrays
dados.push("mariana");
dados.push("bianca")

console.log("___________________________________________________________________________________________________________")
console.log(dados);

// datas
let aniversario: Date = new Date("2024/12/01 06:35:00");
console.log("___________________________________________________________________________________________________________")
console.log(aniversario.toString());

// funções
function addNumber(x: number, y: number): number {
    return (x + y);
}

let soma = addNumber(41, 5);
console.log("___________________________________________________________________________________________________________")
console.log(soma);

function addToHello(name: string): string {
    return `Hello ${name}!`;
}

console.log(addToHello("Gleidson Silva"));

// funções multitipos tipos
function callToPhone(phone: number | string): number | string {
    return phone;
}
console.log("___________________________________________________________________________________________________________")
console.log(callToPhone(64999471347));

// funções assincronas
async function getDataBaseData(id: number): Promise<number> {
    return 45;
}

// interfaces
type robot = {
    id: number;
    name: string;
}

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(name: string): string;
}

const bot: robot = {
    id: 456,
    name: "Zero"
}

const bot1: robot2 = {
    id: 63,
    name: "Megaman",
    sayHello: function (name: string): string {
        return "Hello! " + name;
    }
}

console.log("___________________________________________________________________________________________________________")
console.log(bot, bot1);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(name: string): string {
        return `Hello ${name}`;
    }
}

const pessoa: Pessoa = new Pessoa(15, "Gleidson Morais");
console.log("___________________________________________________________________________________________________________")
console.log(pessoa.sayHello(pessoa.name));


// Classes

class Character {
    protected name: string;
    protected strength: number;
    protected skill: number;

    public constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    public atack(): void {
        console.log(`${this.name} Atack with ${this.strength} points at level ${this.skill}`);
    }
}

const char1 = new Character("Nunu", 100, 78);
console.log("___________________________________________________________________________________________________________")
char1.atack();

class Wizard extends Character {
    private spell: string;
    private healthPoints: number;
    private magicPoints: number;

    public constructor(name: string, strength: number, skill: number, spell: string, healthPoints: number, magicPoints: number) {
        super(name, strength, skill);
        this.spell =spell;
        this.healthPoints = healthPoints;
        this.magicPoints = magicPoints;
    }

    public wizardAtack(): void {
        console.log(`${this.name} atack with ${this.strength} strength points casting ${this.spell} spell magic.`)
    }

    public wizarStatus(): void {
        console.log(`${this.name} has ${this.healthPoints} HP, ${this.magicPoints} MP at Level ${this.skill}.`)
    }
}

const wizard1 = new Wizard("Gandalf", 80, 64, "Dark Hole", 300, 200);
console.log("___________________________________________________________________________________________________________")
wizard1.wizardAtack();
wizard1.wizarStatus()

// Generics
function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
}

const numArray = concatArray([2, 65, 3], [41, 3]);
const stringArray = concatArray(["Pedro", "Joaquim", "Joao"], ["Maria", "Franciele"], 4578);
console.log("___________________________________________________________________________________________________________")
console.log("Utilizando arrays com tipo any()")
console.log(numArray);
console.log(stringArray);
console.log("___________________________________________________________________________________________________________")

// utilizando generics
function concatArrayV2<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArrayV2 = concatArrayV2<number[]>([1, 23, 6, 4], [96]);
const stringArrayV2 = concatArrayV2<string[]>(["Maria", "Pedro", "Lucas"], ["Thiago"]);

console.log("Utlizando arrays com generics");
console.log(numArrayV2, stringArrayV2);

// Decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {

}


// Decorators 
function apiVersion(version: string, name: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: name});
    };
}

@apiVersion("1.23.12", "java")
class Api{}

const api = new Api();
console.log(api.__version, api.__name);

// attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
};

class ApiV1 {
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const apiV1 = new ApiV1("Co");
console.log(apiV1.name);