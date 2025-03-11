// Oggetto generiDisp
const generiDisponibili = {
    AZ: "Azione",
    CO: "Commedia",
    DR: "Drammatico",
    FS: "Fantascienza",
    HO: "Horror",
    FA: "Fantasy"
};

// Oggetto filmCata
const filmCatalogati = {
    Azione: [],
    Commedia: [],
    Drammatico: [],
    Fantascienza: [],
    Horror: [],
    Fantasy: []
};

// Oggetto filmPD
const filmPerDecade = {
    "1990-1999": 0,
    "2000-2009": 0,
    "2010-2019": 0,
    "2020-2029": 0
};

let totaleFilm = 0;

let titolo;
do {
    // Richiesta del titolo del film all'utente
    titolo = prompt("Inserisci il titolo del film (digita 'STOP' per terminare):");

    // Controllo se l'utente ha digitato 'STOP' per terminare l'inserimento
    if (titolo.toUpperCase() === "STOP") {
        break;
    }

    // Richiesta delle prime due lettere del genere del film
    let lettereGenere = prompt(`Inserisci le prime due lettere del genere del film (${Object.entries(generiDisponibili).map(([key, value]) => `${key} (${value})`).join(", ")}):`).toUpperCase();
    // Ricerca del genere corrispondente
    let genere = generiDisponibili[lettereGenere];

    // Se il genere è valido
    if (genere) {
        let anno;
        // Ciclo do-while per richiedere l'anno di uscita del film
        do {
            anno = parseInt(prompt("Inserisci l'anno di uscita del film:"));
            // Controllo se l'anno è valido
            if (isNaN(anno) || anno < 1990) {
                alert("L'anno inserito non è valido. Per favore, inserisci un numero intero.");
            }
        } while (isNaN(anno) || anno < 1990);
    
        // Aggiunta del film al catalogo
        filmCatalogati[genere].push({ titolo, anno });
        totaleFilm++;
    
        // Incremento del contatore per la decade corrispondente
        if (anno >= 1990 && anno <= 1999) {
            filmPerDecade["1990-1999"]++;
        } else if (anno >= 2000 && anno <= 2009) {
            filmPerDecade["2000-2009"]++;
        } else if (anno >= 2010 && anno <= 2019) {
            filmPerDecade["2010-2019"]++;
        } else if (anno >= 2020 && anno <= 2029) {
            filmPerDecade["2020-2029"]++;
        }
    } else {
        // Avviso se il genere non è disponibile
        alert("Film non inserito, categoria non disponibile");
    }
} while (true); 



// stampa catologo
document.write("<h1>Catalogo Film</h1>");
document.write("<table><tr><th>Genere</th><th>Film</th></tr>");
for (const genere in filmCatalogati) {
    if (filmCatalogati[genere].length > 0) {
        document.write(`<tr><td>${genere}</td><td><ul>`);
        filmCatalogati[genere].forEach(film => {
            document.write(`<li>${film.titolo} (${film.anno})</li>`);
        });
        document.write(`</ul></td></tr>`);
    }
}
document.write("</table>");


// stampa statische
document.write("<h1>Statistiche</h1>");
document.write(`<table><tr><th>Numero totale di film</th><td>${totaleFilm}</td></tr></table>`);


//stampa genere
document.write("<h2>Film per genere</h2>");
document.write("<table><tr><th>Genere</th><th>Numero di film</th></tr>");
for (const genere in filmCatalogati) {
    document.write(`<tr><td>${genere}</td><td>${filmCatalogati[genere].length}</td></tr>`);
}
document.write("</table>");



//stampa distribuzione
document.write("<h2>Distribuzione per decadi</h2>");
document.write("<table><tr><th>Decade</th><th>Numero di film</th></tr>");
for (const decade in filmPerDecade) {
    document.write(`<tr><td>${decade}</td><td>${filmPerDecade[decade]}</td></tr>`);
}
document.write("</table>");