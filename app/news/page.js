import { ArticleCard } from "@/components/ArticleCard"
import { getNewsByCategory } from "@/lib/articles"

export default async function Page() {
	const articles = await getNewsByCategory("popular")
	return (
		<div className="container">
			<div className="flex flex-col  gap-4 mb-4">
				{articles.map((article) => (
					<ArticleCard
						key={article.title}
						title={article.title}
						author={article.author}
						date={article.publishedAt}
						description={article.description}
						url={article.url}
						urlToImage={article.urlToImage}
					/>
				))}
			</div>
		</div>
	)
}
