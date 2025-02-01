import type { FairDetail } from "@/types/fair"
import type { VendorDetail } from "@/types/vendor"

export const vendors: VendorDetail[] = [
	{
		id: 1,
		businessName: "Remeselné Dielne",
		description:
			"Špecializujeme sa na ručne vyrábanú keramiku a hrnčiarstvo, vytvárame jedinečné kúsky, ktoré prinášajú krásu do každodenného života. Každý výrobok je starostlivo vytvorený tradičnými technikami, ktoré sa odovzdávajú z pokolenia na pokolenie.",
		type: "Umenie a remeslá",
		ownerName: "Sarah Johnson",
		email: "sarah@remeselnedielne.sk",
		phone: "(555) 123-4567",
		website: "https://remeselnedielne.sk",
		socialMedia: {
			facebook: "remeselnedielne",
			instagram: "remeselnedielne",
			twitter: "remeselnedielne"
		},
		images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
		rating: 4.8,
		reviewCount: 124,
		memberSince: "2020-01-15",
		verified: true,
		boothNumber: "A1",
		reviews: [
			{
				id: 1,
				rating: 5,
				comment: "Úžasné remeselné spracovanie! Keramika je naozaj ohromujúca.",
				author: "Emily White",
				date: "2024-01-15"
			},
			{
				id: 2,
				rating: 4,
				comment: "Skvelá kvalita a priateľský servis.",
				author: "Michael Brown",
				date: "2024-01-10",
				response: "Ďakujeme za vaše milé slová! Tešíme sa, že sa vám naše výrobky páčili."
			}
		],
		events: [
			{
				id: 1,
				fairId: 1,
				fairName: "Jarný jarmok remesiel",
				date: "2024-04-15",
				location: "Centrum, Revúca",
				boothNumber: "A1",
				status: "upcoming"
			},
			{
				id: 2,
				fairId: 2,
				fairName: "Letný festival trhov",
				date: "2024-06-20",
				location: "Riverside Park, Revúca",
				boothNumber: "B3",
				status: "upcoming"
			},
			{
				id: 3,
				fairId: 3,
				fairName: "Zimný jarmok",
				date: "2023-12-10",
				location: "Hlavné námestie, Revúca",
				boothNumber: "C2",
				status: "completed"
			}
		]
	},
	{
		id: 2,
		businessName: "Sladké Pochúťky",
		type: "Občerstvenie",
		description: "Čerstvo pečené dobroty a pečivo",
		email: "pochutky@example.com",
		boothNumber: "B2",
		ownerName: "Jozko Mrkvicka",
		phone: "+421912345678",
		socialMedia: {},
		images: [],
		events: [],
		rating: 4.8,
		reviewCount: 148,
		reviews: [],
		memberSince: "",
		verified: true
	},
	{
		id: 3,
		businessName: "Drevené Čary",
		description:
			"Vyrábame ručne vyrezávané drevené predmety, od dekorácií po praktické domáce potreby. Každý kus je unikátny a nesie v sebe kúsok prírody. Naše výrobky sú vyrábané s láskou k drevu a tradíciám.",
		type: "Umenie a remeslá",
		ownerName: "Peter Kováč",
		email: "peter@drevenecary.sk",
		phone: "(555) 234-5678",
		website: "https://drevenecary.sk",
		socialMedia: {
			facebook: "drevenecary",
			instagram: "drevenecary",
			twitter: "drevenecary"
		},
		images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
		rating: 4.9,
		reviewCount: 98,
		memberSince: "2019-03-22",
		verified: true,
		boothNumber: "B3",
		reviews: [
			{
				id: 1,
				rating: 5,
				comment: "Krásne drevené výrobky, ktoré oživia každý domov.",
				author: "Anna Nováková",
				date: "2024-02-01"
			},
			{
				id: 2,
				rating: 4,
				comment: "Skvelá práca s drevom, veľmi originálne nápady.",
				author: "Ján Horváth",
				date: "2024-01-25",
				response: "Ďakujeme za podporu! Tešíme sa, že sa vám naše výrobky páčia."
			}
		],
		events: [
			{
				id: 1,
				fairId: 1,
				fairName: "Jarný jarmok remesiel",
				date: "2024-04-15",
				location: "Centrum, Revúca",
				boothNumber: "B2",
				status: "upcoming"
			},
			{
				id: 2,
				fairId: 2,
				fairName: "Letný festival trhov",
				date: "2024-06-20",
				location: "Riverside Park, Revúca",
				boothNumber: "A4",
				status: "upcoming"
			}
		]
	},
	{
		id: 4,
		businessName: "Plátno a Nit",
		description:
			"Šijeme ručne vyrobené textilné výrobky, ako sú vrecká, obaly na knihy, dekorácie a oblečenie. Každý kus je vytvorený s dôrazom na kvalitu a jedinečný dizajn. Naše výrobky sú ideálne pre tých, ktorí hľadajú niečo špeciálne.",
		type: "Umenie a remeslá",
		ownerName: "Eva Horváthová",
		email: "eva@platnonit.sk",
		phone: "(555) 345-6789",
		website: "https://platnonit.sk",
		socialMedia: {
			facebook: "platnonit",
			instagram: "platnonit",
			twitter: "platnonit"
		},
		images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
		rating: 4.7,
		reviewCount: 112,
		memberSince: "2021-07-10",
		verified: true,
		boothNumber: "C3",
		reviews: [
			{
				id: 1,
				rating: 5,
				comment: "Krásne a kvalitné textilné výrobky, veľmi odporúčam!",
				author: "Zuzana Kováčová",
				date: "2024-01-20"
			},
			{
				id: 2,
				rating: 4,
				comment: "Milé a originálne vrecká, ideálne na darčeky.",
				author: "Martin Král",
				date: "2024-01-12",
				response: "Ďakujeme za vašu spätnú väzbu! Tešíme sa, že sa vám naše výrobky páčia."
			}
		],
		events: [
			{
				id: 1,
				fairId: 1,
				fairName: "Jarný jarmok remesiel",
				date: "2024-04-15",
				location: "Centrum, Revúca",
				boothNumber: "C3",
				status: "upcoming"
			},
			{
				id: 2,
				fairId: 3,
				fairName: "Zimný jarmok",
				date: "2023-12-10",
				location: "Hlavné námestie, Revúca",
				boothNumber: "D1",
				status: "completed"
			}
		]
	}
]

export const upcomingFairs: FairDetail[] = [
	{
		id: 1,
		name: "Jarný jarmok remesiel",
		date: "2024-04-15",
		location: "Centrum, Revúca",
		image: "/remeslo.jpg",
		description: "Ročný jarmok remesiel s miestnymi umelcami a remeselníkmi",
		vendorSpaces: 50,
		expectedAttendance: 5000,
		featured: true,
		city: "Revúca",
		vendors,
		endDate: "",
		hours: "",
		parkingInfo: "",
		vendorCount: 70
	},
	{
		id: 2,
		name: "Letný festival jedla",
		date: "2024-06-20",
		location: "Riverside Park, Revúca",
		image: "/jedlo.jpg",
		description: "Oslava miestnej kuchyne a stánkov s jedlom",
		vendorSpaces: 75,
		expectedAttendance: 8000,
		featured: true,
		city: "Revúca",
		vendors,
		endDate: "",
		hours: "",
		parkingInfo: "",
		vendorCount: 70
	},
	{
		id: 3,
		name: "Jesenný trh",
		date: "2024-09-10",
		location: "Hlavné námestie, Revúca",
		image: "/trh.webp",
		description: "Sezónne produkty a remeselné výrobky",
		vendorSpaces: 60,
		expectedAttendance: 6000,
		featured: true,
		city: "Revúca",
		vendors,
		endDate: "",
		hours: "",
		parkingInfo: "",
		vendorCount: 70
	}
] satisfies FairDetail[]
