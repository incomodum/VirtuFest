import Link from "next/link"
import { Store } from "lucide-react"
import { Button } from "@//components/ui/button"
import { SiteHeader } from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />
			<div className="flex h-auto flex-grow flex-col items-center justify-center">
				<div className="container flex flex-col items-center justify-center gap-4 px-4 text-center">
					<Store className="h-12 w-12 text-muted-foreground" />
					<h1 className="font-bold text-4xl">404 - Stránka sa nenašla</h1>
					<p className="max-w-[600px] text-lg text-muted-foreground">
						Ups! Stránka, ktorú hľadáte, sa zbalila a opustila veľtrh. Vrátime vás tam, kde je zábava!{" "}
					</p>
					<div className="flex gap-4">
						<Button asChild className="color-white bg-[#00B975] hover:bg-[#009861]">
							<Link href="/">Vrátiť sa domov</Link>
						</Button>
						<Button asChild variant="secondary" className="bg-[#B7F6DF] hover:bg-[#00B975]">
							<Link href="/fairs">Prehľadávať udalosti</Link>
						</Button>
					</div>
				</div>
			</div>
			<SiteFooter />
		</div>
	)
}
