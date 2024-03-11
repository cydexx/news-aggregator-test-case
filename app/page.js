import { ArticleCard } from "@/components/ArticleCard"
import { DatePicker } from "@/components/ui/date-picker"
import { fetchNewsAPI, fetchNYTimes } from "@/lib/articles"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SearchBox from "@/components/SearchBox"

export default async function Home({
	articles,
	nytimes,
	currentPage,
	totalPages,
}) {
	const newsApi = await fetchNewsAPI()
	const totalResults = newsApi.totalResults
	const nyTimesArticles = await fetchNYTimes()

	const handleNextPage = async () => {
		const nextPage = currentPage + 1
		const response = await fetchNewsAPI(nextPage, 10)
		// Update the component state or any other logic to handle the new data
		console.log("Next page data:", response.articles)
	}

	return (
		<main className="container">
			{/* <ThemeToggle /> */}

			{JSON.stringify(articles)}

			<Tabs defaultValue="newsapi" className="">
				<TabsList>
					<TabsTrigger value="newsapi">NewsAPI</TabsTrigger>
					<TabsTrigger value="nytimesapi">NYTimesAPI</TabsTrigger>
				</TabsList>
				<TabsContent value="newsapi">
					{totalResults + "haber vars"}
					{JSON.stringify(articles)}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						{newsApi.articles.map((article) => (
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
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									href={`/page/${currentPage - 1}`}
								/>
							</PaginationItem>
							{[...Array(totalPages).keys()].map((page) => (
								<PaginationItem key={page + 1}>
									<PaginationLink
										href={`/page/${page + 1}`}
										isActive={page + 1 === currentPage}
									>
										{page + 1}
									</PaginationLink>
								</PaginationItem>
							))}
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext
									href={`/page/${currentPage + 1}`}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						{articles && articles.articles ? (
							articles.articles.map((article) => (
								<ArticleCard
									key={article.title}
									title={article.title}
									author={article.author}
									date={article.publishedAt}
									description={article.description}
									url={article.url}
									apiName={"NewsAPI"}
								/>
							))
						) : (
							<p>No articles found.</p>
						)}
					</div>
				</TabsContent>
				<TabsContent value="nytimesapi">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
						{nyTimesArticles.map((article) => (
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
				</TabsContent>
			</Tabs>

			{/* {articles.map((article) => (
				<ArticleCard
					key={article.title}
					title={article.title}
					author={article.author}
					date={article.publishedAt}
					description={article.description}
					url={article.url}
					apiName={"NewsAPI"}
				/>
			))} */}
		</main>
	)
}
