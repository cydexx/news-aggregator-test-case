import { ArticleCard } from "@/components/ArticleCard"
import { getNewsByCategory } from "@/lib/articles"

export default async function Page({ params }) {
	const articles = await getNewsByCategory(params.slug)
	return (
		<div className="container">
			<h1 className="text-xl">
				News Category: <span></span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
