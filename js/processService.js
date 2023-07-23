class AbeBooks {

    async __get_price(payload) {
        const url = "http://localhost:8080/https://www.abebooks.com/servlet/DWRestService/pricingservice";
        const options = {
            method: 'POST',
            body: new URLSearchParams(payload),
        };

        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Request failed: " + response.status);
        }
        return response.json();
    }
    
    async getPriceByISBN(isbn) {
        const payload = {
            action: 'getPricingDataByISBN',
            isbn: isbn,
            container: `pricingService-${isbn}`
        };
        return this.__get_price(payload);
    }
}

const abeBooksApi = new AbeBooks();
const hiddenElements = document.querySelectorAll(".non-active");
const searchBar = document.getElementById("isbn")

async function getPriceByISBN() {
    const isbnInput = document.getElementById("isbn");
    const isbn = isbnInput.value;

    if (isNaN(isbn)) {
        searchBar.value = "";
        searchBar.placeholder = "Please enter a valid ISBN (numeric value)";
        return; // Return early without proceeding further
    }

    try {
        const priceData = await abeBooksApi.getPriceByISBN(isbn);
        var success = priceData["success"]
        sessionStorage.setItem('data', JSON.stringify(priceData))
        console.log(success)
        if (success === true) {
            hiddenElements.forEach((element) => {
                window.location.replace("../templates/search-results.html"), true;
                element.classList.remove("non-active");
            });
            document.getElementById("end").scrollIntoView({behavior: 'smooth'});
        } else if (success === false) {
            searchBar.value = "";
            searchBar.placeholder = "Invalid ISBN";
        };
    } catch (error) {
        console.log(error);
    }
}
