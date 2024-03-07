import { ArticleCard } from "@/components/ArticleCard"
import { DatePicker } from "@/components/ui/date-picker"
import { Input } from "@/components/ui/input"
import { fetchNews, fetchNYTimes } from "@/lib/articles"

export default async function Home() {
	const articles = await fetchNews()
	const nytimes = await fetchNYTimes()

	return (
		<main className="container">
			{/* <ThemeToggle /> */}
			<div className="flex gap-4 mb-4">
				<Input placeholder="Search an article." />
				<DatePicker />
			</div>
			{/* {JSON.stringify(nytimes)} */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				{nytimes.map((article) => (
					<ArticleCard
						key={article.title}
						title={article.title}
						author={article.author}
						date={article.published_date}
						description={article.description}
						url={article.url}
						apiName={"NYTimes"}
					/>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				{articles.map((article) => (
					<ArticleCard
						key={article.title}
						title={article.title}
						author={article.author}
						date={article.publishedAt}
						description={article.description}
						url={article.url}
						apiName={"NewsAPI"}
					/>
				))}
			</div>
		</main>
	)
}
