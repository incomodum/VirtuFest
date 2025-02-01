import { Star, MapPin, Calendar, Globe, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { VendorReviews } from "./components/vendor-reviews"
import { VendorEvents } from "./components/vendor-events"
import { unstable_cache } from "next/cache"
import { getVendorById } from "@/lib/queries"
import { notFound } from "next/navigation"

export default async function VendorDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	const data = await unstable_cache(() => getVendorById(id), [`vendor-${id}`], { tags: [`vendor-${id}`], revalidate: 60 * 60 * 2 })()

	if (!data) return notFound()

	return (
		<div className="flex w-full flex-col items-center px-4">
			<div className="container py-6 md:py-10">
				<div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
					{/* Main Content */}
					<div className="space-y-6">
						{/* Vendor Header */}
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div className="space-y-1">
								<h1 className="font-bold text-2xl sm:text-3xl">{data.businessName}</h1>
								<p className="text-muted-foreground">{data.type}</p>
							</div>
							<div className="flex items-center">
								<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
								<span className="ml-1 font-medium">{data.rating}</span>
								<span className="ml-1 text-muted-foreground">({data.reviewCount} recenzie)</span>
							</div>
						</div>

						{/* Image Gallery */}
						<div className="flex min-h-[500px] w-full flex-col gap-4 sm:min-h-[500px] sm:flex-row">
							<div className="relative h-[500px] w-full flex-grow overflow-hidden rounded-lg">
								<Image
									src={data.images[0] || "/placeholder.svg"}
									alt={`${data.businessName} product 1`}
									fill
									className="object-cover"
								/>
							</div>
							<div className="flex w-full flex-row justify-between gap-4 sm:h-[500px] sm:w-fit sm:flex-col">
								{data.images.slice(1, 4).map((image, index) => (
									<div
										key={image}
										className="relative aspect-square h-auto w-1/3 overflow-hidden rounded-lg sm:h-[155px] sm:w-full"
									>
										<Image
											src={image || "/placeholder.svg"}
											alt={`${data.businessName} product ${index + 2}`}
											fill
											className="object-cover"
										/>
									</div>
								))}
							</div>
						</div>

						{/* Tabs */}
						<Tabs defaultValue="events" className="w-full">
							<TabsList>
								<TabsTrigger value="events">Udalosti</TabsTrigger>
								<TabsTrigger value="reviews">Recenzie</TabsTrigger>
							</TabsList>
							<TabsContent value="events">
								<VendorEvents events={data.events} />
							</TabsContent>
							<TabsContent value="reviews">
								<VendorReviews reviews={data.reviews} rating={data.rating} reviewCount={data.reviewCount} />
							</TabsContent>
						</Tabs>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle>Základné informácie</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center gap-2">
									<Calendar className="size-4 text-muted-foreground" />
									<span>Stánkarom od {new Date(data.memberSince).getFullYear()}</span>
								</div>
								<div className="flex items-center gap-2">
									<MapPin className="size-4 text-muted-foreground" />
									<span>Účasť na miestnych jarmokoch</span>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Najblyžšie podujatie</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{data.events
									.filter((event) => event.status === "upcoming")
									.slice(0, 1)
									.map((event) => (
										<div key={event.id} className="space-y-2">
											<h3 className="font-medium">{event.fairName}</h3>
											<div className="flex items-center gap-2 text-muted-foreground text-sm">
												<Calendar className="size-4" />
												{new Date(event.date).toLocaleDateString()}
											</div>
											<div className="flex items-center gap-2 text-muted-foreground text-sm">
												<MapPin className="size-4" />
												{event.location}
											</div>
											<Button asChild className="w-full bg-[#00B975] hover:bg-[#009861]">
												<Link href={`/fairs/${event.fairId}`}>Zobraziť detaily o udalosti</Link>
											</Button>
										</div>
									))}
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Kontakt</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2">
								<div className="flex items-center gap-2">
									<Mail className="size-4 text-muted-foreground" />
									<a href={`mailto:${data.email}`} className="hover:underline">
										{data.email}
									</a>
								</div>
								<div className="flex items-center gap-2">
									<Phone className="size-4 text-muted-foreground" />
									<a href={`tel:${data.phone}`} className="hover:underline">
										{data.phone}
									</a>
								</div>
								{data.website && (
									<div className="flex items-center gap-2">
										<Globe className="size-4 text-muted-foreground" />
										<a href={data.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
											Webstránka
										</a>
									</div>
								)}
								{data.socialMedia.facebook && (
									<a
										href={`https://facebook.com/${data.socialMedia.facebook}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 hover:underline"
									>
										<Facebook className="size-4 text-muted-foreground" />
										Facebook
									</a>
								)}
								{data.socialMedia.instagram && (
									<a
										href={`https://instagram.com/${data.socialMedia.instagram}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 hover:underline"
									>
										<Instagram className="size-4 text-muted-foreground" />
										Instagram
									</a>
								)}
								{data.socialMedia.twitter && (
									<a
										href={`https://twitter.com/${data.socialMedia.twitter}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 hover:underline"
									>
										<Twitter className="size-4 text-muted-foreground" />
										Twitter
									</a>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
