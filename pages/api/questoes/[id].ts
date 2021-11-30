import questoes from '../bancoDeQuestoes' 

export default function handler(req, res) {
  const id = +req.query.id

  const questaoSelec = questoes.filter(quest => quest.id === id)

  if (questaoSelec.length === 1) {
    const qs = questaoSelec[0].embaralharRespostas()
    const obj = qs.responderCom(0).paraObjeto()
    res.status(200).json(obj)
  } else {
    res.status(204).send()
  }

}