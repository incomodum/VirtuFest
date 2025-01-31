"use client"

import { useRef, useEffect, useState } from "react"
import type { FairDetail, Vendor } from "@//types/fair"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@//components/ui/tooltip"

interface VendorMapProps {
	fair: FairDetail
}

export function VendorMap({ fair }: VendorMapProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null)
	const [mapImage, setMapImage] = useState<HTMLImageElement | null>(null)

	useEffect(() => {
		const img = new Image()
		img.src = fair.mapImage
		img.crossOrigin = "anonymous"
		img.onload = () => {
			setMapImage(img)
		}
	}, [fair.mapImage])

	useEffect(() => {
		if (!canvasRef.current || !mapImage) return

		const canvas = canvasRef.current
		const ctx = canvas.getContext("2d")
		if (!ctx) return

		// Set canvas size to match the map image
		canvas.width = mapImage.width
		canvas.height = mapImage.height

		// Draw the map
		ctx.drawImage(mapImage, 0, 0)

		// Draw vendor locations
		// biome-ignore lint/complexity/noForEach: <explanation>
		fair.vendors.forEach((vendor) => {
			ctx.beginPath()
			ctx.arc(vendor.location.x, vendor.location.y, 10, 0, 2 * Math.PI)
			ctx.fillStyle = getVendorTypeColor(vendor.type)
			ctx.fill()
			ctx.strokeStyle = "#ffffff"
			ctx.lineWidth = 2
			ctx.stroke()
		})
	}, [mapImage, fair.vendors])

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

	function handleCanvasClick(event: React.MouseEvent<HTMLCanvasElement>) {
		const canvas = canvasRef.current
		if (!canvas) return

		const rect = canvas.getBoundingClientRect()
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top

		// Find clicked vendor
		const clickedVendor = fair.vendors.find((vendor) => {
			const dx = vendor.location.x - x
			const dy = vendor.location.y - y
			return Math.sqrt(dx * dx + dy * dy) < 10
		})

		setSelectedVendor(clickedVendor || null)
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
					<canvas ref={canvasRef} onClick={handleCanvasClick} className="w-full cursor-pointer rounded-lg border" />
					{selectedVendor && (
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
					)}
				</TooltipProvider>
			</div>
		</div>
	)
}
