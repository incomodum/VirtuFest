import VendorReservationForm from "@/app/_components/vendor-reservation-form"
import { upcomingFairs } from "@/lib/mocks"

export default function VendorApply() {
	return (
		<div className="flex h-auto w-full flex-grow items-center justify-center">
			<div className="flex w-full flex-col gap-4 px-4 py-6 md:w-[1000px] md:py-10">
				<h1 className="text-center font-bold">Registrácia stánkara</h1>
				<VendorReservationForm fairs={upcomingFairs} />
			</div>
		</div>
	)
}
