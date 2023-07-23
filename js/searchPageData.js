const dataFromStorage = JSON.parse(sessionStorage.getItem('data'));

console.log(dataFromStorage)

const isbn = dataFromStorage.isbn

document.getElementById("isbn-text").innerText = isbn;

const newPrice = dataFromStorage.pricingInfoForBestNew.bestPriceInPurchaseCurrencyWithCurrencySymbol;
const newTotalResults = dataFromStorage.pricingInfoForBestNew.totalResults;
const usedPrice = dataFromStorage.pricingInfoForBestUsed.bestPriceInPurchaseCurrencyWithCurrencySymbol;
const usedTotalResults = dataFromStorage.pricingInfoForBestUsed.totalResults;

const newPriceText = document.getElementById("newPriceText")
const newTotalText =  document.getElementById("newTotalText")
const usedPriceText = document.getElementById("usedPriceText")
const usedTotalText = document.getElementById("usedTotalText")

newPriceText.innerText = newPrice;
newTotalText.innerText = newTotalResults;
usedPriceText.innerText = usedPrice;
usedTotalText.innerText = usedTotalResults;

