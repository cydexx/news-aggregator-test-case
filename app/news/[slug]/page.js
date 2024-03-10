import { ArticleCard } from "@/components/ArticleCard"
import { getNewsByCategory } from "@/lib/articles"

export default async function Page({ params }) {
	const articles = await getNewsByCategory(params.slug)
	return (
		<div className="container">
			<h1 className="text-2xl capitalize font-bold py-4">
				Topic: {params.slug}
			</h1>
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
