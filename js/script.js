const listArray = ['pane','salame','uova','fruttini','cochina bella fresca'];//array lista spesa
const productList = document.getElementById('product-list'); //prendo la lista non ordinata
let i = 0;//contatore
console.log(listArray.length);
while(i < listArray.length){//finchè i è minore della lunghezza dell'array
    productList.innerHTML+=`<li>${listArray[i]}</li>`;//stampa sulla lista il prodotto
    i++;//incrementa il contatore
}