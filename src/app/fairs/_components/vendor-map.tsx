"use client"

import type { FairDetail } from "@//types/fair"
import { TooltipProvider } from "@//components/ui/tooltip"
import MapComponent from "@/app/_components/map/map"

interface VendorMapProps {
	fair: FairDetail
}

export function VendorMap({ fair }: VendorMapProps) {
	console.log(fair)

	function getVendorTypeColor(type: string): string {
		const colors: Record<string, string> = {
			food: "#ef4444",
			crafts: "#3b82f6",
			retail: "#10b981",
			services: "#8b5cf6",
			other: "#6b7280"
		}
		return colors[type] || colors.other
	}

	return (
		<div className="space-y-4">
			<div className="flex flex-wrap gap-4">
				{Object.entries({
					food: "Food & Beverages",
					crafts: "Arts & Crafts",
					retail: "Retail",
					services: "Services",
					other: "Other"
				}).map(([type, label]) => (
					<div key={type} className="flex items-center gap-2">
						<div className="h-4 w-4 rounded-full" style={{ backgroundColor: getVendorTypeColor(type) }} />
						<span className="text-sm">{label}</span>
					</div>
				))}
			</div>

			<div className="relative">
				<TooltipProvider>
					<div className="aspect-square w-full overflow-clip rounded-md md:aspect-video">
						<MapComponent />
					</div>
					{/* {selectedVendor && (
						<Tooltip>
							<TooltipTrigger asChild>
								<div
									className="absolute h-5 w-5 cursor-pointer rounded-full border-2 border-white"
									style={{
										backgroundColor: getVendorTypeColor(selectedVendor.type),
										left: selectedVendor.location.x - 10,
										top: selectedVendor.location.y - 10
									}}
								/>
							</TooltipTrigger>
							<TooltipContent>
								<div className="space-y-1">
									<p className="font-medium">{selectedVendor.businessName}</p>
									<p className="text-muted-foreground text-sm">Booth: {selectedVendor.boothNumber}</p>
									<p className="text-muted-foreground text-sm">{selectedVendor.description}</p>
								</div>
							</TooltipContent>
						</Tooltip>
					)} */}
				</TooltipProvider>
			</div>
		</div>
	)
}
