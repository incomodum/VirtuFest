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
				<Button variant="outline" className="w-auto">
					<Filter className="mr-2 h-4 w-4" />
					Filters
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px]" align="end">
				<div className="space-y-4">
					<div className="space-y-2">
						<h4 className="font-medium">Location</h4>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select state" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="ny">New York</SelectItem>
								<SelectItem value="ca">California</SelectItem>
								<SelectItem value="tx">Texas</SelectItem>
								<SelectItem value="fl">Florida</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Separator />
					<div className="space-y-2">
						<h4 className="font-medium">Price</h4>
						<div className="space-y-2">
							<div className="flex items-center space-x-2">
								<Checkbox id="free" />
								<label
									htmlFor="free"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Free Entry
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="paid" />
								<label
									htmlFor="paid"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Paid Entry
								</label>
							</div>
						</div>
					</div>
					<Separator />
					<div className="space-y-2">
						<h4 className="font-medium">Features</h4>
						<div className="space-y-2">
							<div className="flex items-center space-x-2">
								<Checkbox id="family-friendly" />
								<label
									htmlFor="family-friendly"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Family Friendly
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="food-available" />
								<label
									htmlFor="food-available"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Food Available
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="parking" />
								<label
									htmlFor="parking"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Free Parking
								</label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="accessible" />
								<label
									htmlFor="accessible"
									className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Wheelchair Accessible
								</label>
							</div>
						</div>
					</div>
					<Separator />
					<div className="flex justify-end gap-2">
						<Button variant="outline">Reset</Button>
						<Button>Apply Filters</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
