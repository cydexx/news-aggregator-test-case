import { ArrowRightIcon, BellIcon, CheckIcon } from "@radix-ui/react-icons"

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
import Link from "next/link"
import { Badge } from "./ui/badge"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip"

export function ArticleCard({
	className,
	title,
	description,
	author,
	date,
	url,
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
				<CardTitle className="line-clamp-1">{title}</CardTitle>
				<CardDescription className="pt-2">
					<span>{author}</span>
				</CardDescription>
			</CardHeader>
			<CardFooter className="flex justify-between">
				<div className="flex gap-2">
					<Badge>{apiName}</Badge>
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
					{/* <span className="text-sm">{detailedDate}</span> */}
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
