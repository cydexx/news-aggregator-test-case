import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import SearchBox from "@/components/SearchBox"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "News Aggregator",
	description: "created by cydex.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<Navbar />
					<SearchBox />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
