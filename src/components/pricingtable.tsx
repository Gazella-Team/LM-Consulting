export default function PricingTable() {
	return (
		<section className="py-24">
			<div className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl gap-5">
				<div className="bg-white rounded-2xl border border-gray-600/10 shadow-sm p-10">
					<div className="flex items-center gap-3">
						<div className="bg-gray-800 rounded-full h-4 w-4"></div>
						<h3 className="font-semibold text-2xl text-gray-800">Free</h3>
					</div>
				</div>
				<div className="bg-white rounded-2xl border-2 border-main shadow-main/10 shadow-xl p-10">
					<div className="flex flex-col gap-2 mb-10">
						<div className="flex items-center gap-3">
							<div className="bg-main rounded-full h-4 w-4"></div>
							<h3 className="font-semibold text-2xl text-gray-800">Professional</h3>
						</div>
						<p className="text-gray-600">For hobby & side projects</p>
					</div>
					<div>
						<h1 className="text-5xl font-bold">$29<span className="text-lg font-medium text-gray-600">/ month</span></h1>
					</div>
				</div>
				<div className="bg-white rounded-2xl border border-gray-600/10 shadow-sm p-10">
					<div className="flex items-center gap-3">
						<div className="bg-gray-800 rounded-full h-4 w-4"></div>
						<h3 className="font-semibold text-2xl text-gray-800">Exclusive</h3>
					</div>
				</div>
			</div>
		</section>
	)
}