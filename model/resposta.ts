export default class RespostaModel {
  #valor: string
  #certa: boolean
  #revelada: boolean

  constructor(valor: string, certa: boolean, revelada= false) {
    this.#valor = valor
    this.#certa = certa
    this.#revelada = revelada
  }

  static certa(value: string) {
    return new RespostaModel(value, true)
  }

  static errada(value: string) {
    return new RespostaModel(value, false)
  }

  public get valor() {
    return this.#valor
  }

  public get certa() {
    return this.#certa
  }

  public get revelada() {
    return this.#revelada
  }

  revelar(): RespostaModel {
    return new RespostaModel(this.#valor, this.#certa, true)
  }

  paraObjeto () {
    return {
      valor: this.#valor,
      certa: this.#certa,
      revelada: this.#revelada,
    }
  }
}