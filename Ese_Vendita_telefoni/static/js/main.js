// Seleziona il contenitore delle card
let cardW = document.querySelector('#cardWrapper');

// Definisce l'elenco dei telefoni
const telefoni = [
    {
        nome: "Samsung Galaxy S23",
        colore: "Nero",
        memoriaEsterna: "Non supportata",
        capacitaMemorizzazione: "128 GB",
        ram: "8 GB",
        dualSim: true,
        fotocamera: "50 MP",
        batteria: "3900 mAh",
        prezzo: "949€",
        src: "media/Samsung-Galaxy-S23.jpg"
    },
    {
        nome: "iPhone 14 Pro",
        colore: "Viola Scuro",
        memoriaEsterna: "Micro SD",
        capacitaMemorizzazione: "256 GB",
        ram: "6 GB",
        dualSim: true,
        fotocamera: "48 MP",
        batteria: "3200 mAh",
        prezzo: "1399€",
        src: "media/iPhone_14_Pro.jpg"
    },
    {
        nome: "Xiaomi 13 Pro",
        colore: "Bianco",
        memoriaEsterna: "Non supportata",
        capacitaMemorizzazione: "256 GB",
        ram: "12 GB",
        dualSim: true,
        fotocamera: "50 MP (tripla)",
        batteria: "4820 mAh",
        prezzo: "1299€",
        src: "media/xiaomi-13-pro.jpg"
    },
    {
        nome: "Google Pixel 7 Pro",
        colore: "Nero Ossidiana",
        memoriaEsterna: "Non supportata",
        capacitaMemorizzazione: "128 GB",
        ram: "12 GB",
        dualSim: true,
        fotocamera: "50 MP",
        batteria: "5000 mAh",
        prezzo: "899€",
        src: "media/google-pixel7-pro.jpg"
    },
    {
        nome: "OnePlus 11",
        colore: "Verde",
        memoriaEsterna: "Micro SD",
        capacitaMemorizzazione: "256 GB",
        ram: "16 GB",
        dualSim: false,
        fotocamera: "50 MP",
        batteria: "5000 mAh",
        prezzo: "849€",
        src: "media/OnePlus-11.jpg"
    },
    {
        nome: "OPPO Find X5 Pro",
        colore: "Ceramica Nera",
        memoriaEsterna: "Non supportata",
        capacitaMemorizzazione: "256 GB",
        ram: "12 GB",
        dualSim: true,
        fotocamera: "50 MP (tripla)",
        batteria: "5000 mAh",
        prezzo: "1149€",
        src: "media/oppo-find-x5-pro.jpg"
    }
];

// Crea le card per ogni telefono e le aggiunge al DOM
telefoni.forEach((annuncio, index) => {
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-2');
    div.innerHTML = `
    <div class="card h-100">
        <img src="${annuncio.src}" class="imgCard bg-p" alt="${annuncio.nome}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-4 text-center">${annuncio.nome}</h5>
            <div class="mt-auto d-flex justify-content-between align-items-center">
                <p class="card-text fs fw-bold fs-6 mb-0">${annuncio.prezzo}</p>
                <a href="#" class="btn mybtn acquista-btn" data-index="${index}" data-bs-toggle="modal" data-bs-target="#acquistoModal"><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
        </div>
    </div>
    `;
    cardW.appendChild(div);
});

// Aggiunge un event listener ai pulsanti di acquisto per salvare i dati del telefono selezionato
document.querySelectorAll('.acquista-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const index = event.currentTarget.getAttribute('data-index');
        localStorage.setItem('telefono', JSON.stringify(telefoni[index]));
    });
});

// Gestisce il submit del form di acquisto
document.getElementById('acquistoForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const telefono = JSON.parse(localStorage.getItem('telefono'));

    // Crea l'oggetto ricevuta con i dati del cliente e del telefono
    const ricevuta = {
        nome,
        cognome,
        telefono
    };

    // Salva la ricevuta nel localStorage
    localStorage.setItem('ricevuta', JSON.stringify(ricevuta));

    // Nasconde la modale utilizzando il metodo Bootstrap
    const modal = bootstrap.Modal.getInstance(document.getElementById('acquistoModal'));
    modal.hide();

    // Nasconde le card e mostra la ricevuta
    document.getElementById('cardWrapper').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('ricevutaContent').style.display = 'flex';
    document.getElementById('ricevutaContent').classList.add('table-container');

    // Genera il contenuto della ricevuta
    const ricevutaContent = document.getElementById('ricevutaContent');
    ricevutaContent.innerHTML = `
        <h2 class="text-center">Ricevuta di Acquisto</h2>
        <table class="table table-bordered">
            <tr>
                <th>Nome e cognome cliente</th>
                <td>${ricevuta.nome} ${ricevuta.cognome}</td>
            </tr>
            <tr>
                <td colspan="2" class="text-center">
                    <img src="${ricevuta.telefono.src}" alt="${ricevuta.telefono.nome}" class="imgCardDetail">
                </td>
            </tr>
            <tr>
                <td colspan="2" class="text-center">
                    <strong>${ricevuta.telefono.nome}</strong>
                </td>
            </tr>
            <tr>
                <th>Colore</th>
                <td>${ricevuta.telefono.colore}</td>
            </tr>
            <tr>
                <th>Memoria esterna</th>
                <td>${ricevuta.telefono.memoriaEsterna}</td>
            </tr>
            <tr>
                <th>Capacità di memorizzazione</th>
                <td>${ricevuta.telefono.capacitaMemorizzazione}</td>
            </tr>
            <tr>
                <th>RAM</th>
                <td>${ricevuta.telefono.ram}</td>
            </tr>
            <tr>
                <th>Dual SIM</th>
                <td>${ricevuta.telefono.dualSim ? 'Sì' : 'No'}</td>
            </tr>
            <tr>
                <th>Fotocamera</th>
                <td>${ricevuta.telefono.fotocamera}</td>
            </tr>
            <tr>
                <th>Batteria</th>
                <td>${ricevuta.telefono.batteria}</td>
            </tr>
            <tr>
                <th>Prezzo</th>
                <td>${ricevuta.telefono.prezzo}</td>
            </tr>
        </table>
    `;
});