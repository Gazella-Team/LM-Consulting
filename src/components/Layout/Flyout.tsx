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
      <Popover.Button className="inline-flex items-center gap-x-1">
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
        <Popover.Panel className="absolute left-2/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-[50%] mx-auto flex-auto overflow-hidden p-10 rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className='flex items-center gap-[10px] mb-[30px]'>
              <h1 className='text-gray-800 text-lg font-bold'>{props.heading}</h1>
            </div>

            <div className="grid grid-cols-2 gap-x-[30px] gap-y-[30px]">
              {solutions.map((item:any) => (
                <div key={item.name} className="group relative flex items-center gap-x-6 py-0 px-4 border-l-[3px] border-main hover:bg-gray-50 transition-all">
                  <div>
                    <a href={item.href} className="font-bold text-gray-800">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="text-gray-600 font-regular">{item.description}</p>
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
