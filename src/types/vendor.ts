export interface VendorReview {
	id: number
	rating: number
	comment: string
	author: string
	date: string
	response?: string
}

export interface VendorEvent {
	id: number
	fairId: number
	fairName: string
	date: string
	location: string
	boothNumber: string
	status: "upcoming" | "completed" | "cancelled"
}

export interface VendorDetail {
	id: number
	businessName: string
	description: string
	type: string
	ownerName: string
	email: string
	phone: string
	website?: string
	boothNumber: string
	socialMedia: {
		facebook?: string
		instagram?: string
		twitter?: string
	}
	images: string[]
	rating: number
	reviewCount: number
	reviews: VendorReview[]
	events: VendorEvent[]
	memberSince: string
	verified: boolean
}
