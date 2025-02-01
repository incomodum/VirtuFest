import SiteFooter from "@/components/site-footer"

export default function FairLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<SiteFooter />
		</>
	)
}
