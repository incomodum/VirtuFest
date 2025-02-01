import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { upcomingFairs } from "@/lib/mocks"
import { CalendarDays, MapPin, Users, Store } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Logo from "./_components/logo"

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
								<Logo className="w-[80%] max-w-[500px]" />
								<p className="text-center text-lg text-muted-foreground">
									Objavte nadchádzajúce kultúrne udalosti, rezervujte si priestor pre predajcov a staňte sa súčasťou komunity.
								</p>
								<Link href="/fairs">
									<Button size="lg" className="mt-4 h-12 bg-[#00B975] px-8 hover:bg-[#009861]">
										Nájdi zaujímave udalosti!
									</Button>
								</Link>
							</div>
						</div>
					</section>
					<section className="relative">
						<div className="absolute inset-0 z-0">
							<Image src="/placeholder.svg" alt="City fair background" fill className="object-cover brightness-50" priority />
						</div>
					</section>

					{/* Upcoming Fairs Section */}
					<section className="flex w-full justify-center px-4 py-16">
						<div className="container">
							<h2 className="mb-8 text-center font-bold text-3xl tracking-tight">Odporúčané udalosti</h2>
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
													<Button className="mt-4 bg-[#00B975] hover:bg-[#009861]">Zobraziť detaily</Button>
												</Link>
											</div>
										</CardContent>
									</Card>
								))}
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
									<Button className="bg-[#00B975] hover:bg-[#009861]">Stať sa stánkarom!</Button>
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
