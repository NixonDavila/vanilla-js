class contador {
  constructor() {
    this.valor = 0;
  }


  siguiente(){
    this.valor ++
    return  this.valor
  }
}

// Inserte el código aquí
const instancia = new contador()
console.log(instancia.siguiente());

// export { instancia }