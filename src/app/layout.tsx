import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@//components/site-header"
import { Toaster } from "@//components/ui/toaster"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "VirtuFest",
	description: "Your virtual fair and event companion"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="relative flex min-h-screen flex-col">
					<SiteHeader />
					<div className="flex-1">{children}</div>
				</div>
				<Toaster />
			</body>
		</html>
	)
}
