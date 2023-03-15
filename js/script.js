
const productList = document.getElementById('productList');//prendo la lista non ordinata
let productIndex = 0;
submitBtn.addEventListener('click', function(){
    productList.innerHTML+=`<li>${userProduct}</li>`;
    //finche l'elemento non è presente, lo aggiungo nella lista
    //altrimenti non lo metto
});
