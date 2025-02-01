export default function SiteFooter() {
	return (
		<footer className="flex w-full justify-center border-t">
			<div className="container px-4 py-8">
				<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="text-muted-foreground text-sm">© {new Date().getFullYear()} VirtuFest. All rights reserved.</p>
					<nav className="flex gap-4">
						<a href="/policy" className="text-muted-foreground text-sm hover:underline">
							Privacy Policy
						</a>
						<a href="/terms" className="text-muted-foreground text-sm hover:underline">
							Terms of Service
						</a>
						<a href="/contact" className="text-muted-foreground text-sm hover:underline">
							Kontakt
						</a>
					</nav>
				</div>
			</div>
		</footer>
	)
}
