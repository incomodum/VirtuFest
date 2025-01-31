import VendorReservationForm from "@/app/_components/vendor-reservation-form"
import { upcomingFairs } from "@/lib/mocks"

export default function VendorApply() {
	return (
		<div className="flex size-full min-h-screen items-center justify-center">
			<div className="w-[80%] px-4 py-6 md:w-[1000px] md:py-10">
				<VendorReservationForm fairs={upcomingFairs} />
			</div>
		</div>
	)
}
