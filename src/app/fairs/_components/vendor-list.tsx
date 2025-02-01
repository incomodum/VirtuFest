"use client"

import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { VendorDetail } from "@/types/vendor"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface VendorListProps {
	vendors: VendorDetail[]
}

export function VendorList({ vendors }: VendorListProps) {
	const [searchTerm, setSearchTerm] = useState("")
	const router = useRouter()

	const filteredVendors = vendors.filter((vendor) => vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()))

	return (
		<div className="space-y-4">
			<div className="flex flex-row justify-between gap-4">
				<Input placeholder="Hľadať predajcov..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-sm" />
				<Select name="fairId" required defaultValue="all">
					<SelectTrigger className="max-w-xs">
						<SelectValue placeholder="Category" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Všetky kategórie</SelectItem>
						<SelectItem value="food">Občerstvenie</SelectItem>
						<SelectItem value="crafts">Umenie a Remeslá</SelectItem>
						<SelectItem value="services">Spotrebný tovar</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Stánok</TableHead>
							<TableHead>Názov</TableHead>
							<TableHead>Typ</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredVendors.map((vendor) => (
							<TableRow className="cursor-pointer" onClick={() => router.push(`/vendors/${vendor.id}`)} key={vendor.id}>
								<TableCell className="font-medium">{vendor.boothNumber}</TableCell>
								<TableCell>{vendor.businessName}</TableCell>
								<TableCell className="capitalize">{vendor.type}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}
