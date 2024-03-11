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
            <Flyout heading="All tools you need" triggerName="Platform" links={[
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
                    <Link href={"/customers"}>Customers</Link>
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
                    <Flyout heading="All tools you need" triggerName="Platform" links={[
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
                    <Link href={"/customers"}>Customers</Link>
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