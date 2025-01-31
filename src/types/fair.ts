import type { VendorDetail } from "./vendor"

export interface FairDetail {
	id: number
	name: string
	date: string
	endDate: string
	location: string
	description: string
	image: string
	vendorSpaces: number
	expectedAttendance: number
	vendors: VendorDetail[]
	hours: string
	parkingInfo: string
	featured: boolean
	city: string
	vendorCount: number
}

export interface FairListing {
	id: number
	name: string
	description: string
	date: string
	endDate: string
	location: string
	city: string
	state: string
	image: string
	category: string
	vendorCount: number
	expectedAttendance: number
	ticketPrice: string
	status: "upcoming" | "ongoing" | "completed"
	featured: boolean
}

export interface FairCategory {
	id: string
	name: string
	description: string
}
