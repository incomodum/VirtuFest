import { Star } from "lucide-react"
import type { VendorReview } from "@/types/vendor"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface VendorReviewsProps {
	reviews: VendorReview[]
	rating: number
	reviewCount: number
}

export function VendorReviews({ reviews, rating, reviewCount }: VendorReviewsProps) {
	return (
		<div className="space-y-6">
			{/* Rating Summary */}
			<div className="flex flex-col items-center space-y-2 rounded-lg bg-muted p-6 text-center">
				<div className="font-bold text-4xl">{rating}</div>
				<div className="flex items-center">
					{[...Array(5)].map((_, i) => (
						<Star
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className={`h-5 w-5 ${
								i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted-foreground/25 text-muted-foreground/25"
							}`}
						/>
					))}
				</div>
				<div className="text-muted-foreground text-sm">Based on {reviewCount} reviews</div>
				<Button className="mt-4 bg-[#00B975] hover:bg-[#009861]">Write a Review</Button>
			</div>

			{/* Reviews List */}
			<div className="space-y-4">
				{reviews.map((review) => (
					<Card key={review.id}>
						<CardContent className="p-4">
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2">
										<div className="flex">
											{[...Array(5)].map((_, i) => (
												<Star
													// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
													key={i}
													className={`h-4 w-4 ${
														i < review.rating
															? "fill-yellow-400 text-yellow-400"
															: "fill-muted-foreground/25 text-muted-foreground/25"
													}`}
												/>
											))}
										</div>
										<span className="font-medium">{review.author}</span>
									</div>
									<span className="text-muted-foreground text-sm">{new Date(review.date).toLocaleDateString()}</span>
								</div>
								<p className="text-sm">{review.comment}</p>
								{review.response && (
									<div className="mt-4 rounded-lg bg-muted p-3">
										<p className="font-medium text-sm">Response from vendor:</p>
										<p className="mt-1 text-muted-foreground text-sm">{review.response}</p>
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
