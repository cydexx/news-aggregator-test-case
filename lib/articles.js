"use server"
export async function fetchNewsAPI(page = 1, pageSize = 10, query = "") {
	try {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?q=${query}&country=tr&pageSize=${pageSize}&page=${page}`,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Beares ${process.env.NEWS_API_API_KEY}`,
				},
			}
		)
		const data = await response.json()
		// console.log(data.articles[0])

		// return { articles: data.articles, totalResults: data.totalResults }
		return data
	} catch (error) {
		console.error("Error fetching news:", error)
		return { articles: [], totalResults: 0 }
	}
}

export async function fetchNYTimes() {
	try {
		const response = await fetch(
			` https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=Y5JGnm2KmvdEFjHs4h1aL0CBnkBzj6l3`
		)
		const data = await response.json()
		// console.log(data.results[0])
		return data.results
	} catch (error) {
		console.error("Error fetching news:", error)
		return []
	}
}
