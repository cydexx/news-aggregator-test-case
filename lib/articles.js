"use server"
export async function fetchNews() {
	try {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=de`,
			{
				headers: {
					Authorization: `Beares ${process.env.NEWS_API_API_KEY}`,
				},
			}
		)
		const data = await response.json()
		console.log(data.articles[0])
		return data.articles
	} catch (error) {
		console.error("Error fetching news:", error)
		return []
	}
}

export async function fetchNYTimes() {
	try {
		const response = await fetch(
			` https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Y5JGnm2KmvdEFjHs4h1aL0CBnkBzj6l3`
		)
		const data = await response.json()
		console.log(data.results[0])
		return data.results
	} catch (error) {
		console.error("Error fetching news:", error)
		return []
	}
}
