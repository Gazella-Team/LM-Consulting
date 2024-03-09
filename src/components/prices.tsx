import Link from "next/link";
import { Reveal } from "./Animations/Reveal";


const pricingData = [
    {planName: "Free", planDescription: "For losers", planPrice: "$0", planPriceMethod: "/forever", vfm:false, includes: ["3 tools", "Performance analytics", "4 newsletters"], discludes: ["Custom support", "Free onboarding", "3 tools", "Performance analytics", "4 newsletters"]},
    {planName: "Standard", planDescription: "For startups", planPrice: "$19", planPriceMethod: "/mo", vfm:true, includes: ["3 tools", "Performance analytics", "4 newsletters", "Custom support", "Free onboarding"], discludes: ["3 tools", "Performance analytics", "4 newsletters"]},
    {planName: "Premium", planDescription: "For pre-seed", planPrice: "$39", planPriceMethod: "/mo", vfm:false, includes: ["3 tools", "Performance analytics", "4 newsletters", "Custom support", "Free onboarding", "3 tools", "Performance analytics"], discludes: ["4 newsletters"]},
    {planName: "Enterprise", planDescription: "For unicorns", planPrice: "Custom", planPriceMethod: "", vfm:false, includes: ["3 tools", "Performance analytics", "4 newsletters", "Custom support", "Free onboarding", "3 tools", "Performance analytics", "4 newsletters"], discludes: []},
]

export default function Prices() {
    return (
        <section className="bg-white flex flex-col pb-[100px]">
            <div className="w-[90%] mx-auto max-w-[1200px] text-center">
                <div className="grid grid-cols-4 gap-[24px] mt-[-400px] mb-[50px]">
                    {pricingData.map((v:any, index) => <PriceCard key={index} Obj={v} />)}
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
        <div className="shadow-clean bg-white rounded-[14px] text-left p-[24px] flex flex-col gap-[30px]">
        <Reveal delayTime={0}>
            <div>
                <h2 className="text-[24px] font-[300] text-gray-800">{props.Obj.planName}</h2>
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
            <div className="shadow-clean rounded-[14px] bg-white text-left p-[24px] flex flex-col gap-[30px]">
            <Reveal delayTime={0}>
                <div>
                    <h2 className="text-[24px] font-[300] text-gray-800">{props.Obj.planName}</h2>
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