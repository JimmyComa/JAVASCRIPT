// Versione base

let partecipanti = [];
let continua;


do {
    let nome = prompt("Nome partecipante");
    partecipanti.push({nome : nome});

    continua = prompt("Vuoi inserire un altro partecipante? (s/n)");
    if (continua.toLowerCase() === 'n' && partecipanti.length <= 10) {
        alert("Non sono state raggiunte le adesioni minime. Inserisci almeno 10 partecipanti.");
        continua = 's';} 
        else{
            while (continua.toLowerCase() !== 's' && continua.toLowerCase() !== 'n') {
                continua = prompt("Risposta non valida. Vuoi inserire un altro partecipante? (s/n)");
            }
        }
} while (continua.toLowerCase() === 's');

// if (partecipanti.length >= 10) {
//     let vince = Math.floor(Math.random() * partecipanti.length);
//     document.write("<table><tr><th>Vincitore</th></tr>");
//     document.write("<tr><td>" + partecipanti[vince].nome + "</td></tr>");
//     document.write("</table>");
// } else {
//     alert("Non sono state raggiunte le adesioni minime");
// }

// Versione pro


if (partecipanti.length >= 10) {
    let vincitori = [];
    while (vincitori.length < 3) {
        let i = Math.floor(Math.random() * partecipanti.length);
        if (!vincitori.includes(partecipanti[i])) {
            vincitori.push(partecipanti[i]);
        }
    }

    document.write("<table><tr><th>Posizione</th><th>Nome</th></tr>");
    vincitori.forEach((vincitore, i) => {
        document.write("<tr><td>" + (i + 1) + "°</td><td>" + vincitore.nome + "</td></tr>");
    });
    document.write("</table>");
}
