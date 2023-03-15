//prendo l'elemento inserito dall'utente
const userProductInput = document.getElementById('userInput');//prendo l'input html
const submitBtn = document.getElementById('submit-btn');//prendo il bottone
const userProduct = userProductInput.value;//estraggo il valore dall'input
submitBtn.addEventListener('click', function(){
    console.log(userProduct);
    userProductInput.value="";
});
//finche l'elemento non è presente, lo aggiungo nella lista
//altrimenti non lo metto