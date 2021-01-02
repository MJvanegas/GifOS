//Buscador palabras
let seeker = document.getElementById('quest');


seeker.addEventListener('focus', function(){
    seeker.setAttribute('value', "       ");
});

seeker.addEventListener('blur', function(){
    seeker.setAttribute('value', "  Busca GIFOS y más      ");
});

//modo nocturno
const nightWatcher = document.getElementById("night");

nightWatcher.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    
});