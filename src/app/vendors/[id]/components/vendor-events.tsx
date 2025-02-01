import { Calendar, MapPin } from "lucide-react"
import type { VendorEvent } from "@/types/vendor"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface VendorEventsProps {
	events: VendorEvent[]
}

export function VendorEvents({ events }: VendorEventsProps) {
	const upcomingEvents = events.filter((event) => event.status === "upcoming")
	const pastEvents = events.filter((event) => event.status === "completed")

	return (
		<div className="space-y-6">
			{/* Upcoming Events */}
			<div className="space-y-4">
				<h3 className="font-semibold text-lg">Nadchádzajúce události</h3>
				{upcomingEvents.length === 0 ? (
					<p className="text-muted-foreground">Nie sú naplánované žiadne nadchádzajúce udalosti.</p>
				) : (
					<div className="grid gap-4 sm:grid-cols-2">
						{upcomingEvents.map((event) => (
							<Card key={event.id}>
								<CardContent className="p-4">
									<div className="space-y-2">
										<div className="flex items-center justify-between">
											<h4 className="font-medium">{event.fairName}</h4>
											<Badge className="bg-[#00B975] hover:bg-[#009861]">Stánok {event.boothNumber}</Badge>
										</div>
										<div className="flex items-center gap-2 text-muted-foreground text-sm">
											<Calendar className="h-4 w-4" />
											{new Date(event.date).toLocaleDateString()}
										</div>
										<div className="flex items-center gap-2 text-muted-foreground text-sm">
											<MapPin className="h-4 w-4" />
											{event.location}
										</div>
										<Link href={`/fairs/${event.fairId}`} className="text-[#00B975] text-sm hover:underline">
											Zobraziť podrobnosti
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</div>

			{/* Past Events */}
			<div className="space-y-4">
				<h3 className="font-semibold text-lg">Minulé udalosti</h3>
				{pastEvents.length === 0 ? (
					<p className="text-muted-foreground">Žiadne minulé udalosti.</p>
				) : (
					<div className="grid gap-4 sm:grid-cols-2">
						{pastEvents.map((event) => (
							<Card key={event.id}>
								<CardContent className="p-4">
									<div className="space-y-2">
										<div className="flex items-center justify-between">
											<h4 className="font-medium">{event.fairName}</h4>
											<Badge variant="secondary" className="bg-[#00B97566] hover:bg-[#00B97533]">
												Stánok {event.boothNumber}
											</Badge>
										</div>
										<div className="flex items-center gap-2 text-muted-foreground text-sm">
											<Calendar className="h-4 w-4" />
											{new Date(event.date).toLocaleDateString()}
										</div>
										<div className="flex items-center gap-2 text-muted-foreground text-sm">
											<MapPin className="h-4 w-4" />
											{event.location}
										</div>
										<Link href={`/fairs/${event.fairId}`} className="text-[#00B975] text-sm hover:underline">
											Zobraziť podrobnosti
										</Link>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
