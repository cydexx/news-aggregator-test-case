import Link from "next/link"
import { Button } from "./ui/button"

const navLinks = [
	{
		title: "World",
		url: "/world",
	},
	{
		title: "Business",
		url: "/business",
	},
	{
		title: "Science",
		url: "/science",
	},
	{
		title: "Health",
		url: "/health",
	},
	{
		title: "Sports",
		url: "/sports",
	},
	{
		title: "Books",
		url: "/books",
	},
	{
		title: "Technology",
		url: "/technology",
	},
	{
		title: "Entertainment",
		url: "/entertainment",
	},
]
export default function Navbar() {
	return (
		<nav className="container">
			<ul className="py-2  border-gray-300">
				<li className="space-x-6 ">
					{navLinks.map((link) => (
						<Button
							asChild
							variant="link"
							key={link.title}
							size="md"
							className="text-md"
						>
							<Link href={`/news/${link.url}`}>{link.title}</Link>
						</Button>
					))}
				</li>
			</ul>
			<div className="w-full h-[1px] bg-border mb-4" />
		</nav>
	)
}
