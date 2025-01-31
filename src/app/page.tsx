import { Button } from "@//components/ui/button"
import { Card, CardContent } from "@//components/ui/card"
import SiteFooter from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { upcomingFairs } from "@/lib/mocks"
import { CalendarDays, MapPin, Tent, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
	return (
		<>
			<SiteHeader />
			<div className="flex min-h-screen w-full flex-col items-center">
				<main className="w-full flex-1">
					{/* Hero Section */}
					<section className="relative flex justify-center px-4">
						<div className="container flex flex-col items-center gap-8 pt-12 pb-8 lg:flex-row">
							<div className="flex h-[50vh] w-full flex-col items-center justify-center space-y-4">
								<h1 className="flex flex-row items-center font-bold text-4xl tracking-tight lg:text-6xl">
									<Tent className="mr-2 size-14" />
									VirtuFest
								</h1>
								<p className="text-lg text-muted-foreground">
									Discover upcoming fairs, reserve your vendor space and be part of the event community
								</p>
								<Link href="/fairs">
									<Button size="lg" className="mt-4 h-12 px-8">
										Find Fairs
									</Button>
								</Link>
							</div>
						</div>
					</section>
					<section className="relative">
						<div className="absolute inset-0 z-0">
							<Image src="/placeholder.svg" alt="City fair background" fill className="object-cover brightness-50" priority />
						</div>
						<div className="relative z-10 px-4 py-24 text-center text-white md:py-32">
							<h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">VirtuFest</h1>
							<p className="mx-auto mt-4 max-w-[700px] text-gray-200 text-lg">
								Discover upcoming fairs, reserve your vendor space, and be part of our vibrant community events
							</p>
						</div>
					</section>

					{/* Upcoming Fairs Section */}
					<section className="flex w-full justify-center px-4 py-16">
						<div className="container">
							<h2 className="mb-8 text-center font-bold text-3xl tracking-tight">Upcoming Fairs</h2>
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
														<Tent className="h-4 w-4" />
														{fair.vendorSpaces} vendor spaces
													</div>
													<div className="flex items-center gap-1">
														<Users className="h-4 w-4" />
														{fair.expectedAttendance.toLocaleString()} expected visitors
													</div>
												</div>
												<Link href="/fairs/1">
													<Button className="mt-4">Learn More</Button>
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
								<h2 className="font-bold text-3xl tracking-tight">Reserve Your Vendor Space</h2>
								<p className="mt-4 text-muted-foreground">
									Join our community of vendors and showcase your products at our upcoming fairs
								</p>
							</div>
							<div className="mt-8 flex items-center justify-center">
								<Link href="/vendors/apply">
									<Button>Become a vendor</Button>
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
