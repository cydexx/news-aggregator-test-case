"use server"

export async function getNewsByCategory(category) {
	try {
		const apiUrl = `https://newsapi.org/v2/everything?q=${category}`
		const headers = {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.NEWS_API_API_KEY}`,
		}

		const newsData = await fetch(apiUrl, {
			headers: headers,
		})

		const data = await newsData.json()

		// console.log(data.articles)
		if (data.articles) {
			return data.articles
		} else {
			throw new Error("Invalid news data structure.")
		}
	} catch (error) {
		console.error("Error fetching news:", error)
		throw error // Rethrow the error to be handled in the calling code
	}
}

export async function fetchNewsAPI(
	page = 1,
	pageSize = 10,
	query = "",
	date = "",
	sortBy = "publishedAt",
	sources = "",
	country = "tr"
) {
	try {
		let apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&page=${page}&from=${date}&sortBy=${sortBy}&sources=${sources}`

		// If query is provided, switch to everything endpoint
		if (query) {
			apiUrl = `https://newsapi.org/v2/everything?country=${country}&q=${query}&pageSize=${pageSize}&page=${page}&from=${date}&sortBy=${sortBy}&sources=${sources}`
		}

		const response = await fetch(apiUrl, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEWS_API_API_KEY}`,
			},
		})

		const data = await response.json()
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
