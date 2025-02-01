"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Calendar, ChevronRight, CreditCard, ShieldCheck } from "lucide-react"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ApplePay, GooglePay, MasterCard, TatraPay, Visa } from "./icons"

export default function Payment() {
	const [formData, setFormData] = useState({
		email: "",
		firstName: "",
		lastName: "",
		address: "",
		apartment: "",
		city: "",
		country: "US",
		state: "",
		zipCode: "",
		phone: "",
		saveInfo: false,
		shippingMethod: "standard",
		paymentMethod: "credit",
		expMonth: "",
		expYear: "",
		cardNumber: ""
	})

	const [errors, setErrors] = useState<Record<string, string>>({})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }))
		}
	}

	return (
		<div className="flex h-auto w-full flex-grow justify-center px-4 py-8">
			<div className="container grid grid-cols-1 gap-4 md:grid-cols-5">
				<div className="space-y-4 md:col-span-3">
					<h2 className="font-semibold text-lg">Payment Method</h2>
					<RadioGroup
						value={formData.paymentMethod}
						onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
						className="flex flex-col gap-4"
					>
						<Label className="flex cursor-pointer items-center justify-between rounded-lg border p-4 [&:has(:checked)]:bg-muted">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="credit" id="credit" />
								<div>Credit / Debit Card</div>
							</div>
							<div className="flex items-center gap-2">
								<Visa width={36} height={28} />
								<MasterCard width={30} height={20} />
								{/* <Image src="/placeholder.svg" alt="Discover" width={32} height={20} className="h-5 w-8" /> */}
							</div>
						</Label>
						<Label className="flex cursor-pointer items-center justify-between rounded-lg border p-4 [&:has(:checked)]:bg-muted">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="tatrapay" id="tatrapay" />
								<div>TatraPay</div>
							</div>
							<TatraPay width={40} height={16} />
						</Label>
						<Label className="flex cursor-pointer items-center justify-between rounded-lg border p-4 [&:has(:checked)]:bg-muted">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="apple" id="apple" />
								<div>Apple Pay</div>
							</div>
							<ApplePay width={58} height={16} />
						</Label>
						<Label className="flex cursor-pointer items-center justify-between rounded-lg border p-4 [&:has(:checked)]:bg-muted">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="google" id="google" />
								<div>Google Pay</div>
							</div>
							<GooglePay width={62} height={20} />
						</Label>
					</RadioGroup>

					{formData.paymentMethod === "credit" && (
						<div className="space-y-6">
							{/* Card Preview */}
							<div className="relative flex aspect-[1.586] h-48 flex-col justify-end rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 p-4 text-white shadow-lg">
								<div className="absolute top-6 right-6">
									{formData.cardNumber.startsWith("4") && <Visa className="text-white" width={48} height={32} />}
									{["2", "5"].includes(formData.cardNumber[0]) && <MasterCard width={48} height={32} />}
								</div>
								<div className="w-full space-y-4">
									<div className="font-mono text-lgs">{formData.cardNumber || "•••• •••• •••• ••••"}</div>
									<div className="flex justify-between">
										<div className="space-y-1">
											<p className="text-gray-300 text-xs">Držitel karty</p>
											<p className="font-mono text-sm">
												{formData.firstName || formData.lastName ? `${formData.firstName} ${formData.lastName}` : "MENO"}
											</p>
										</div>
										<div className="space-y-1">
											<p className="text-gray-300 text-xs">Platnosť</p>
											<p className="font-mono text-sm">
												{formData.expMonth || "MM"}/{formData.expYear || "YY"}
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Card Details Form */}
							<div className="flex w-full flex-col gap-4 md:flex-row">
								<div className="w-auto flex-grow space-y-2">
									<Label htmlFor="cardNumber">Číslo karty</Label>
									<div className="relative">
										<Input
											id="cardNumber"
											name="cardNumber"
											placeholder="0000 0000 0000 0000"
											maxLength={19}
											onChange={(e) => {
												let value = e.target.value.replace(/\s/g, "")
												if (value.length > 16) return
												// Add space after every 4 digits
												value = value.replace(/(\d{4})/g, "$1 ").trim()
												setFormData((prev) => ({ ...prev, cardNumber: value }))
											}}
											className="pl-12"
										/>
										<CreditCard className="-translate-y-1/2 absolute top-1/2 left-4 h-4 w-4 text-muted-foreground" />
									</div>
								</div>
								<div className="flex flex-row gap-4">
									<div className="space-y-2">
										<Label>Platnosť</Label>
										<div className="relative h-10 w-full min-w-[200px] rounded-md border border-input bg-transparent pl-8 text-base shadow-sm transition-colors">
											<Calendar className="-translate-y-1/2 absolute top-1/2 left-4 h-4 w-4 text-muted-foreground" />
											<input
												onChange={handleInputChange}
												name="expMonth"
												className="h-10 w-[42px] pt-2 pr-0.5 pb-2.5 pl-4 text-right text-sm focus:outline-none"
												placeholder="MM"
												maxLength={2}
											/>
											<span className="font-light text-muted-foreground">/</span>
											<input
												onChange={handleInputChange}
												name="expYear"
												className="h-10 w-[40px] pt-2 pr-4 pb-2.5 pl-0.5 text-sm focus:outline-none"
												placeholder="YY"
												maxLength={2}
											/>
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="cvv">Verifikačný kód (CVV)</Label>
										<div className="relative">
											<Input id="cvv" name="cvv" placeholder="123" maxLength={4} className="pl-12" />
											<ShieldCheck className="-translate-y-1/2 absolute top-1/2 left-4 h-4 w-4 text-muted-foreground" />
										</div>
									</div>
								</div>
							</div>

							{/* Security Info */}
							<div className="rounded-lg border bg-muted/50 p-4">
								<div className="flex items-center gap-2">
									<ShieldCheck className="h-5 w-5 text-green-600" />
									<div className="text-sm">
										<p className="font-medium">Bezpečná platba</p>
										<p className="text-muted-foreground">
											Vaše platobné údaje sú šifrované a zabezpečené. Neuchovávame údaje o vašej platobnej karte.
										</p>
									</div>
								</div>
							</div>

							{/* Billing Address */}
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<h3 className="font-medium">Fakturačná adresa</h3>
								</div>
								<div className="grid gap-4">
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="space-y-2">
											<Label htmlFor="firstName">Meno</Label>
											<Input id="firstName" name="firstName" autoComplete="billing given-name" onChange={handleInputChange} />
										</div>
										<div className="space-y-2">
											<Label htmlFor="lastName">Priezvisko</Label>
											<Input id="lastName" name="lastName" autoComplete="billing family-name" onChange={handleInputChange} />
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="address">Adresa</Label>
										<Input id="address" name="address" autoComplete="billing street-address" onChange={handleInputChange} />
									</div>
									<div className="grid gap-4 sm:grid-cols-3">
										<div className="space-y-2">
											<Label htmlFor="city">Mesto</Label>
											<Input id="city" name="city" autoComplete="billing address-level2" onChange={handleInputChange} />
										</div>
										<div className="space-y-2">
											<Label htmlFor="state">Štát</Label>
											<Input id="state" name="state" autoComplete="billing address-level1" onChange={handleInputChange} />
										</div>
										<div className="space-y-2">
											<Label htmlFor="zip">ZIP Kód</Label>
											<Input id="zip" name="zip" autoComplete="billing postal-code" onChange={handleInputChange} />
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{formData.paymentMethod === "tatrapay" && (
						<div className="rounded-lg border bg-muted/50 p-4 text-center">
							<p className="text-muted-foreground text-sm">Budete presmerovaní na TatraPay, aby ste bezpečne dokončili platbu.</p>
						</div>
					)}

					{(formData.paymentMethod === "apple" || formData.paymentMethod === "google") && (
						<div className="rounded-lg border bg-muted/50 p-4 text-center">
							<p className="text-muted-foreground text-sm">Budete vyzvaní na overenie platby pomocou vášho zariadenia.</p>
						</div>
					)}
				</div>
				<div className="mt-8 md:col-span-2">
					<div className="rounded-lg border">
						<div className="flex items-center justify-between border-b px-6 py-4">
							<h2 className="font-semibold">Summary</h2>
						</div>
						<div className="space-y-4 p-6">
							<div className="space-y-2">
								<div className="flex justify-between text-sm">
									<span>Subtotal</span>
									<span>$279.97</span>
								</div>
								<div className="flex justify-between text-sm">
									<span>Tax</span>
									<span>$28.00</span>
								</div>
							</div>
							<Separator />
							<div className="flex justify-between font-medium">
								<span>Total</span>
								<span>$307.97</span>
							</div>
							<Button className="w-full bg-[#00B975] hover:bg-[#009861]">
								Zaplaťiť
								<ChevronRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>

					{/* Trust Badges */}
					<div className="mt-8 grid grid-cols-3 gap-4 text-center text-muted-foreground text-sm">
						<div className="space-y-2">
							<div className="mx-auto w-fit rounded-full bg-muted p-2">
								<ShieldCheck className="h-5 w-5" />
							</div>
							<p>Secure Payment</p>
						</div>
						<div className="space-y-2">
							<div className="mx-auto w-fit rounded-full bg-muted p-2">
								<CreditCard className="h-5 w-5" />
							</div>
							<p>Secure Checkout</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
