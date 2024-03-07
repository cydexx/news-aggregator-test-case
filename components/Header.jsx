import Link from "next/link"
import ThemeToggle from "./theme-toggle"

export default function Header() {
	return (
		<header className="w-full flex justify-center border-b border-b-foreground/10 h-16">
			<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
				<Link className="" href="/" rel="noreferrer">
					cy News
				</Link>

				<div className="flex justify-center items-center gap-4 ">
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
