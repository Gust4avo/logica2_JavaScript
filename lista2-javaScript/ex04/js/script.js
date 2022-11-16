function valor_final(){

var fabricante = parseFloat(prompt("Digite o valor de fabrica do carro"));

car_distribuidora = fabricante * 28/100;
imposto = fabricante * 45 / 100;
custo_final = car_distribuidora + imposto + fabricante;

alert("O valor final do carro com a porcentagem dos impostos e da distribuidora é R$" + custo_final);

}