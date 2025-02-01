import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/revuca-header"
import { upcomingFairs } from "@/lib/mocks"
import { CalendarDays, MapPin, Users, Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LogoRevuca from "../_components/logo-revuca"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
	title: "VirtuFest | Revúca",
	description: "Virtuálna dvojička podujatí v Revúcej",
	openGraph: {
		type: "website",
		title: "VirtuFest | Revúca",
		description: "Virtuálna dvojička podujatí v Revúcej"
	},
	twitter: {
		card: "summary_large_image"
	}
}

export default function Page() {
	return (
		<>
			<SiteHeader />
			<div className="flex min-h-screen w-full flex-col items-center">
				<main className="w-full flex-1">
					{/* Hero Section */}
					<section className="relative flex justify-center px-4">
						<div className="container flex flex-col items-center gap-8 pt-12 pb-8 lg:flex-row">
							<div className="flex h-[50vh] w-full flex-col items-center justify-center space-y-4 px-4">
								<LogoRevuca className="w-[80%] max-w-[500px]" />
								<p className="text-center text-lg text-muted-foreground">
									Objavte nadchádzajúce kultúrne udalosti v <b>Revúcej</b>, rezervujte si priestor pre predajcov a staňte sa
									súčasťou komunity.
								</p>
							</div>
						</div>
					</section>
					<section className="relative">
						<div className="absolute inset-0 z-0">
							<Image src="/placeholder.svg" alt="City fair background" fill className="object-cover brightness-50" priority />
						</div>
					</section>

					{/* Upcoming Fairs Section */}
					<section className="flex w-full justify-center border-t px-4 py-16">
						<div className="container">
							<h2 className="mb-8 text-center font-bold text-3xl tracking-tight">
								Nadchádzajúce udalosti v <b>Revúcej</b>
							</h2>
							<div className="mx-auto max-w-4xl space-y-4">
								{upcomingFairs.map((fair) => (
									<Card key={fair.id}>
										<CardContent className="flex flex-col gap-4 p-6 sm:flex-row">
											<Image
												src={fair.image || "/placeholder.svg"}
												alt={fair.name}
												width={200}
												height={200}
												className="rounded-lg object-cover sm:w-48"
											/>
											<div className="flex-1 space-y-2">
												<h3 className="font-bold text-xl">{fair.name}</h3>
												<p className="text-muted-foreground">{fair.description}</p>
												<div className="flex flex-wrap gap-4 text-sm">
													<div className="flex items-center gap-1">
														<CalendarDays className="h-4 w-4" />
														{new Date(fair.date).toLocaleDateString()}
													</div>
													<div className="flex items-center gap-1">
														<MapPin className="h-4 w-4" />
														{fair.location}
													</div>
													<div className="flex items-center gap-1">
														<Store className="h-4 w-4" />
														{fair.vendorSpaces} stánkov
													</div>
													<div className="flex items-center gap-1">
														<Users className="h-4 w-4" />
														{fair.expectedAttendance.toLocaleString()} odhadovaní návštevníci
													</div>
												</div>
												<Link href="/fairs/1">
													<Button className="mt-4">Zobraziť detaily</Button>
												</Link>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</section>

					<section className="relative flex justify-center border-t px-4">
						<div className="container flex flex-col items-center gap-8 pt-12 pb-8 lg:flex-row">
							<div className="flex aspect-video w-full items-center justify-center md:justify-end lg:w-1/2">
								<Image src="/revuca-erb.png" alt="Hero Image" width={325} height={525} className="rounded-lg object-cover" priority />
							</div>
							<div className="flex flex-col items-start space-y-4 lg:w-1/2">
								<h1 className="font-bold text-4xl tracking-tight lg:text-6xl">Mesto Revúca</h1>
								<p className="text-lg text-muted-foreground">Slovenské mesto kultúry 2022</p>
								<Link href="https://www.revuca.sk/" target="_blank">
									<Button size="lg" className="mt-4">
										Webové sídlo
									</Button>
								</Link>
							</div>
						</div>
					</section>

					{/* Vendor Registration Section */}
					<section className="flex w-full justify-center bg-muted px-4 py-16">
						<div className="container">
							<div className="mx-auto max-w-2xl text-center">
								<h2 className="font-bold text-3xl tracking-tight">Rezervuj si miesto ako stánkar!</h2>
								<p className="mt-4 text-muted-foreground">
									Rezervujte si priestor pre predajcov a staňte sa súčasťou komunity podujatia
								</p>
							</div>
							<div className="mt-8 flex items-center justify-center">
								<Link href="/vendors/apply">
									<Button>Stať sa stánkarom!</Button>
								</Link>
							</div>
						</div>
					</section>
				</main>
				<SiteFooter />
			</div>
		</>
	)
}
