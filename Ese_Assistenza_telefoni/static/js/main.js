document.getElementById("submit").addEventListener("click", trasmetti);

//Funzione d'invio form
function trasmetti(){
    document.modulo2.name.value = document.modulo.nome.value;

    document.modulo2.surname.value = document.modulo.cognome.value;

    document.modulo2.fiscalCode.value = document.modulo.codiceFiscale.value;

    document.modulo2.city.value = document.modulo.citta.value;

    document.modulo2.phoneCarrier.value = document.modulo.gestoreTelefonico.value;

    document.modulo2.devicePhoneNumber.value = document.modulo.numeroTelefono.value;

    document.modulo2.deviceBrand.value = document.modulo.marcaDispositivo.value;

    document.modulo2.deviceModel.value = document.modulo.modelloDispositivo.value;

    document.modulo2.problemDescription.value = document.modulo.descrizioneProblema.value;

    document.modulo2.contactPhone.value = document.modulo.recapitoContatto.value;

    // Controllo se il campo recapitoContatto è vuoto
    if (document.modulo.recapitoContatto.value === "") {
        document.modulo2.contactPhone.value = document.modulo.numeroTelefono.value;
    } else {
        document.modulo2.contactPhone.value = document.modulo.recapitoContatto.value;
    }

    //cambio da un form all'altro
    document.getElementById("modulo").style.display = 'none';
    document.getElementById('ricevuta').style.display = 'block';
}

document.getElementById("back").addEventListener("click", reset);

//funizione che riporta al vecchio modulo resettandolo
function reset(){
    document.getElementById('ricevuta').style.display = 'none';
    document.getElementById("modulo").style.display = 'block';
    document.getElementById("modulo").reset();
    }

// gestione del select per far si che si possa aggiungere manualmente il gestore
    function toggleAltroGestore(select) {
        var altroGestoreInput = document.getElementById('altroGestore');
        if (select.value === 'Altro') {
            altroGestoreInput.classList.remove('d-none');
        } else {
            altroGestoreInput.classList.add('d-none');
            altroGestoreInput.value = '';
        }
    }

// gestione del select per far si che si possa aggiungere manualmente la arca
    function toggleAltroMarca(select) {
        var altroMarcaInput = document.getElementById('altroMarca');
        if (select.value === 'Altro') {
            altroMarcaInput.classList.remove('d-none');
        } else {
            altroMarcaInput.classList.add('d-none');
            altroMarcaInput.value = '';
        }
    }