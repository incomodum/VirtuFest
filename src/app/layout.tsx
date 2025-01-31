import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
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
		<html lang="en" style={{ height: "100%" }}>
			<body className={`${geistSans.variable} ${geistMono.variable} flex min-h-full flex-col bg-background antialiased`}>
				<div className="flex min-h-full w-full flex-grow flex-col">
					{children}
					<Toaster />
				</div>
			</body>
		</html>
	)
}
