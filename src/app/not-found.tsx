import Link from "next/link"
import { Tent } from "lucide-react"
import { Button } from "@//components/ui/button"

export default function NotFound() {
	return (
		<div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
			<div className="container flex flex-col items-center justify-center gap-4 px-4 text-center">
				<Tent className="h-12 w-12 text-muted-foreground" />
				<h1 className="font-bold text-4xl">404 - Page Not Found</h1>
				<p className="max-w-[600px] text-lg text-muted-foreground">
					Oops! The page you're looking for has packed up and left the fair. Let's get you back to where the fun is!
				</p>
				<div className="flex gap-4">
					<Button asChild>
						<Link href="/">Return Home</Link>
					</Button>
					<Button asChild variant="outline">
						<Link href="/fairs">Browse Fairs</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
