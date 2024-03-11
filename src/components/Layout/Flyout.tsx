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

export default function Flyout(props:any) {
    const solutions = props.links
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 text-[15px] font-[200] leading-6">
        <span>{props.triggerName}</span>
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
          <div className="w-screen max-w-[50%] mx-auto flex-auto overflow-hidden p-10 rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <h1 className='text-gray-800 text-[24px] font-[300] mb-[30px]'>{props.heading}</h1>

            <div className="grid grid-cols-2 gap-x-[30px]">
              {solutions.map((item:any) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg py-4 hover:shadow-clean transition-all">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[14px] bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-main" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-[400] text-gray-800">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
