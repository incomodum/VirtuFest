import type { FairDetail } from "@/types/fair"
import type { VendorDetail } from "@/types/vendor"

export const vendors: VendorDetail[] = [
	{
		id: 1,
		businessName: "Artisan Crafts Co",
		description:
			"We specialize in handcrafted pottery and ceramics, creating unique pieces that bring beauty to everyday life. Each item is carefully made using traditional techniques passed down through generations.",
		type: "Arts & Crafts",
		ownerName: "Sarah Johnson",
		email: "sarah@artisancrafts.co",
		phone: "(555) 123-4567",
		website: "https://artisancrafts.co",
		socialMedia: {
			facebook: "artisancraftsco",
			instagram: "artisancraftsco",
			twitter: "artisancraftsco"
		},
		images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
		rating: 4.8,
		reviewCount: 124,
		memberSince: "2020-01-15",
		verified: true,
		boothNumber: "A1",
		reviews: [
			{
				id: 1,
				rating: 5,
				comment: "Beautiful craftsmanship! The pottery pieces are absolutely stunning.",
				author: "Emily White",
				date: "2024-01-15"
			},
			{
				id: 2,
				rating: 4,
				comment: "Great quality products and friendly service.",
				author: "Michael Brown",
				date: "2024-01-10",
				response: "Thank you for your kind words! We're glad you enjoyed our products."
			}
		],
		events: [
			{
				id: 1,
				fairId: 1,
				fairName: "Spring Arts & Crafts Fair",
				date: "2024-04-15",
				location: "Centrum, Revúca",
				boothNumber: "A1",
				status: "upcoming"
			},
			{
				id: 2,
				fairId: 2,
				fairName: "Summer Market Festival",
				date: "2024-06-20",
				location: "Riverside Park",
				boothNumber: "B3",
				status: "upcoming"
			},
			{
				id: 3,
				fairId: 3,
				fairName: "Winter Wonderland Fair",
				date: "2023-12-10",
				location: "City Square",
				boothNumber: "C2",
				status: "completed"
			}
		]
	},
	{
		id: 2,
		businessName: "Sweet Treats Bakery",
		type: "food",
		// location: { x: 200, y: 150, space: "10x20" },
		description: "Fresh baked goods and pastries",
		email: "treats@example.com",
		boothNumber: "B2",
		ownerName: "Jozko Mrkvicka",
		phone: "+421912345678",
		socialMedia: {},
		images: [],
		events: [],
		rating: 4.8,
		reviewCount: 148,
		reviews: [],
		memberSince: "",
		verified: true
	}
]

export const upcomingFairs: FairDetail[] = [
	{
		id: 1,
		name: "Spring Arts & Crafts Fair",
		date: "2024-04-15",
		location: "Centrum",
		image: "/placeholder.svg",
		description: "Annual arts and crafts fair featuring local artisans",
		vendorSpaces: 50,
		expectedAttendance: 5000,
		featured: true,
		city: "Revúca",
		vendors,
		endDate: "",
		hours: "",
		parkingInfo: "",
		vendorCount: 70
	},
	{
		id: 2,
		name: "Summer Food Festival",
		date: "2024-06-20",
		location: "Riverside Park",
		image: "/placeholder.svg",
		description: "Celebrating local cuisine and food vendors",
		vendorSpaces: 75,
		expectedAttendance: 8000,
		featured: true,
		city: "Revúca",
		vendors,
		endDate: "",
		hours: "",
		parkingInfo: "",
		vendorCount: 70
	},
	{
		id: 3,
		name: "Autumn Harvest Market",
		date: "2024-09-10",
		location: "Downtown Square",
		image: "/placeholder.svg",
		description: "Seasonal produce and artisanal goods",
		vendorSpaces: 60,
		expectedAttendance: 6000,
		featured: true,
		city: "Revúca",
		vendors,
		endDate: "",
		hours: "",
		parkingInfo: "",
		vendorCount: 70
	}
] satisfies FairDetail[]
