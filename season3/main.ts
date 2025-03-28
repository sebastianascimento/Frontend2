

class Veiculo {
    marca : string;
    modelo : string;
    ano : number;

    constructor(marca:string , modelo:string , ano:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    description() : string {
        return  `${this.marca} ${this.modelo} ${this.ano}`;         
    }
}

class Carro extends Veiculo {
    portas: number;

    constructor(marca:string , modelo:string , ano : number, portas: number ) {
        super(marca , modelo , ano );
        this.portas = portas
    }

    description() : string{
        return `${super.description()}, ${this.portas} portas`;
    }
}

const meucarro = new Carro ("Toyota" , "Corolla" , 2022 , 4);

console.log(meucarro.description());




