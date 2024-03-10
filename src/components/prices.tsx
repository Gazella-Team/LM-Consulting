import Link from "next/link";
import { Reveal } from "./Animations/Reveal";


const pricingData = [
    {planName: "Free", planDescription: "For losers", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(31 41 55)" className="w-6 h-6">
    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
  </svg>  
  
  , planPrice: "$0", planPriceMethod: "/forever", vfm:false, includes: ["3 tools", "Performance analytics", "4 newsletters"], discludes: ["Custom support", "Free onboarding", "3 tools", "Performance analytics", "4 newsletters"]},
    {planName: "Standard", planDescription: "For startups", planPrice: "$19", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(31 41 55)" className="w-6 h-6">
    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
    <path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" />
  </svg>, planPriceMethod: "/mo", vfm:true, includes: ["3 tools", "Performance analytics", "4 newsletters", "Custom support", "Free onboarding"], discludes: ["3 tools", "Performance analytics", "4 newsletters"]},
    {planName: "Premium", planDescription: "For pre-seed", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(31 41 55)" className="w-6 h-6">
    <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
  </svg>
  , planPrice: "$39", planPriceMethod: "/mo", vfm:false, includes: ["3 tools", "Performance analytics", "4 newsletters", "Custom support", "Free onboarding", "3 tools", "Performance analytics", "4 newsletters"], discludes: []},
]

export default function Prices() {
    return (
        <section className="bg-white flex flex-col pb-[100px]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-center">
                <div className="mt-[-400px] mb-[50px]">
                    <div className="grid grid-cols-3 gap-[24px]">
                        {pricingData.map((v:any, index) => <PriceCard key={index} Obj={v} />)}
                    </div>
                    <div>
                        <Reveal delayTime={0}>
                            <div className="shadow-clean border-[5px] mt-[24px] border-white rounded-[14px] bg-white text-left p-[24px] flex flex-col gap-[30px]">
                                <div className="border-b-[1px] pb-[24px] flex items-center justify-between">
                                    <div>
                                    <div className="flex items-center gap-[6px] mb-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(31 41 55)" className="w-6 h-6">
  <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
</svg>
                                        <h2 className="text-[24px] font-[300] text-gray-800">Enterprise</h2>
                                    </div>
                                        <h3 className="font-[200] text-[14px] text-gray-500 max-w-[300px]">Have custom requirements, or want to bring ToolBird into a larger organization?</h3>
                                    </div>
                                    <div>
                                    <div className="bg-main text-white font-[200] text-center w-full py-[10px] px-[30px] text-[15px] rounded-full">
                                        <Link href={"/pricing"}>
                                            Contact sales
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="py-[0px] flex justify-between gap-[50px]">
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[20px]">
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                        <div className="flex items-center gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                            </svg>
                                            <p className="font-[200] text-[15px]">Custom onboarding</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <p className="font-[200] text-[14px] text-gray-400">All prices are listed without danish VAT. VAT will only be applied for Danish (DK) companies. All plans have a commitment period of minimum 12 months.</p>
            </div>
        </section>
    )
}

const PriceCard = (props:any) => {
    return (
        props.Obj.vfm ?   
        
        <Reveal delayTime={0}>
        <div className="shadow-clean border-[4px] border-yellow-400 bg-white rounded-[14px] text-left p-[24px] flex flex-col gap-[30px]">
        <Reveal delayTime={0}>
            <div>
                <div className="h-[60px]">
                    <p className="rounded-full bg-yellow-400 inline-block px-[10px] py-[6px] text-[12px] font-[400] text-yellow-900">Most popular</p>
                </div>
                <div className="flex items-center gap-[6px]">
                        {props.Obj.icon}
                        <h2 className="text-[24px] font-[300] text-gray-800">{props.Obj.planName}</h2>
                    </div>
                <h3 className="font-[200] text-[14px] text-gray-500">{props.Obj.planDescription}</h3>
            </div>
        </Reveal>
        <Reveal delayTime={0}>
            <div>
                <h1 className="text-[36px] font-[300]">{props.Obj.planPrice}<span className="text-[15px] font-[200] text-gray-600">{props.Obj.planPriceMethod}</span></h1>
            </div>
        </Reveal>
        <Reveal delayTime={0}>
            <div className="bg-main text-white font-[200] text-center w-full py-[10px] text-[15px] rounded-full">
                <Link href={"/pricing"}>
                    Choose {props.Obj.planName}
                </Link>
            </div>
        </Reveal>
        <Reveal delayTime={0}>
            <div className="flex flex-col gap-[10px]">
                {props.Obj.includes.map((v:any, index:any) => 
                <div key={index} className="flex items-center gap-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    <p className="font-[200] text-[15px]">{v}</p>
                </div>)}
                {props.Obj.discludes.map((v:any, index:any) => 
                <div key={index} className="flex items-center gap-[6px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156 163 175)" className="w-5 h-5">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>

                    <p className="font-[200] text-[15px] text-gray-400">{v}</p>
                </div>)}
            </div>
        </Reveal>
    </div>
    </Reveal>:        <Reveal delayTime={0}>
            <div className="shadow-clean mt-[60px] border-[5px] border-white rounded-[14px] bg-white text-left p-[24px] flex flex-col gap-[30px]">
            <Reveal delayTime={0}>
                <div>
                    <div className="flex items-center gap-[6px]">
                        {props.Obj.icon}
                        <h2 className="text-[24px] font-[300] text-gray-800">{props.Obj.planName}</h2>
                    </div>
                    <h3 className="font-[200] text-[14px] text-gray-500">{props.Obj.planDescription}</h3>
                </div>
            </Reveal>
            <Reveal delayTime={0}>
                <div>
                    <h1 className="text-[36px] font-[300] text-gray-800">{props.Obj.planPrice}<span className="text-[15px] font-[200] text-gray-600">{props.Obj.planPriceMethod}</span></h1>
                </div>
            </Reveal>
            <Reveal delayTime={0}>
                <div className="bg-main text-white font-[200] text-center w-full py-[10px] text-[15px] rounded-full">
                    {props.Obj.planName === "Enterprise" ?                     
                    <Link href={"/pricing"}>
                        Contact Sales
                    </Link>:
                    <Link href={"/pricing"}>
                        Choose {props.Obj.planName}
                    </Link>}
                </div>
            </Reveal>
            <Reveal delayTime={0}>
            <div className="flex flex-col gap-[10px]">
                {props.Obj.includes.map((v:any, index:any) => 
                <div key={index} className="flex items-center gap-[6px]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                    </svg>
                    <p className="font-[200] text-[15px] text-gray-800">{v}</p>
                </div>)}
                {props.Obj.discludes.map((v:any, index:any) => 
                <div key={index} className="flex items-center gap-[6px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(156 163 175)" className="w-5 h-5">
                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                </svg>

                    <p className="font-[200] text-[15px] text-gray-400">{v}</p>
                </div>)}
            </div>
        </Reveal>
        </div>
        </Reveal>
    )
}