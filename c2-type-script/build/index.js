"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printObject(pessoa) {
    console.log(pessoa);
}
printObject({
    name: "Bruce Wayne",
    vulgo: "batman",
});
// tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Gleidson";
let idade = 41;
let altura = 1.89;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previbilidade
let produto = {
    name: "gleidson",
    cidade: "jatai",
    idade: 41,
};
// objeto tipado com presivibilidade
let meuProduto = {
    nome: "Tenis",
    preco: 120.45,
    unidades: 3,
};
// arrays
let dados = ["gleidson", "felipe", "ana"];
let dados2 = ["jose", "maria", "pedro"];
let infos = ["felipe", 45, "Gleidson", 31];
// tuplas: um tipo de arry mas definido a ordem dos tipos de dados a serem posicionados no vetor.
let boleto = ["agua conta", 79.87, 255447878899654321];
// métodos de arrays
dados.push("mariana");
dados.push("bianca");
console.log("___________________________________________________________________________________________________________");
console.log(dados);
// datas
let aniversario = new Date("2024/12/01 06:35:00");
console.log("___________________________________________________________________________________________________________");
console.log(aniversario.toString());
// funções
function addNumber(x, y) {
    return (x + y);
}
let soma = addNumber(41, 5);
console.log("___________________________________________________________________________________________________________");
console.log(soma);
function addToHello(name) {
    return `Hello ${name}!`;
}
console.log(addToHello("Gleidson Silva"));
// funções multitipos tipos
function callToPhone(phone) {
    return phone;
}
console.log("___________________________________________________________________________________________________________");
console.log(callToPhone(64999471347));
// funções assincronas
function getDataBaseData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return 45;
    });
}
const bot = {
    id: 456,
    name: "Zero"
};
const bot1 = {
    id: 63,
    name: "Megaman",
    sayHello: function (name) {
        return "Hello! " + name;
    }
};
console.log("___________________________________________________________________________________________________________");
console.log(bot, bot1);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello(name) {
        return `Hello ${name}`;
    }
}
const pessoa = new Pessoa(15, "Gleidson Morais");
console.log("___________________________________________________________________________________________________________");
console.log(pessoa.sayHello(pessoa.name));
// Classes
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    atack() {
        console.log(`${this.name} Atack with ${this.strength} points at level ${this.skill}`);
    }
}
const char1 = new Character("Nunu", 100, 78);
console.log("___________________________________________________________________________________________________________");
char1.atack();
class Wizard extends Character {
    constructor(name, strength, skill, spell, healthPoints, magicPoints) {
        super(name, strength, skill);
        this.spell = spell;
        this.healthPoints = healthPoints;
        this.magicPoints = magicPoints;
    }
    wizardAtack() {
        console.log(`${this.name} atack with ${this.strength} strength points casting ${this.spell} spell magic.`);
    }
    wizarStatus() {
        console.log(`${this.name} has ${this.healthPoints} HP, ${this.magicPoints} MP at Level ${this.skill}.`);
    }
}
const wizard1 = new Wizard("Gandalf", 80, 64, "Dark Hole", 300, 200);
console.log("___________________________________________________________________________________________________________");
wizard1.wizardAtack();
wizard1.wizarStatus();
// Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([2, 65, 3], [41, 3]);
const stringArray = concatArray(["Pedro", "Joaquim", "Joao"], ["Maria", "Franciele"], 4578);
console.log("___________________________________________________________________________________________________________");
console.log("Utilizando arrays com tipo any()");
console.log(numArray);
console.log(stringArray);
console.log("___________________________________________________________________________________________________________");
// utilizando generics
function concatArrayV2(...itens) {
    return new Array().concat(...itens);
}
const numArrayV2 = concatArrayV2([1, 23, 6, 4], [96]);
const stringArrayV2 = concatArrayV2(["Maria", "Pedro", "Lucas"], ["Thiago"]);
console.log("Utlizando arrays com generics");
console.log(numArrayV2, stringArrayV2);
// Decorators
function ExibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome
], Funcionario);
// Decorators 
function apiVersion(version, name) {
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: name });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.23.12", "java")
], Api);
const api = new Api();
console.log(api.__version, api.__name);
