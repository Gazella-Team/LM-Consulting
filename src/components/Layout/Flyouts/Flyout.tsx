import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { PieChart } from 'lucide-react'

const solutions = [
	{
		name: 'Web Analytics',
		description: 'Privacy-first web analytics of your visitors',
		href: '/analytics',
		icon: <PieChart className='text-gray-800 h-[18px] w-[18px]' />,
	},
	//{ name: 'Uptime Monitoring', description: 'Monitor all your systems, servers and environments', href: '/coming-soon', icon: ArrowPathRoundedSquareIcon },
	//{ name: 'User feedback', description: "Collect all your user-feedback in one place, to better your platform", href: '/coming-soon', icon: ChatBubbleLeftRightIcon },
]

export default function Flyout() {
	return (
		<Popover className="relative active:border-none focus:border-none">
			<Popover.Button className="inline-flex items-center gap-x-1 text-sm active:border-none font-medium leading-6 text-gray-800">
				<span>Products</span>
				<ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
					<div className="w-screen max-w-sm flex overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-clean ring-1 ring-gray-600/10">
						<div className="p-4 grid grid-cols-1 w-full">
							{solutions.map((item) => (
								<Link
									href={item.href}
									key={item.name}
									className="group relative rounded-xl w-full p-4 hover:bg-slate-50"
								>
									<div>
										<div className="font-semibold font-[Sora] flex items-center gap-2 text-gray-800">
											{item.icon}
											{item.name}
										</div>
										<p className="mt-1 text-gray-600 paragraph font-normal">
											{item.description}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}
