function sucessor(){
    var ano = parseInt(prompt("Digite a sua idade em anos: "));
    var mes = parseInt(prompt("Digite quantos meses se passou desde seu ultimo aniversario"));
    var dia = parseInt(prompt("Digitw quantos dias se passou desde seu ultimo mesversario"));
    idade = (ano * 365) + (mes * 30) + dia
    alert("Voçê esta vivo a " + idade + " dias")
}
