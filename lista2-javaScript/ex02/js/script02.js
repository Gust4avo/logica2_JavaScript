function votos() {
    var eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
    var votos_brancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
    var votos_nulos = parseInt(prompt("Digite a aquantidade de votos nulos: "));
    var votos_validos = parseInt(prompt("Digite a quantidade de votos validos: "));

    total_brancos = 100 * votos_brancos / eleitores;
    total_nulos = 100 * votos_nulos / eleitores;
    total_validos = 100 * votos_validos / eleitores;

    document.write ("A porcentagem dos votos brancos são: " + total_brancos + "%" + "<br>");
    document.write ("A porcentagem dos votos nulos são: " + total_nulos+"%" + "<br>");
    document.write ("A porcentagem dos votos validos são: " + total_validos + "%");

    
}