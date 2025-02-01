"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

interface Fair {
	id: number
	name: string
	date: string
}

interface VendorReservationFormProps {
	fairs: Fair[]
}

// TODO: Add certificate upload as required
export default function VendorReservationForm({ fairs }: VendorReservationFormProps) {
	const [tab, setTab] = useState("start")

	return (
		<Tabs value={tab} className="flex w-full flex-col items-center space-y-4" onValueChange={(e) => setTab(e)}>
			{tab !== "start" && (
				<TabsList>
					<TabsTrigger value="basic-info">Základné informácie</TabsTrigger>
					<TabsTrigger value="stall">Stánok</TabsTrigger>
					<TabsTrigger value="profile">Profil</TabsTrigger>
				</TabsList>
			)}
			<Card className="w-[90%] md:w-[600px]">
				{tab === "basic-info" && (
					<CardHeader className="w-full">
						<CardTitle>Základné informácie</CardTitle>
						<CardDescription>Potrebné informácie na kontrolu legitímnosti</CardDescription>
					</CardHeader>
				)}
				{tab === "stall" && (
					<CardHeader className="w-full">
						<CardTitle>Rezervácia miesta</CardTitle>
						<CardDescription>Potrebné informácie na kontrolu legitímnosti</CardDescription>
					</CardHeader>
				)}
				{tab === "profile" && (
					<CardHeader className="w-full">
						<CardTitle>Vytvorenie profilu</CardTitle>
						<CardDescription>Údaje pre vytvorenie profilu VirtuFest</CardDescription>
					</CardHeader>
				)}
				<CardContent className="m-0">
					<form className="flex flex-col gap-4">
						<TabsContent className="flex flex-col items-center gap-4" value="start">
							<p className="mt-6 w-full text-center font-bold text-2xl">Upozornenie</p>
							<p className="text-center">
								Na registráciu stánkara budete
								<br className="md:hidden" /> potrebovať tieto dokumenty
							</p>
							<ul className="w-full list-inside list-decimal">
								<li>
									Výpis z{" "}
									<a
										className="underline hover:text-[#00B975]"
										href="https://www.orsr.sk/search_subjekt.asp"
										target="_blank"
										rel="noreferrer"
									>
										ORSR
									</a>
								</li>
								<li>Doklad preukazujúci splnenie požiadaviek na predaj výrobkov a poskytovanie služieb podľa osobitných predpisov</li>
								<li>Kód VRP a vzor pokladničného dokladu</li>
							</ul>
							<Button type="button" onClick={() => setTab("basic-info")} className="w-full bg-[#00B975] hover:bg-[#009861]">
								Pokračovať
							</Button>
						</TabsContent>
						<TabsContent className="flex flex-col gap-4" value="basic-info">
							<div className="grid gap-2">
								<Label htmlFor="name">Obchodné meno</Label>
								<Input id="name" name="name" autoComplete="organization" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="ico">IČO</Label>
								<Input id="ico" name="ico" type="text" />
							</div>
							<div className="grid grid-cols-2 gap-2">
								<div className="grid gap-2">
									<Label htmlFor="name">Meno</Label>
									<Input id="name" name="name" type="text" autoComplete="given-name" required />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="surname">Priezvisko</Label>
									<Input id="surname" name="surname" type="text" autoComplete="family-name" required />
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" name="email" type="email" placeholder="example@gmail.com" autoComplete="email" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="orsr">Výpis z ORSR</Label>
								<Input id="orsr" name="orsr" type="file" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="orsr">Doklady oprávnenia činnosti</Label>
								<Input id="orsr" name="orsr" type="file" required />
							</div>
							<div className="items-top flex space-x-2">
								<Checkbox id="tzp" className="data-[state=checked]:bg-[#00B975]" />
								<div className="grid gap-1.5 leading-none">
									<label
										htmlFor="tzp"
										className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Preukaz ŤZP
									</label>
									<p className="text-muted-foreground text-sm">Pri preukaze ŤZP máte nárok na zľavu rezerváciu miesta</p>
								</div>
							</div>
							<Button type="button" onClick={() => setTab("stall")} className="w-full bg-[#00B975] hover:bg-[#009861]">
								Pokračovať
							</Button>
						</TabsContent>
						<TabsContent className="space-y-4" value="stall">
							<div className="grid gap-2">
								<Label htmlFor="fairId">Podujatie</Label>
								<Select name="fairId" required>
									<SelectTrigger>
										<SelectValue placeholder="Vyberte podujatie" className="placeholder:text-muted-foreground" />
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
								<Label htmlFor="businessType">Typ sortimentu</Label>
								<Select name="businessType" required>
									<SelectTrigger>
										<SelectValue placeholder="Vyberte sortiment" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="food">Občerstvenie</SelectItem>
										<SelectItem value="crafts">Umenie a remeslá</SelectItem>
										<SelectItem value="retail">Maloobchod</SelectItem>
										<SelectItem value="services">Služby</SelectItem>
										<SelectItem value="other">Iné</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="spaceNeeded">Veľkosť stánku</Label>
								<Select name="spaceNeeded" required>
									<SelectTrigger>
										<SelectValue placeholder="Vyberte velkosť stánku" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="small">Malý (2.5m)</SelectItem>
										<SelectItem value="medium">Stredný (3.5m)</SelectItem>
										<SelectItem value="large">Veľký (5m)</SelectItem>
										<SelectItem value="custom">Custom Size</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="grid gap-2">
								<Label>Požiadavky</Label>
								<div className="flex w-full flex-row justify-between">
									<div className="items-top flex space-x-2">
										<Checkbox id="parking" className="data-[state=checked]:bg-[#00B975]" />
										<div className="grid gap-1.5 leading-none">
											<label
												htmlFor="parking"
												className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Parkovanie za stánkom
											</label>
										</div>
									</div>
									<div className="items-top flex space-x-2">
										<Checkbox id="electricity" className="data-[state=checked]:bg-[#00B975]" />
										<div className="grid gap-1.5 leading-none">
											<label
												htmlFor="electricity"
												className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Elektrická energia
											</label>
										</div>
									</div>
									<div className="items-top flex space-x-2">
										<Checkbox id="tzp" className="data-[state=checked]:bg-[#00B975]" />
										<div className="grid gap-1.5 leading-none">
											<label
												htmlFor="tzp"
												className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Prístup k vode
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="notes">Dodatočné Info</Label>
								<Textarea id="notes" name="notes" placeholder="Any special requirements or additional information..." />
							</div>
							<Button type="button" onClick={() => setTab("profile")} className="w-full bg-[#00B975] hover:bg-[#009861]">
								Pokračovať
							</Button>
						</TabsContent>
						<TabsContent className="space-y-4" value="profile">
							<div className="grid gap-2">
								<Label htmlFor="email">Verejný kontaktný email</Label>
								<Input id="email" name="email" type="email" placeholder="example@gmail.com" autoComplete="email" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="gallery">Galéria fotiek</Label>
								<Input id="gallery" name="gallery" type="file" required />
							</div>
							<Label>Poznámka</Label>
							<p className="">Váš profil bude vytvorený po prvom schválení rezervácie miesta a overení dodaných údajov</p>
							<div className="items-top flex space-x-2">
								<Checkbox id="gdpr" className="data-[state=checked]:bg-[#00B975]" />
								<div className="grid gap-1.5 leading-none">
									<label
										htmlFor="gdpr"
										className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Súhlas so spracovaním osobných údajov
									</label>
								</div>
							</div>
							<Button asChild type="submit" className="w-full bg-[#00B975] hover:bg-[#009861]">
								<Link href="/vendors/apply/pay">Odoslať rezerváciu</Link>
							</Button>
						</TabsContent>
					</form>
				</CardContent>
			</Card>
			<div className="text-center text-sm">
				Už máte účet?{" "}
				<a href="/auth/sign-in" className="underline underline-offset-4">
					Prihláste sa
				</a>
			</div>
		</Tabs>
	)
}
