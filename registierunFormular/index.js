const formular = document.querySelector('form');
console.log({formular});
formular.addEventListener('submit', function (event) {
    alert("gespeichert")
});
const firstName = formular.elements.vorname;
console.log(firstName);