var anoAtual = 2021;

// desafio
document.write("Eu acertei: " + (15/50)*100 + "% da prova");
document.write("<br>");
document.write("<br>");


document.write("Flávio tem " + (anoAtual - 1977) + " anos" + ("<br>"));
document.write("Joaquim nasceu em " + (anoAtual - 1990) + " anos" + ("<br>"));

// aqui eu posso mudar o valor do ano usando apenas anoAtual = 0000 por exemplo
anoAtual = 2030;
// repare que nao foi colocado nenhuma variável na frente, apartir daqui todas variáveis que eu chamar de anoAtual será no valor de 2030 e não 2021 como foi chamada no começo do código
document.write("Barney nasceu em " + (anoAtual - 1999) + " anos" + ("<br>"));
document.write("Junior nasceu em " + (anoAtual - 1977) + " anos" + ("<br>"));
document.write("<br>");

// desafio - Sabendo que "n" pode ser qualquer número de 1 a 5 (número que você vai atribuir), o que precisa ser feito para o código funcionar?
var n = 2;
document.write("O resultado da fórmula é : " + n * (10 / 20)  );
// resposta: criei uma váriavel com um valor para que amanda consiga o ponto que faltava para ela passar de ano = (var n = 2;)

// desafio - Sabemos que o código calcula a média de três números. Mas o que eles significam? Sabemos que o código calcula a média de três números. Mas o que eles significam?
document.write( (12 + 15 + 13) / 3);

// sabendo que os valores de cada numero são as idades das filhas de Roy eu irei criar uma variável pra cada filha
var idadeLinda = 12;
var idadeGuaraciara = 15;
var idadePerola = 13;

// assim o código ficará
document.write((idadeLinda + idadeGuaraciara + idadePerola) / 3);

// agora Roy viu que poderia eliminar os parênteses na instrução que imprime a média das idades
// então irei criar uma variável que faça a soma de todas as idades das filhas e o código ficará assim:
var idadeLinda = 12;
var idadeGuaraciara = 15;
var idadePerola = 13;
var totalIdades = idadeLinda + idadeGuaraciara + idadePerola;

document.write(totalIdades / 3);


