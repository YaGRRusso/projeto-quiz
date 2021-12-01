import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual a maneira correta de se escrever um IF?', [
        RespostaModel.errada('if x = 10 {}'),
        RespostaModel.errada('if x = 10 then{}'),
        RespostaModel.errada('if (x = 10) then{}'),
        RespostaModel.certa('if (x = 10) {}'),
    ]),
    new QuestaoModel(202, 'Em que <tag> HTML fica o JavaScript?', [
        RespostaModel.errada('<js>'),
        RespostaModel.errada('<code>'),
        RespostaModel.errada('<javascript>'),
        RespostaModel.certa('<script>'),
    ]),
    new QuestaoModel(203, 'Como referenciar um script chamado xxx.js?', [
        RespostaModel.errada('<... name="xxx.js">'),
        RespostaModel.errada('<... id="xxx.js">'),
        RespostaModel.errada('<... href="xxx.js">'),
        RespostaModel.certa('<... src="xxx.js">'),
    ]),
    new QuestaoModel(204, 'Como se escreve um alerta em JavaScript?', [
        RespostaModel.errada('msg(...)'),
        RespostaModel.errada('msgBox(...)'),
        RespostaModel.errada('alertBox(...)'),
        RespostaModel.certa('alert(...)'),
    ]),
    new QuestaoModel(205, 'Qual a maneira correta de se escrever um IF NOT?', [
        RespostaModel.errada('if x != 10 {}'),
        RespostaModel.errada('if x != 10 then{}'),
        RespostaModel.errada('if (x != 10) then{}'),
        RespostaModel.certa('if (x != 10) {}'),
    ]),
    new QuestaoModel(206, 'Como se cria um laço de repetição FOR?', [
        RespostaModel.errada('for (i <= 5; i++)'),
        RespostaModel.errada('for (i = 0; i <= 5)'),
        RespostaModel.errada('for i = 1 to 5'),
        RespostaModel.certa('for (i = 0; i <= 5; i++)'),
    ]),
    new QuestaoModel(207, 'Qual a maneira correta de se escrever um Array?', [
        RespostaModel.errada('var colors = "red" "green" "blue"'),
        RespostaModel.errada('var colors = (1:"red" 2:"green" 3:"blue")'),
        RespostaModel.errada('var colors = 1 = ("red") 2 = ("green") 3 = ("blue")'),
        RespostaModel.certa('var colors = "red" "green" "blue"]'),
    ]),
    new QuestaoModel(208, 'Qual declaração dispara um evento ao clicar sobre um elemento?', [
        RespostaModel.errada('onMouseOver'),
        RespostaModel.errada('onChange'),
        RespostaModel.errada('onMouseOver'),
        RespostaModel.certa('onClick'),
    ]),
    new QuestaoModel(209, 'Como declarar um valor a uma variável?', [
        RespostaModel.errada('x => 10'),
        RespostaModel.errada('x == 10'),
        RespostaModel.errada('x === 10'),
        RespostaModel.certa('x = 10'),
    ]),
    new QuestaoModel(210, 'Como se comenta em JavaScript?', [
        RespostaModel.errada('<!-- comment -->'),
        RespostaModel.errada('# comment'),
        RespostaModel.errada('/* comment */'),
        RespostaModel.certa('// comment'),
    ]),
    new QuestaoModel(211, 'Qual a forma incorreta de se declarar uma função em JavaScript?', [
        RespostaModel.errada('() => {...}'),
        RespostaModel.errada('function x() = {return ...}'),
        RespostaModel.errada('x => {...}'),
        RespostaModel.certa('function () => return ...'),
    ]),
    new QuestaoModel(212, 'Como é declarada uma variável sem valor?', [
        RespostaModel.errada('indefined'),
        RespostaModel.errada('0'),
        RespostaModel.errada('" "'),
        RespostaModel.certa('null'),
    ]),
    new QuestaoModel(213, 'Qual variável não pode mudar seu valor?', [
        RespostaModel.errada('let'),
        RespostaModel.errada('var'),
        RespostaModel.errada('$x'),
        RespostaModel.certa('const'),
    ]),
    new QuestaoModel(214, 'Como definir de X é maior do que Y?', [
        RespostaModel.errada('X < Y'),
        RespostaModel.errada('X <= Y'),
        RespostaModel.errada('X >= Y'),
        RespostaModel.certa('X > Y'),
    ]),
    new QuestaoModel(215, 'Qual gera um numero aleatorio?', [
        RespostaModel.errada('Math.round()'),
        RespostaModel.errada('Math.ceil()'),
        RespostaModel.errada('Math.max()'),
        RespostaModel.certa('Math.random()'),
    ]),
    new QuestaoModel(216, 'Yago é um Otimo Dev', [
        RespostaModel.errada('false'),
        RespostaModel.errada('false'),
        RespostaModel.errada('false'),
        RespostaModel.certa('true'),
    ]),
]

export default questoes