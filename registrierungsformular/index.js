// document.addEventListener("DOMContentLoaded", function() {
//     const formular = document.querySelector("form");
    
// });
const formular = document.querySelector("form");
console.log({formular});

formular.addEventListener('submit', function (event) {
    event.preventDefault();
    const date = new Date()
    const year = date.getFullYear();
    console.log(year);
    class kundeDaten { constructor (vorname, nachname, email, geborenAn, geschlecht, agb, datenschutz){
        this.vorname = vorname;
        this.nachname = nachname;
        this.email = email;
        this.geborenAn = geborenAn;
        this.geschlecht = geschlecht; 
        this.agb = Boolean(agb);
        this.datenschutz = Boolean(datenschutz);
    }};
    const kunde = new kundeDaten();


    kunde.vorname = formular.elements.vorname.value;
    kunde.nachname= formular.elements.nachname.value;
    kunde.email= formular.elements.email.value;
    kunde.agb= formular.elements.agb.checked;
    kunde.datenschutz= formular.elements.datenschutz.checked;
    kunde.geborenAn= formular.elements.geburstdatum.value;
    kunde.geschlecht= formular.elements.geschlecht.value;

    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());

    if(formular.elements.passwort.value !== formular.elements.passwortConfirm.value){
        const password = document.querySelector('.passwordError')
        const error = document.createElement('p');
        error.innerText = "Die Passwörter müssen übereinstimmen";
        error.classList.add('error');
        form.elements.passwordConfirm.parentElament.append('error');

        // password.innerText = 'Die Passwörter müssen übereinstimmen';

        alert('Passwort muss gleich sein');
        
    }
    if(formular.elements.date.value < 18)
  
    console.log(kunde);
    // form.reset()
    // form.submit()
});