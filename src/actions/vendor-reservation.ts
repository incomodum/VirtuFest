"use server"

export async function submitVendorReservation(formData: FormData) {
	// Simulate a delay
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const name = formData.get("name")
	const email = formData.get("email")
	const fairId = formData.get("fairId")
	const businessType = formData.get("businessType")
	const spaceNeeded = formData.get("spaceNeeded")

	// Here you would typically save this to a database
	console.log("Vendor Reservation:", { name, email, fairId, businessType, spaceNeeded })

	return {
		success: true,
		message: "Reservation submitted successfully! We will contact you shortly."
	}
}
