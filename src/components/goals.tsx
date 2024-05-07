import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Reveal } from './Animations/Reveal'

const stats = {
	userCount: '10',
	mrr: '$100',
	employeeCount: '2',
	newVisitorCount: '430',
}

export default function Goals() {
	const months: string[] = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	const month = new Date().getUTCMonth()
	return (
		<section className="py-[100px] pt-0 text-gray-800">
			<Reveal delayTime={0.4}>
				<div className="w-[96%] mx-auto max-w-[1200px] text-center pb-16">
					<h1 className="text-5xl tracking-tighter font-[500]">
						Goals for{' '}
						<span className="text-main">{months[month + 1]}</span>
					</h1>
				</div>
				<div className="w-[96%] mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<div className="p-10 border border-gray-600/10 rounded-xl">
						<h1 className="text-gray-600 mb-3 font-[200]">
							Total users
						</h1>
						<p className="text-5xl">{stats.userCount}</p>
					</div>
					<div className="p-10 border border-gray-600/10 rounded-xl">
						<h1 className="text-gray-600 mb-3 font-[200]">
							Monthly recurring revenue
						</h1>
						<p className="text-5xl">{stats.mrr}</p>
					</div>
					<div className="p-10 border border-gray-600/10 rounded-xl">
						<h1 className="text-gray-600 mb-3 font-[200]">
							Team members
						</h1>
						<p className="text-5xl">{stats.employeeCount}</p>
					</div>
					<div className="p-10 border border-gray-600/10 rounded-xl">
						<h1 className="text-gray-600 mb-3 font-[200]">
							New visitors
						</h1>
						<p className="text-5xl">{stats.newVisitorCount}</p>
					</div>
				</div>
			</Reveal>
		</section>
	)
}
