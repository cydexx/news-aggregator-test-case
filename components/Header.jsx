import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import Image from "next/image"

const navLinks = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/feed",
		label: "Feed",
	},
]
export default function Header() {
	return (
		<header className="container flex justify-between   items-center border-b border-b-foreground/10 h-16 p-3">
			<div className="flex gap-6">
				{navLinks.map((link) => (
					<Link key={link.href} href={link.href}>
						{link.label}
					</Link>
				))}
			</div>
			<div className="flex justify-center items-center gap-4 ">
				<ThemeToggle />
				<Link
					href="https://www.cydex.dev/"
					target="_blank "
					className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
				>
					<Image
						src="https://github.com/cydexx.png"
						alt="Cydex"
						fill
					/>
				</Link>
			</div>
		</header>
	)
}
