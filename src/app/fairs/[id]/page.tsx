import { CalendarDays, Clock, MapPin, ParkingMeterIcon as Parking, Users } from "lucide-react"
import { VendorMap } from "../_components/vendor-map"
import { VendorList } from "../_components/vendor-list"
import { FairCalendar } from "../_components/fair-calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@//components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { unstable_cache } from "next/cache"
import { getFairById } from "@/lib/queries"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/revuca-header"

export default async function DataPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const data = await unstable_cache(() => getFairById(id), [`fair-${id}`], { tags: [`fair-${id}`], revalidate: 60 * 60 * 2 })()

	if (!data) return notFound()

	return (
		<>
			<SiteHeader />
			<div className="flex min-h-screen w-full flex-col items-center">
				{/* Hero Section */}
				<section className="relative flex h-[300px] w-full justify-center lg:h-[400px]">
					<Image src={data.image || "/placeholder.svg"} alt={data.name} fill className="object-cover brightness-50" priority />
					<div className="container relative z-10 flex h-full flex-col justify-center px-4 text-white">
						<h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">{data.name}</h1>
						<p className="mt-4 max-w-[700px] text-gray-200 text-lg">{data.description}</p>
					</div>
				</section>

				{/* Fair Information */}
				<section className="container px-4 py-8">
					<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
						<div className="space-y-4">
							{/* Event Details */}
							<Card>
								<CardHeader>
									<CardTitle>Event Details</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="flex items-center gap-2">
											<CalendarDays className="h-5 w-5 text-muted-foreground" />
											<div>
												<p className="font-medium">Dates</p>
												<p className="text-muted-foreground text-sm">
													{new Date(data.date).toLocaleDateString()} - {new Date(data.endDate).toLocaleDateString()}
												</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Clock className="h-5 w-5 text-muted-foreground" />
											<div>
												<p className="font-medium">Hours</p>
												<p className="text-muted-foreground text-sm">{data.hours}</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<MapPin className="h-5 w-5 text-muted-foreground" />
											<div>
												<p className="font-medium">Location</p>
												<p className="text-muted-foreground text-sm">{data.location}</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Users className="h-5 w-5 text-muted-foreground" />
											<div>
												<p className="font-medium">Expected Attendance</p>
												<p className="text-muted-foreground text-sm">{data.expectedAttendance.toLocaleString()} visitors</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Parking className="h-5 w-5 text-muted-foreground" />
											<div>
												<p className="font-medium">Parking</p>
												<p className="text-muted-foreground text-sm">{data.parkingInfo}</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Vendor Map and List */}
							<Card>
								<CardContent className="p-6">
									<VendorMap fair={data} />
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<VendorList vendors={data.vendors} />
								</CardContent>
							</Card>
						</div>

						{/* Sidebar */}
						<div className="space-y-4">
							<Button asChild variant="default" className="w-full">
								<Link href="/vendors/apply">Vendor Application</Link>
							</Button>
							<Card>
								<CardHeader>
									<CardTitle>Quick Links</CardTitle>
								</CardHeader>
								<CardContent className="space-y-2">
									<a href="./#" className="block text-blue-600 text-sm hover:underline">
										Download Fair Map (PDF)
									</a>
									<a href="./#" className="block text-blue-600 text-sm hover:underline">
										Event Schedule (PDF)
									</a>
									<a href="./#" className="block text-blue-600 text-sm hover:underline">
										Parking Information
									</a>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Calendar</CardTitle>
								</CardHeader>
								<CardContent>
									<FairCalendar fair={data} />
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
