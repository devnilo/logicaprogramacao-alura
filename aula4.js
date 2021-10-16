
    // aqui a função mostra como melhorar seu código sem precisar escrever document.write toda vez
    function mostra(mostraFrase){
        document.write(mostraFrase);
        pulaLinha();
    }

    function pulaLinha(){
        document.write("<br>");
    }

    var ano = 2016;

    // document.write("Flávio tem " + (ano - 1977) + " anos");
    mostra("Flávio tem " + (ano - 1977) + " anos");

    // document.write("Joaquim tem " + (ano - 1996) + " anos");
    mostra("Joaquim tem " + (ano - 1996) + " anos");

    // document.write("Barney tem " + (ano - 1976) + " anos");
    mostra("Barney tem " + (ano - 1976) + " anos");
    pulaLinha();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // desafio - Escreva um programa que exiba a mensagem "Nossa diferença de idade é", concatenando o resultado da subtração da sua idade com a do seu irmão

    function mostrarIdadeIrmaos(mostrarIdade){
        document.write(mostrarIdade);
        pulaLinha();
    }

    function exibirDiferencaIrmaos(exibirDiferenca){
        document.write(exibirDiferenca);
        pulaLinha();
    }

    var minhaIdade = 24;
    var idadeIrmao = 32;
    var diferencaIdade = minhaIdade - idadeIrmao;

    mostrarIdadeIrmaos("Eu tenho " + minhaIdade + " anos")
    mostrarIdadeIrmaos("Meu irmão tem " + idadeIrmao + " anos")
    pulaLinha();

    exibirDiferencaIrmaos("A diferença da minha idade para do meu irmão é de " + diferencaIdade + " anos");
    pulaLinha();
    pulaLinha();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //desafio - Em média, um casal tem filhos quando atinge a idade de 28 anos. Seguindo essa média, se os portugueses chegaram em 1500 no Brasil, então, a primeira geração de brasileiros surgiu em 1528, a segunda em 1556 e assim por diante. Desde 1500 até o ano atual, quantas gerações se passaram?

    function exibirGeracoes(anosPassados){
        document.write(anosPassados);
        pulaLinha();
    }

    function totalGeracoes(quantidadeGeracoes){
        document.write(quantidadeGeracoes);
        pulaLinha();
    }

    var anoChegada = 1500;
    var anoAtual = 2021;
    var anosGeracoes = anoAtual - anoChegada;
    var geracoesTotais = anosGeracoes / 28;

    exibirGeracoes("Os portugueses chegaram nos anos " + anoChegada);
    exibirGeracoes("O ano que estamos atualmente é " + anoAtual);
    pulaLinha();

    totalGeracoes("Então temos " + Math.trunc(geracoesTotais) + " gerações de Brasileiros desde que os Portugueses chegaram ao Brasil")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function pulaLinha2() {
        document.write("<br><br>");
    }

    function mostra(frase) {
        document.write("<big>" + frase + "</big>");
        pulaLinha2();
    }

    var ano2 = 2019;

    pulaLinha2();
    pulaLinha2();

    mostra("Eu nasci em : " + (ano2 - 25));
    mostra("Adriano nasceu em : " + (ano2 - 26));
    mostra("Paulo nasceu em : " + (ano2 - 32));
