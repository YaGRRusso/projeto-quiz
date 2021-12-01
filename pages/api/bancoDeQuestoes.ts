import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [

  new QuestaoModel(0, 'Qual a maneira correta de se escrever um IF?', [
    RespostaModel.errada('if x = 10 {}'),
    RespostaModel.errada('if x = 10 then{}'),
    RespostaModel.errada('if (x = 10) then{}'),
    RespostaModel.certa('if (x = 10) {}')
  ]),

  new QuestaoModel(1, 'Em que <tag> HTML fica o JavaScript?', [
    RespostaModel.errada('<js>'),
    RespostaModel.errada('<code>'),
    RespostaModel.errada('<javascript>'),
    RespostaModel.certa('<script>')
  ]),

  new QuestaoModel(2, 'Como referenciar um script chamado xxx.js?', [
    RespostaModel.errada('<... name="xxx.js">'),
    RespostaModel.errada('<... id="xxx.js">'),
    RespostaModel.errada('<... href="xxx.js">'),
    RespostaModel.certa('<... src="xxx.js">')
  ]),

  new QuestaoModel(3, 'Como se escreve um alerta em JavaScript?', [
    RespostaModel.errada('msg(...)'),
    RespostaModel.errada('msgBox(...)'),
    RespostaModel.errada('alert(...)'),
    RespostaModel.certa('alertBox(...)')
  ]),

  new QuestaoModel(4, 'Qual a maneira correta de se escrever um IF NOT?', [
    RespostaModel.errada('if x != 10 {}'),
    RespostaModel.errada('if x != 10 then{}'),
    RespostaModel.errada('if (x != 10) then{}'),
    RespostaModel.certa('if (x != 10) {}')
  ]),

  new QuestaoModel(5, 'Como se cria um laço de repetição FOR?', [
    RespostaModel.errada('for (i <= 5; i++)'),
    RespostaModel.errada('for (i = 0; i <= 5)'),
    RespostaModel.errada('for i = 1 to 5'),
    RespostaModel.certa('for (i = 0; i <= 5; i++)')
  ]),

  new QuestaoModel(6, 'Qual a maneira correta de se escrever um Array?', [
    RespostaModel.errada('var colors = "red", "green", "blue"'),
    RespostaModel.errada('var colors = (1:"red", 2:"green", 3:"blue")'),
    RespostaModel.errada('var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'),
    RespostaModel.certa('var colors = ["red", "green", "blue"]')
  ]),

  new QuestaoModel(7, 'Qual declaração dispara um evento ao clicar sobre um elemento?', [
    RespostaModel.errada('onMouseOver'),
    RespostaModel.errada('onChange'),
    RespostaModel.errada('onMouseClick'),
    RespostaModel.certa('onClick ')
  ]),

  new QuestaoModel(8, 'Como declarar um valor a uma variável?', [
    RespostaModel.errada('x => 10'),
    RespostaModel.errada('x == 10'),
    RespostaModel.errada('x === 10'),
    RespostaModel.certa('x = 10')
  ]),

  new QuestaoModel(9, 'Como se comenta em JavaScript?', [
    RespostaModel.errada('<!-- comment -->'),
    RespostaModel.errada('#comment'),
    RespostaModel.errada('/* comment */'),
    RespostaModel.certa('//comment')
  ]),

  new QuestaoModel(10, 'Qual a forma incorreta de se declarar uma função em JavaScript?', [
    RespostaModel.errada('() => {...}'),
    RespostaModel.errada('function x() = {return ...}'),
    RespostaModel.errada('x => {...}'),
    RespostaModel.certa('function () => return ...')
  ]),

]

export default questoes