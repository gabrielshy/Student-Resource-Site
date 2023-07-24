const dataFromStorage = JSON.parse(sessionStorage.getItem('data'));
console.log(dataFromStorage)

const products = dataFromStorage.products;
const product1 = products[0];
const imgObj = product1.image;
const imgUrl = imgObj.url;

document.getElementById("img").setAttribute("src", imgUrl);

const price = product1.price.currentPrice;
const priceSymbol = product1.price.priceSymbol;

document.getElementById('price').innerText = priceSymbol + price;

const url = product1.url;

document.getElementById('redir').setAttribute("href", url)

const name = product1.name;
const productNameElement = document.getElementById('product-name');
productNameElement.innerText = name;


if (name.length > 20) {
  productNameElement.style.fontSize = '15px';
}