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
			time: "10:00",
			title: "Slávnostné otvorenie jarmoku",
			description: "Oficiálne otvorenie za účasti miestnych predstaviteľov"
		},
		{
			time: "14:00",
			title: "Ukážka remeselníckej práce",
			description: "Živá ukážka výroby keramiky"
		},
		{
			time: "19:00",
			title: "Večerný koncert",
			description: "Vystúpenie miestnej kapely"
		}
	],
	"2024-04-16": [
		{
			time: "11:00",
			title: "Kulinárska dielňa",
			description: "Naučte sa od miestnych kuchárov"
		},
		{
			time: "15:00",
			title: "Výtvarná dielňa pre deti",
			description: "Zábavné výtvarné aktivity pre deti"
		},
		{
			time: "18:00",
			title: "Degustácia jedál",
			description: "Ochutnajte špeciality od našich predajcov jedál"
		}
	],
	"2024-04-17": [
		{
			time: "10:00",
			title: "Remeselnícka dielňa",
			description: "Naučte sa tradičné remeselnícke techniky"
		},
		{
			time: "16:00",
			title: "Slávnostné ukončenie jarmoku",
			description: "Ukončenie jarmoku a udeľovanie cien"
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
