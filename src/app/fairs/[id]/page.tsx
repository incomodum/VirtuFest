import { CalendarDays, Clock, MapPin, ParkingMeterIcon as Parking, Ticket, Users } from "lucide-react"
import type { FairDetail } from "@//types/fair"
import { VendorMap } from "../_components/vendor-map"
import { VendorList } from "../_components/vendor-list"
import { FairCalendar } from "../_components/fair-calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@//components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@//components/ui/card"
import Image from "next/image"

// Mock data for the fair detail
const fairDetail: FairDetail = {
	id: 1,
	name: "Spring Arts & Crafts Fair",
	date: "2024-04-15",
	endDate: "2024-04-17",
	location: "Central Park",
	description: "Annual arts and crafts fair featuring local artisans and makers. Join us for three days of creativity, food, and community spirit.",
	image: "/placeholder.svg",
	vendorSpaces: 50,
	expectedAttendance: 5000,
	hours: "10:00 AM - 8:00 PM",
	admissionFee: "$5 (Children under 12 free)",
	parkingInfo: "Free parking available at Central Park Garage",
	mapImage: "/placeholder.svg?height=600&width=800",
	vendors: [
		{
			id: 1,
			businessName: "Artisan Crafts Co",
			type: "crafts",
			location: { x: 100, y: 150, space: "10x10" },
			description: "Handmade pottery and ceramics",
			contactEmail: "artisan@example.com",
			boothNumber: "A1"
		},
		{
			id: 2,
			businessName: "Sweet Treats Bakery",
			type: "food",
			location: { x: 200, y: 150, space: "10x20" },
			description: "Fresh baked goods and pastries",
			contactEmail: "treats@example.com",
			boothNumber: "B2"
		}
		// Add more vendors as needed
	]
}

export default function FairDetailPage() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center">
			{/* Hero Section */}
			<section className="relative flex h-[300px] w-full justify-center lg:h-[400px]">
				<Image src={fairDetail.image || "/placeholder.svg"} alt={fairDetail.name} fill className="object-cover brightness-50" priority />
				<div className="container relative z-10 flex h-full flex-col justify-center px-4 text-white">
					<h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">{fairDetail.name}</h1>
					<p className="mt-4 max-w-[700px] text-gray-200 text-lg">{fairDetail.description}</p>
				</div>
			</section>

			{/* Fair Information */}
			<section className="container px-4 py-8">
				<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
					<div className="space-y-6">
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
												{new Date(fairDetail.date).toLocaleDateString()} - {new Date(fairDetail.endDate).toLocaleDateString()}
											</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Clock className="h-5 w-5 text-muted-foreground" />
										<div>
											<p className="font-medium">Hours</p>
											<p className="text-muted-foreground text-sm">{fairDetail.hours}</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<MapPin className="h-5 w-5 text-muted-foreground" />
										<div>
											<p className="font-medium">Location</p>
											<p className="text-muted-foreground text-sm">{fairDetail.location}</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Users className="h-5 w-5 text-muted-foreground" />
										<div>
											<p className="font-medium">Expected Attendance</p>
											<p className="text-muted-foreground text-sm">{fairDetail.expectedAttendance.toLocaleString()} visitors</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Ticket className="h-5 w-5 text-muted-foreground" />
										<div>
											<p className="font-medium">Admission</p>
											<p className="text-muted-foreground text-sm">{fairDetail.admissionFee}</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<Parking className="h-5 w-5 text-muted-foreground" />
										<div>
											<p className="font-medium">Parking</p>
											<p className="text-muted-foreground text-sm">{fairDetail.parkingInfo}</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Vendor Map and List */}
						<Tabs defaultValue="map" className="w-full">
							<TabsList className="w-full justify-start">
								<TabsTrigger value="map">Vendor Map</TabsTrigger>
								<TabsTrigger value="list">Vendor List</TabsTrigger>
								<TabsTrigger value="calendar">Calendar</TabsTrigger>
							</TabsList>
							<TabsContent value="map">
								<Card>
									<CardContent className="p-6">
										<VendorMap fair={fairDetail} />
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="list">
								<Card>
									<CardContent className="p-6">
										<VendorList vendors={fairDetail.vendors} />
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="calendar">
								<Card>
									<CardContent className="p-6">
										<FairCalendar fair={fairDetail} />
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Quick Links</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2">
								<a href="./#" className="block text-blue-600 text-sm hover:underline">
									Download Fair Map (PDF)
								</a>
								<a href="./#" className="block text-blue-600 text-sm hover:underline">
									Vendor Application
								</a>
								<a href="./#" className="block text-blue-600 text-sm hover:underline">
									Event Schedule
								</a>
								<a href="./#" className="block text-blue-600 text-sm hover:underline">
									Parking Information
								</a>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	)
}
