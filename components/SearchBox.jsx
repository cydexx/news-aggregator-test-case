"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { Input } from "./ui/input"
import { DatePicker } from "./ui/date-picker"

export default function SearchBox() {
	const router = useRouter()
	const handleSearch = (query) => {
		// Arama yapıldığında "/news/input" sayfasına yönlendirme
		router.push(`/news/${query}`)
	}
	return (
		<div className="container flex gap-4 mb-4">
			<Input
				placeholder="Search an article."
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<DatePicker />
		</div>
	)
}
