import embaralhar from "../functions/arrays"
import RespostaModel from "./resposta"

export default class QuestaoModel {
  #id: number
  #enunciado: string
  #respostas: RespostaModel[]
  #acertou: boolean

  constructor (id: number, enunciado: string, respostas: RespostaModel[], acertou= false) {
    this.#id = id
    this.#enunciado = enunciado
    this.#respostas = respostas
    this.#acertou = acertou
  }

  
  public get id() {
    return this.#id
  }

  public get enunciado() {
    return this.#enunciado
  }

  public get respostas() {
    return this.#respostas
  }

  public get acertou() {
    return this.#acertou
  }

  public get respondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true
    } return false
  }

  responderCom(indice: number): QuestaoModel {
    const acertou = this.#respostas[indice]?.certa
    const respostas = this.#respostas.map((resp, i) => {
      const respSelec = indice === i
      const deveRevelar = respSelec || resp.certa
      return deveRevelar ? resp.revelar() : resp
    })
    return new QuestaoModel(this.#id, this.#enunciado, respostas, acertou)
  }

  embaralharRespostas(): QuestaoModel {
    let embaralhado = embaralhar(this.#respostas)
    return new QuestaoModel(this.#id, this.#enunciado, embaralhado, this.#acertou)
  }

  paraObjeto () {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map(r => r.paraObjeto()),
      acertou: this.#acertou,
    }
  }
}