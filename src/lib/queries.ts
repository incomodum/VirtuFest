import { unstable_cache } from "next/cache"
import { upcomingFairs, vendors } from "./mocks"

export const getFairs = unstable_cache(async () => upcomingFairs, ["fairs"], {
	tags: ["fairs"],
	revalidate: 60
})

export const getFairById = async (id: number | string) => upcomingFairs.find((v) => v.id.toString() === `${id}`)

export const getVendors = unstable_cache(async () => vendors, ["vendors"], {
	tags: ["vendors"],
	revalidate: 60
})

export const getVendorById = async (id: number | string) => vendors.find((v) => v.id.toString() === `${id}`)
