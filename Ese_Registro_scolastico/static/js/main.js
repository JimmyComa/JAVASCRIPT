let studenti = [];

while (true) {
    let nome = prompt("Come si chiama lo studente?");

    let voto = Number(prompt("Che voto ha preso " + nome + "?"));
    let giudizio;

    if (voto >= 1 && voto <= 5) {
        giudizio = "insufficiente";

    } else if (voto == 6) {
        giudizio = "sufficiente";

    } else if (voto == 7) {
        giudizio = "discreto";

    } else if (voto == 8) {
        giudizio = "buono";

    } else if (voto == 9) {
        giudizio = "distinto";

    } else if (voto == 10) {
        giudizio = "ottimo";
        
    } else {
        giudizio = "voto non valido";
    }

    studenti.push({ nome: nome, giudizio: giudizio });

    let continua = prompt("Vuoi inserire un altro studente? (s/n)");
    if (continua.toLowerCase() !== 's') break;
}

document.write("<table><tr><th>Nome</th><th>Giudizio</th></tr>");

studenti.forEach(studente => {
    document.write("<tr><td>" + studente.nome + "</td><td>" + studente.giudizio + "</td></tr>");
});
document.write("</table>");