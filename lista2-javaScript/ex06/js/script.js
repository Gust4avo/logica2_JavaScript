function valor(){

    var fahrenheit = parseFloat(prompt("Digite a Fº: "));

    var conversao = (fahrenheit - 32) * (5/9);
    alert("A tempuratura Fº" + fahrenheit + " em Cº" + conversao);
}