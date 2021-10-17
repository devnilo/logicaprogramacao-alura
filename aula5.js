    function pulaLinha(){
        document.write("<br>");
    }

    function mostra(frase){
        document.write(frase);
        pulaLinha();
    }

// calculando IMC
    function calculaImc(peso, altura){
        return peso / (altura * altura);
    }

    var imcDanilo = calculaImc(75, 1.75);
    var imcAmigo = calculaImc(65, 1.70);
    var totalImc = imcDanilo + imcAmigo;

    mostra(imcDanilo);
    mostra(imcAmigo);
    document.write("A soma dos IMC's é " + totalImc)

// interagindo com o usuário

    var nomeInformado = prompt("Informe seu nome")
    var pesoInformado = prompt(nomeInformado + " Informe seu peso");
    var alturaInformada = prompt(nomeInformado + " Informe sua altura");

    var imc = calculaImc(pesoInformado, alturaInformada);

    pulaLinha();
    pulaLinha();
    document.write(nomeInformado + " ,o calculo do seu IMC é de " + imc)
