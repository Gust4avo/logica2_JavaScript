function salario(){

    var salario = parseFloat(prompt("Digite o valor do seu salario "));
    var reajuste = parseFloat(prompt("Digite o o valor da porcentagem"));

    var novo_salario = salario + (salario * reajuste / 100)
    alert("O novo salario é de R$ " + novo_salario)
}