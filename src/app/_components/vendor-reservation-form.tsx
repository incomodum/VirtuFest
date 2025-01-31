"use client"

import { Button } from "@//components/ui/button"
import { Card, CardContent } from "@//components/ui/card"
import { Input } from "@//components/ui/input"
import { Label } from "@//components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@//components/ui/select"
import { Textarea } from "@//components/ui/textarea"
// import { useToast } from "@/components/ui/use-toast"
import { submitVendorReservation } from "@//actions/vendor-reservation"

interface Fair {
	id: number
	name: string
	date: string
}

interface VendorReservationFormProps {
	fairs: Fair[]
}

export default function VendorReservationForm({ fairs }: VendorReservationFormProps) {
	//   const { toast } = useToast()

	return (
		<Card>
			<CardContent className="grid p-0 md:grid-cols-2">
				<div className="p-6 md:p-8">
					<form
						action={async (formData) => {
							const result = await submitVendorReservation(formData)
							if (result.success) {
								//   toast({
								//     title: "Success!",
								//     description: result.message,
								//   })
							}
						}}
						className="space-y-4"
					>
						<div className="grid gap-2">
							<Label htmlFor="name">Business Name</Label>
							<Input id="name" name="name" autoComplete="organization" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" name="email" type="email" autoComplete="email" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="fairId">Select Fair</Label>
							<Select name="fairId" required>
								<SelectTrigger>
									<SelectValue placeholder="Choose a fair" />
								</SelectTrigger>
								<SelectContent>
									{fairs.map((fair) => (
										<SelectItem key={fair.id} value={fair.id.toString()}>
											{fair.name} - {new Date(fair.date).toLocaleDateString()}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="businessType">Business Type</Label>
							<Select name="businessType" required>
								<SelectTrigger>
									<SelectValue placeholder="Select business type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="food">Food & Beverages</SelectItem>
									<SelectItem value="crafts">Arts & Crafts</SelectItem>
									<SelectItem value="retail">Retail</SelectItem>
									<SelectItem value="services">Services</SelectItem>
									<SelectItem value="other">Other</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="spaceNeeded">Space Requirements</Label>
							<Select name="spaceNeeded" required>
								<SelectTrigger>
									<SelectValue placeholder="Select space size" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="small">Small (10x10)</SelectItem>
									<SelectItem value="medium">Medium (10x20)</SelectItem>
									<SelectItem value="large">Large (20x20)</SelectItem>
									<SelectItem value="custom">Custom Size</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="notes">Additional Notes</Label>
							<Textarea id="notes" name="notes" placeholder="Any special requirements or additional information..." />
						</div>
						<Button type="submit" className="w-full">
							Submit Reservation
						</Button>
						<div className="text-center text-sm">
							Already have an account?{" "}
							<a href="/signin" className="underline underline-offset-4">
								Sign in
							</a>
						</div>
					</form>
				</div>
				<div className="relative bg-muted md:block">
					<img
						src="/placeholder.svg"
						alt="placeholder"
						className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
					/>
				</div>
			</CardContent>
		</Card>
	)
}
