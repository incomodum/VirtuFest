"use client"

import { Input } from "@//components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@//components/ui/table"
import type { Vendor } from "@//types/fair"
import { useState } from "react"

interface VendorListProps {
	vendors: Vendor[]
}

export function VendorList({ vendors }: VendorListProps) {
	const [searchTerm, setSearchTerm] = useState("")

	const filteredVendors = vendors.filter((vendor) => vendor.businessName.toLowerCase().includes(searchTerm.toLowerCase()))

	return (
		<div className="space-y-4">
			<Input placeholder="Search vendors..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-sm" />
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Booth</TableHead>
							<TableHead>Business Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Space</TableHead>
							<TableHead>Contact</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredVendors.map((vendor) => (
							<TableRow key={vendor.id}>
								<TableCell className="font-medium">{vendor.boothNumber}</TableCell>
								<TableCell>{vendor.businessName}</TableCell>
								<TableCell className="capitalize">{vendor.type}</TableCell>
								<TableCell>{vendor.location.space}</TableCell>
								<TableCell>{vendor.contactEmail}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	)
}
