import requests

url = "https://price-analytics.p.rapidapi.com/search-by-term"

payload = {
	"source": "amazon",
	"country": "us",
	"values": "College Textbook"
}
headers = {
	"content-type": "application/x-www-form-urlencoded",
	"X-RapidAPI-Key": "e50ad5c2damsh66bf684007f0937p16dc4cjsnbddd3dd25e62",
	"X-RapidAPI-Host": "price-analytics.p.rapidapi.com"
}

response = requests.post(url, data=payload, headers=headers)

print(response.json())

