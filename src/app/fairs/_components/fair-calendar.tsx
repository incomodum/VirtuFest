"use client"

import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"

interface Event {
	time: string
	title: string
	description: string
}

// Mock schedule data - in a real app, this would come from your backend
const schedule: Record<string, Event[]> = {
	"2024-04-15": [
		{
			time: "10:00 AM",
			title: "Fair Opening Ceremony",
			description: "Official opening with local officials"
		},
		{
			time: "2:00 PM",
			title: "Artisan Demonstration",
			description: "Live pottery making demonstration"
		},
		{
			time: "7:00 PM",
			title: "Evening Concert",
			description: "Local band performance"
		}
	],
	"2024-04-16": [
		{
			time: "11:00 AM",
			title: "Cooking Workshop",
			description: "Learn from local chefs"
		},
		{
			time: "3:00 PM",
			title: "Children's Art Workshop",
			description: "Fun art activities for kids"
		},
		{
			time: "6:00 PM",
			title: "Food Tasting Event",
			description: "Sample dishes from our food vendors"
		}
	],
	"2024-04-17": [
		{
			time: "10:00 AM",
			title: "Craft Workshop",
			description: "Learn traditional crafting techniques"
		},
		{
			time: "4:00 PM",
			title: "Closing Ceremony",
			description: "Fair closing and awards presentation"
		}
	]
}

export function FairCalendar() {
	return (
		<div className="space-y-8">
			{Object.entries(schedule).map(([day, events]) => (
				<div key={new Date(day).toISOString()} className="space-y-3">
					<h3 className="font-semibold text-lg text-muted-foreground">{format(day, "EEEE, MMMM d, yyyy")}</h3>
					<div className="grid gap-4">
						{events?.map((event) => (
							<Card key={event.description}>
								<CardContent className="flex gap-4 p-4">
									<div className="flex-shrink-0 font-medium text-muted-foreground text-sm">{event.time}</div>
									<div>
										<h4 className="font-medium">{event.title}</h4>
										<p className="text-muted-foreground text-sm">{event.description}</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
