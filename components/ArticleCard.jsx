import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip"

import { ArrowRightIcon } from "@radix-ui/react-icons"

export function ArticleCard({
	className,
	title,
	description,
	author,
	date,
	url,
	urlToImage,
	apiName,
	...props
}) {
	const shortDate = new Date(date).toLocaleDateString("en-EN", {
		dateStyle: "medium",
	})
	const detailedDate = new Date(date).toLocaleDateString("en-EN", {
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long",
		hour: "numeric",
		minute: "numeric",
		// second: "numeric",
		hour12: true,
	})
	return (
		<Card className={cn("", className)} {...props}>
			<CardHeader>
				<CardTitle className="line-clamp-1 text-lg">{title}</CardTitle>
				<CardDescription className="pt-2">
					<span>{author}</span>
				</CardDescription>
			</CardHeader>
			<CardContent>
				{urlToImage && (
					<div className="relative w-full h-[300px]">
						<Image
							src={urlToImage}
							alt={title}
							fill
							className="object-cover rounded-md"
						/>
					</div>
				)}
				{description && (
					<p className="line-clamp-2 pt-4">{description}</p>
				)}
			</CardContent>
			<CardFooter className="flex justify-between">
				<div className="flex gap-2">
					{apiName && <Badge>{apiName}</Badge>}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="outline" size="sm">
									{shortDate}
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>{detailedDate}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<Button variant="link" asChild className="" size="md">
					<Link href={url} target="_blank">
						Read more...
						<ArrowRightIcon className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	)
}
