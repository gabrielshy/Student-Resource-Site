async function getPriceByISBN() {
  const isbnInput = document.getElementById("isbn");
  const isbn = isbnInput.value.trim();

  if (!/^\d{10,13}$/.test(isbn)) {
    isbnInput.value = "";
    isbnInput.placeholder = "Please enter a valid ISBN (10-13 digits)";
    return;
  }

  const url = `https://amazon-web-scraping-api.p.rapidapi.com/products/search?criteria=${encodeURIComponent(isbn)}&page=1&countryCode=US&languageCode=EN`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e50ad5c2damsh66bf684007f0937p16dc4cjsnbddd3dd25e62',
      'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);

    try {
      const jsonData = JSON.parse(result);
      if (jsonData.products.length === 0) {
        window.location.href = "../templates/no-results.html";
        return;
      }

      sessionStorage.setItem('data', result);
      window.location.href = "../templates/search-results.html";
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}

const isbnInput = document.getElementById("isbn");
isbnInput.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    getPriceByISBN();
  }
});