import Link from "next/link";
import Flyout from "./Flyout";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'

export default function Navbar(props:any) {
    return (
        props.white ?         <div>
        <nav className="h-[80px] bg-white text-main absolute w-full flex items-center border-b-[1px]">
        <div className="w-[94%] max-w-[1470px] mx-auto text-gray-800 flex items-center justify-start">
            <div className="w-[25%]">
                <Link href={"/"} className="font-[400] text-[22px] flex flex-col leading-0">toolbird<span className="text-[8px] font-[200] leading-0 mt-[-6px]">by Gazella Team</span></Link>
            </div>
            <div className="flex-1 flex items-center text-[15px] justify-center gap-[30px] font-[200]">
            <Flyout headingIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(31 41 55)" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>
} heading="All tools you need" triggerName="Platform" links={[
        { name: 'Waitlists', description: 'Get a better understanding', href: '/waitlists', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Security', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
      ]} />
                    <Flyout heading="Getting you started" triggerName="Resources" links={[
        { name: 'Templates', description: 'Get a better understanding', href: '#', icon: ChartPieIcon },
        { name: 'Usecases', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Guides', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
        { name: 'Guides', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
      ]} />
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/guides"}>Guides</Link>
            </div>
            <div className="w-[25%] flex items-center gap-[16px] justify-end">
                <Link target="_blank" className="text-gray-800 font-[300] px-[6px] py-[10px] text-[15px] rounded-full" href={"/login"}>Log In</Link>
                <Link className="bg-main text-white text-center px-[24px] py-[10px] text-[15px] rounded-full font-[300]" href={"/"}>Join Waitlist</Link>
            </div>
            
        </div>
    </nav>
    </div>:        <div>
            <nav className="h-[80px] bg-transparent absolute w-full flex items-center">
            <div className="w-[94%] max-w-[1470px] mx-auto text-white flex items-center justify-start">
                <div className="w-[25%]">
                    <Link href={"/"} className="font-[400] text-[22px] flex flex-col leading-0">toolbird<span className="text-[8px] font-[200] leading-0 mt-[-6px]">by Gazella Team</span></Link>
                </div>
                <div className="flex-1 flex items-center text-[15px] justify-center gap-[30px] font-[200]">
                    <Flyout headingIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(31 41 55)" className="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>} heading="All tools you need" triggerName="Platform" links={[
        { name: 'Waitlists', description: 'Get a better understanding', href: '/waitlists', icon: ChartPieIcon },
        { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Security', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
        { name: 'Security', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
        { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
      ]} />
                    <Flyout heading="Getting you started" triggerName="Resources" links={[
        { name: 'Templates', description: 'Get a better understanding', href: '#', icon: ChartPieIcon },
        { name: 'Usecases', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
        { name: 'Guides', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
        { name: 'Guides', description: "Your customers' data will be safe", href: '#', icon: FingerPrintIcon },
      ]} />
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/guides"}>Guides</Link>
                </div>
                <div className="w-[25%] flex items-center gap-[16px] justify-end">
                    <Link target="_blank" className="text-white font-[300] px-[6px] py-[10px] text-[15px] rounded-full" href={"/login"}>Log In</Link>
                    <Link className="bg-white text-main text-center px-[24px] py-[10px] text-[15px] rounded-full font-[300]" href={"/"}>Join Waitlist</Link>
                </div>
                
            </div>
        </nav>
        </div>
    )
}