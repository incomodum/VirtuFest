"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Tent } from "lucide-react"

const fairs = [
	{
		title: "Nadchádzajúce udalosti",
		href: "/fairs",
		description: "Prezrite si a objavte nadchádzajúce kultúrne udalosti vo vašom okolí."
	},
	{
		title: "Udalosti v minulosti",
		href: "/fairs/past",
		description: "Pozrite si fotografie a zaujímavosti z našich predchádzajúcich veľtrhov."
	},
	{
		title: "Kalendár udalostí",
		href: "/fairs/calendar",
		description: "Pozrite si kompletný plán nadchádzajúcich podujatí."
	}
]

const vendors = [
	{
		title: "Staň sa stánkarom",
		href: "/vendors/apply",
		description: "Požiadajte o možnosť prezentovať svoje výrobky na našich veľtrhoch."
	},
	{
		title: "Pokyny pre predajcov",
		href: "/vendors/guidelines",
		description: "Prečítajte si o našich zásadách a požiadavkách na predajcov."
	},
	{
		title: "Adresár predajcov",
		href: "/vendors/directory",
		description: "Preskúmajte našu komunitu registrovaných predajcov."
	}
]

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 flex w-full justify-center border-b bg-background px-4">
			<div className="container flex h-16 items-center">
				<MainNav />
				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Udalosti</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
												href="/fairs"
											>
												<Image src={"/logoRevuca.svg"} alt="logo" width={200} height={50} />
											</a>
										</NavigationMenuLink>
									</li>
									{fairs.map((fair) => (
										<ListItem key={fair.title} title={fair.title} href={fair.href}>
											{fair.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Stánkari</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{vendors.map((vendor) => (
										<ListItem key={vendor.title} title={vendor.title} href={vendor.href}>
											{vendor.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/about" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>O nás</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/contact" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Kontakt</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<Button asChild variant="default" className="hidden md:inline-flex">
							<Link href="/auth/sign-in">Prihlásiť sa</Link>
						</Button>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="outline" size="icon" className="md:hidden">
									<Menu className="h-5 w-5" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
								<MobileNav />
							</SheetContent>
						</Sheet>
					</nav>
				</div>
			</div>
		</header>
	)
}

function MainNav() {
	return (
		<div className="mr-4 flex">
			<Link href="/revuca" className="mr-6 flex items-center space-x-2">
				<Image src={"/logoRevuca.svg"} alt="logo" width={200} height={20} />
			</Link>
		</div>
	)
}

function MobileNav() {
	const pathname = usePathname()

	return (
		<div className="grid gap-6 p-4">
			<Link href="/" className="flex items-center space-x-2 font-bold text-lg">
				<Tent className="h-5 w-5" />
				<span>VirtuFest</span>
			</Link>
			<div className="grid gap-4">
				<h4 className="font-medium">Fairs</h4>
				<div className="grid gap-2">
					{fairs.map((fair) => (
						<Link
							key={fair.title}
							href={fair.href}
							className={cn("text-muted-foreground hover:text-foreground", pathname === fair.href && "text-foreground")}
						>
							{fair.title}
						</Link>
					))}
				</div>
			</div>
			<div className="grid gap-4">
				<h4 className="font-medium">Vendors</h4>
				<div className="grid gap-2">
					{vendors.map((vendor) => (
						<Link
							key={vendor.title}
							href={vendor.href}
							className={cn("text-muted-foreground hover:text-foreground", pathname === vendor.href && "text-foreground")}
						>
							{vendor.title}
						</Link>
					))}
				</div>
			</div>
			<div className="grid gap-2">
				<Link href="/about" className={cn("text-muted-foreground hover:text-foreground", pathname === "/about" && "text-foreground")}>
					About
				</Link>
				<Link href="/contact" className={cn("text-muted-foreground hover:text-foreground", pathname === "/contact" && "text-foreground")}>
					Contact
				</Link>
			</div>
			<Button asChild>
				<Link href="/vendors/apply">Become a Vendor</Link>
			</Button>
		</div>
	)
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted",
						className
					)}
					{...props}
				>
					<div className="font-medium text-sm leading-none">{title}</div>
					<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
