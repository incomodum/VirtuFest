import { CalendarDays, MapPin, Search, Store, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FairFilters } from "./_components/fair-filters"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { getFairs } from "@/lib/queries"
import { SiteHeader } from "@/components/site-header"

export default async function FairsPage() {
	const data = await getFairs()

	return (
		<>
			<SiteHeader />
			<div className="flex min-h-screen w-full flex-col items-center">
				{/* Hero Section */}
				<section className="relative flex w-full items-center justify-center">
					<div className="absolute inset-0">
						<Image src="/banner.svg" alt="Fairs background" fill className="object-cover brightness-50" priority />
					</div>
					<div className="container relative z-10 px-4 py-24 text-center md:py-32">
						<h1 className="font-bold text-3xl text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
							Objavte úžasné kultúrne udalosti
						</h1>
						<p className="mx-auto mt-4 max-w-[700px] text-gray-200 text-lg">
							Vyhľadajte a zúčastnite sa najlepších miestnych trhov, jarmokov a festivalov vo vašom okolí{" "}
						</p>
					</div>
				</section>

				{/* Filters Section */}
				<section className="sticky top-16 z-20 flex w-full justify-center border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<div className="container py-4">
						<div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
							<div className="flex flex-row gap-4">
								<div className="relative flex-1">
									<Search className="absolute top-3 left-2.5 h-4 w-4 text-muted-foreground" />
									<Input placeholder="Hľadať udalosti..." className="min-w-xs pl-8" />
								</div>
							</div>
							<div className="flex w-fit flex-row gap-4">
								<Select defaultValue="all">
									<SelectTrigger className="w-[150px]">
										<SelectValue placeholder="Category" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">Všetky kategórie</SelectItem>
										<SelectItem value="arts">Remeslá</SelectItem>
										<SelectItem value="food">Občerstvenie</SelectItem>
										<SelectItem value="market">Trhy</SelectItem>
									</SelectContent>
								</Select>
								<Select defaultValue="upcoming">
									<SelectTrigger className="w-[150px]">
										<SelectValue placeholder="Status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="upcoming">Nadchádzajúce</SelectItem>
										<SelectItem value="ongoing">Prebiehajúce</SelectItem>
										<SelectItem value="completed">Ukončené</SelectItem>
									</SelectContent>
								</Select>
								<FairFilters />
							</div>
						</div>
					</div>
				</section>

				{/* Fairs List */}
				<div className="flex w-full flex-col items-center px-4">
					<section className="container py-8">
						<div className="grid w-full gap-6">
							{data.map((fair) => (
								<Card key={fair.id} className="overflow-hidden">
									<CardContent className="p-0">
										<div className="grid gap-6 md:grid-cols-[300px_1fr]">
											<div className="relative aspect-[4/3] md:aspect-auto">
												<Image src={fair.image || "/placeholder.svg"} alt={fair.name} fill className="object-cover" />
												{fair.featured && (
													<Badge className="absolute top-2 right-2" variant="secondary">
														Odporúčané
													</Badge>
												)}
											</div>
											<div className="p-6">
												<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
													<div className="space-y-2">
														<h2 className="font-bold text-2xl">{fair.name}</h2>
														<div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
															<div className="flex items-center gap-1">
																<CalendarDays className="h-4 w-4" />
																{new Date(fair.date).toLocaleDateString()} -{" "}
																{new Date(fair.endDate).toLocaleDateString()}
															</div>
															<div className="flex items-center gap-1">
																<MapPin className="h-4 w-4" />
																{fair.location}, {fair.city}
															</div>
															<div className="flex items-center gap-1">
																<Store className="h-4 w-4" />
																{fair.vendorCount} stánkov
															</div>
															<div className="flex items-center gap-1">
																<Users className="h-4 w-4" />
																{fair.expectedAttendance.toLocaleString()} odhadovaní návštevníci
															</div>
														</div>
														<p className="text-muted-foreground">{fair.description}</p>
													</div>
													<Button asChild className="bg-[#00B975] hover:bg-[#009861]">
														<Link href={`/fairs/${fair.id}`}>Zobraziť detaily</Link>
													</Button>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</section>
				</div>
			</div>
		</>
	)
}
