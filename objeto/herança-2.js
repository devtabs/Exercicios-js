// cadeia de prototipos (prototype chain)

Object.prototype.attr0= '0' // não faça isso

const avo = {attr1: 'A'}// aponta para Object.prototype
const pai = {__proto__: avo, attr2:'B'}
const filho = {__proto__: pai, attr3:'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)


const carro ={
    velAtual: 0,
    velMaxima:200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        }else{
            this.velAtual= this.velMaxima
        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.velMaxima} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 //shadowing
}

const volvo = {
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`//super chama o metodo do prototipo
    }
}

Object.setPrototypeOf(ferrari, carro)// estabeleceu relação entre ferrari e carro (ferrari tem carro como prototipo)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())