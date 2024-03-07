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
	const detailedDate = new Date(date).toLocaleDateString("en-EN", {
		year: "numeric",
		month: "short",
		day: "numeric",
		// weekday: "long",
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
					{/* <span>{detailedDate}</span> */}
				</CardDescription>
			</CardHeader>
			{/* <CardContent className="grid gap-4">
				<div className=" flex items-center space-x-4 rounded-md border p-4">
					<BellIcon />
					<div className="flex-1 space-y-1">
						<p className="text-sm font-medium leading-none">
							Push Notifications
						</p>
						<p className="text-sm text-muted-foreground">
							Send notifications to device.
						</p>
					</div>
				</div>
			</CardContent> */}
			<CardFooter className="flex justify-between">
				<div className="flex gap-2">
					<Badge>{apiName}</Badge>
					<span className="text-sm">{detailedDate}</span>
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
