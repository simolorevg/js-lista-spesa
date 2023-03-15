const listArray = ['pane','salame','uova','fruttini'];
const productList = document.getElementById('product-list'); //prendo la lista non ordinata
let i = 0;
console.log(listArray.length);
while(i < listArray.length){
    productList.innerHTML+=`<li>${listArray[i]}</li>`;
    console.log(listArray[i]);
    i++;
}