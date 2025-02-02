function MeuObjeto (){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome} !`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {} //objeto
obj3.__proto__ = MeuObjeto.prototype // esta mudando a referencia obj3 de Object.prototype para MeuObjeto.prototype

obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

//MeuObjeto -> Função -> prototype -> MeuObjeto.prototype (possui atributos)(-> 'aponta para')
//MeuObjeto.prototype ->(objeto) __proto__ -> Function.prototype -> Object.prototype