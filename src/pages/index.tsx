import Link from "next/link";

export default function Home() {
	return (
		<section className="h-screen flex items-center">
			<div className="w-[90%] mx-auto max-w-5xl flex flex-col gap-16">
				<div className="flex flex-col gap-5">
					<h2 className="font-semibold text-5xl">Hello, Niclas and Liban 👋</h2>
					<p className="text-xl text-gray-600">I have created 4 web-design drafts that you will find links for just below.</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					<Link href={"/01"} className="rounded-2xl border border-gray-600/10 flex flex-col gap-3 items-center justify-center p-10 shadow-md hover:bg-gray-50 transition-all">
						<h2 className="text-2xl font-semibold">01</h2>
						<p className="text-gray-600">Modern classy</p>
					</Link>
					<Link href={"/02"} className="rounded-2xl border border-gray-600/10 flex flex-col gap-3 items-center justify-center p-10 shadow-md hover:bg-gray-50 transition-all">
						<h2 className="text-2xl font-semibold">02</h2>
						<p className="text-gray-600">Dark futuristic</p>
					</Link>
					<Link href={"/03"} className="rounded-2xl border border-gray-600/10 flex flex-col gap-3 items-center justify-center p-10 shadow-md hover:bg-gray-50 transition-all">
						<h2 className="text-2xl font-semibold">03</h2>
						<p className="text-gray-600">Forest green</p>
					</Link>
					<div className="rounded-2xl opacity-40 border border-gray-600/10 flex flex-col gap-3 items-center justify-center p-10 shadow-md transition-all">
						<h2 className="text-2xl font-semibold">04</h2>
						<p className="text-gray-600">Not finished</p>
					</div>
				</div>
			</div>
		</section>
	)
}
