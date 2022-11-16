function valor(){
    var valor = parseFloat(prompt("Digite o valor da prestação: "));
    var tempo = parseFloat(prompt("Digite o tempo de atraso: "));
    var taxa = parseFloat(prompt("Digite o valor da taxa de atraso: "));

    aumento = (valor * taxa / 100) * tempo;
    prestacao = valor + (valor * taxa / 100) * tempo;

    alert("A prestação em atraso tera um juros de " + aumento + " A prestação tera um total de " + prestacao)
}