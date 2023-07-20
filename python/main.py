import requests

url = "https://ebay-products-search-scraper.p.rapidapi.com/products"

querystring = {"query":"xbox","page":"1","Item_Location":"europe"}

headers = {
	"X-RapidAPI-Key": "e50ad5c2damsh66bf684007f0937p16dc4cjsnbddd3dd25e62",
	"X-RapidAPI-Host": "ebay-products-search-scraper.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())