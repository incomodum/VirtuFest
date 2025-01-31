export interface Vendor {
	id: number
	businessName: string
	type: string
	location: {
		x: number
		y: number
		space: string
	}
	description: string
	contactEmail: string
	boothNumber: string
}

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
	vendors: Vendor[]
	mapImage: string
	hours: string
	admissionFee: string
	parkingInfo: string
}
