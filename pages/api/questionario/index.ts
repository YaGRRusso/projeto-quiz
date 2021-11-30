import embaralhar from "../../../functions/arrays"
import questoes from "../bancoDeQuestoes"

export default function questionario(req, res) {
  const ids = questoes.map((q) => q.id)

  res.status(200).json(embaralhar(ids))
}