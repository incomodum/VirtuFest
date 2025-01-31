"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@//lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@//components/ui/navigation-menu"
import { Button } from "@//components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@//components/ui/sheet"
import { Menu, Tent } from "lucide-react"

const fairs = [
	{
		title: "Upcoming Fairs",
		href: "/fairs",
		description: "Browse and discover upcoming fairs in your area."
	},
	{
		title: "Past Events",
		href: "/fairs/past",
		description: "View photos and highlights from our previous fairs."
	},
	{
		title: "Fair Calendar",
		href: "/fairs/calendar",
		description: "See the complete schedule of upcoming events."
	}
]

const vendors = [
	{
		title: "Become a Vendor",
		href: "/vendors/apply",
		description: "Apply to showcase your products at our fairs."
	},
	{
		title: "Vendor Guidelines",
		href: "/vendors/guidelines",
		description: "Learn about our vendor policies and requirements."
	},
	{
		title: "Vendor Directory",
		href: "/vendors/directory",
		description: "Explore our community of registered vendors."
	}
]

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 flex w-full justify-center border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center">
				<MainNav />
				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Fairs</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<a
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
												href="/fairs"
											>
												<Tent className="h-6 w-6" />
												<div className="mt-4 mb-2 font-medium text-lg">Fairs</div>
												<p className="text-muted-foreground text-sm leading-tight">
													Discover local events and join our vibrant community celebrations.
												</p>
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
							<NavigationMenuTrigger>Vendors</NavigationMenuTrigger>
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
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/contact" legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<Button asChild variant="default" className="hidden md:inline-flex">
							<Link href="/vendors/apply">Become a Vendor</Link>
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
			<Link href="/" className="mr-6 flex items-center space-x-2">
				<Tent className="h-6 w-6" />
				<span className="font-bold sm:inline-block">VirtuFest</span>
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
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
