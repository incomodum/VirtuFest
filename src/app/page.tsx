import { Button } from "@//components/ui/button"
import { Card, CardContent } from "@//components/ui/card"
import { Input } from "@//components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@//components/ui/tabs"
import { CalendarDays, MapPin, Search, Tent, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for fairs
const upcomingFairs = [
	{
		id: 1,
		name: "Spring Arts & Crafts Fair",
		date: "2024-04-15",
		location: "Central Park",
		image: "/placeholder.svg",
		description: "Annual arts and crafts fair featuring local artisans",
		vendorSpaces: 50,
		expectedAttendance: 5000
	},
	{
		id: 2,
		name: "Summer Food Festival",
		date: "2024-06-20",
		location: "Riverside Park",
		image: "/placeholder.svg",
		description: "Celebrating local cuisine and food vendors",
		vendorSpaces: 75,
		expectedAttendance: 8000
	},
	{
		id: 3,
		name: "Autumn Harvest Market",
		date: "2024-09-10",
		location: "Downtown Square",
		image: "/placeholder.svg",
		description: "Seasonal produce and artisanal goods",
		vendorSpaces: 60,
		expectedAttendance: 6000
	}
]

export default function Page() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center">
			<main className="w-full flex-1">
				{/* Hero Section */}
				<section className="relative">
					<div className="absolute inset-0 z-0">
						<Image src="/placeholder.svg" alt="City fair background" fill className="object-cover brightness-50" priority />
					</div>
					<div className="relative z-10 px-4 py-24 text-center text-white md:py-32">
						<h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">City Fairs & Events</h1>
						<p className="mx-auto mt-4 max-w-[700px] text-gray-200 text-lg">
							Discover upcoming fairs, reserve your vendor space, and be part of our vibrant community events
						</p>
						<div className="mx-auto mt-8 flex max-w-md flex-col gap-4 px-4 sm:flex-row">
							<Input className="bg-white/90 text-black placeholder:text-gray-500" placeholder="Search fairs..." type="search" />
							<Button className="bg-primary hover:bg-primary/90">
								<Search className="mr-2 h-4 w-4" />
								Find Fairs
							</Button>
						</div>
					</div>
				</section>

				{/* Upcoming Fairs Section */}
				<section className="flex w-full justify-center px-4 py-16">
					<div className="container">
						<h2 className="mb-8 text-center font-bold text-3xl tracking-tight">Upcoming Fairs</h2>
						<Tabs defaultValue="list" className="mx-auto max-w-4xl">
							<TabsList className="mb-4">
								<TabsTrigger value="list">List View</TabsTrigger>
								<TabsTrigger value="calendar">Calendar View</TabsTrigger>
							</TabsList>
							<TabsContent value="list" className="space-y-6">
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
							</TabsContent>
							<TabsContent value="calendar">
								<Card>
									<CardContent className="p-6">
										<p className="text-center text-muted-foreground">
											Calendar view coming soon! Check back for an interactive calendar of all upcoming fairs.
										</p>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
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

			{/* Footer */}
			<footer className="flex w-full justify-center border-t">
				<div className="container px-4 py-8">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<p className="text-muted-foreground text-sm">© {new Date().getFullYear()} City Fairs. All rights reserved.</p>
						<nav className="flex gap-4">
							<a href="/#" className="text-muted-foreground text-sm hover:underline">
								Privacy Policy
							</a>
							<a href="/#" className="text-muted-foreground text-sm hover:underline">
								Terms of Service
							</a>
							<a href="/#" className="text-muted-foreground text-sm hover:underline">
								Contact
							</a>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	)
}
