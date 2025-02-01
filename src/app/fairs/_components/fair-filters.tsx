"use client"

import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function FairFilters() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" className="w-auto px-4">
					<Filter className="mr-2 h-4 w-4" />
					Filtre
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px]" align="end">
				<div className="space-y-4">
					<div className="space-y-2">
						<h4 className="font-medium">Lokácia</h4>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Výber mesta" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ba">Bratislava</SelectItem>
								<SelectItem value="bb">Banská Bystrica</SelectItem>
								<SelectItem value="pd">Prievidza</SelectItem>
								<SelectItem value="pe">Partizánske</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Separator />
					<div className="space-y-2">
						<h4 className="font-medium">Cena</h4>
						<div className="space-y-2">
							<div className="flex items-center space-x-2">
								<Checkbox id="free" />
								<label
									htmlFor="free"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Zadarmo vstupné
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="paid" />
								<label
									htmlFor="paid"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Platené vstupné
								</label>
							</div>
						</div>
					</div>
					<Separator />
					<div className="space-y-2">
						<h4 className="font-medium">Funkcie</h4>
						<div className="space-y-2">
							<div className="flex items-center space-x-2">
								<Checkbox id="family-friendly" />
								<label
									htmlFor="family-friendly"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Vhodné pre rodiny
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="food-available" />
								<label
									htmlFor="food-available"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Dostupné občerstvenie
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="parking" />
								<label
									htmlFor="parking"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Zadarmo parkovanie
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="accessible" />
								<label
									htmlFor="accessible"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Prístupné pre invalidné vozíky
								</label>
							</div>
						</div>
					</div>
					<Separator />
					<div className="flex justify-end gap-2">
						<Button variant="outline">Resetovať</Button>
						<Button>Použiť filtre</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
