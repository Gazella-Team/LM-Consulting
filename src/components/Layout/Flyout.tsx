import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '/analytics', icon: ChartPieIcon },
  { name: 'Uptime Monitoring', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'User feedback', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
  { name: 'Waitlists', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Flyout() {
  return (
    <Popover className="relative active:border-none">
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm active:border-none font-medium leading-6 text-gray-900">
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
          <div className="w-screen max-w-2xl flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-clean ring-1 ring-gray-600/10">
            <div className="p-4 grid grid-cols-2">
              {solutions.map((item) => (
                <Link href={item.href} key={item.name} className="group relative rounded-xl p-4 hover:bg-slate-50">
                  <div>
                    <div className="font-semibold flex items-center gap-2 text-gray-800">
                    <item.icon className="h-5 w-5 text-gray-800 group-hover:text-main" aria-hidden="true" />
                      {item.name}
                    </div>
                    <p className="mt-1 text-gray-600 paragraph font-normal">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-600/10 bg-slate-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-600 hover:bg-slate-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-600" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
