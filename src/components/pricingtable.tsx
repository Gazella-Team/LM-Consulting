import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/20/solid"
import { FireIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { GiFlame } from "react-icons/gi"

const pricingData = [
    {
        planName: "Premium",
        planPrice: "$0",
        paymentRuntime: "free",
        planTarget: "Perfect for pre-seed",
        cta: "Upgrade",
        tools: [
            ["Waitlists", true],
            ["Cron Jobs", true],
            ["Monitoring", true],
            ["Web Analytics", true],
            ["Webhook Handling", true],
            ["Contact Forms", true],
        ],
        usage: [
            ["Permitted Waitlists", "Infinite"],
            ["Workspace Domains", "10"],
            ["Web Key Figures", "Infinite"],
            ["Permitted Contact Forms", "20"],
        ]
    },
    {
        planName: "Premium",
        planPrice: "$12",
        paymentRuntime: "per month",
        planTarget: "Perfect for pre-seed",
        cta: "Upgrade",
        tools: [
            ["Waitlists", true],
            ["Cron Jobs", true],
            ["Monitoring", true],
            ["Web Analytics", true],
            ["Webhook Handling", true],
            ["Contact Forms", true],
        ],
        usage: [
            ["Permitted Waitlists", "Infinite"],
            ["Workspace Domains", "10"],
            ["Web Key Figures", "Infinite"],
            ["Permitted Contact Forms", "20"],
        ],
        mostPopular: true,
    },
    {
        planName: "Premium",
        planPrice: "$39",
        paymentRuntime: "per month",
        planTarget: "Perfect for pre-seed",
        cta: "Upgrade",
        tools: [
            ["Waitlists", true],
            ["Cron Jobs", true],
            ["Monitoring", true],
            ["Web Analytics", true],
            ["Webhook Handling", true],
            ["Contact Forms", true],
        ],
        usage: [
            ["Permitted Waitlists", "Infinite"],
            ["Workspace Domains", "10"],
            ["Web Key Figures", "Infinite"],
            ["Permitted Contact Forms", "20"],
        ]
    },
    {
        planName: "Enterprise",
        planPrice: "$49",
        paymentRuntime: "per month",
        planTarget: "Perfect for pre-seed",
        cta: "Upgrade",
        tools: [
            ["Waitlists", true],
            ["Cron Jobs", true],
            ["Monitoring", true],
            ["Web Analytics", true],
            ["Webhook Handling", true],
            ["Contact Forms", true],
        ],
        usage: [
            ["Permitted Waitlists", "Infinite"],
            ["Workspace Domains", "10"],
            ["Web Key Figures", "Infinite"],
            ["Permitted Contact Forms", "20"],
        ]
    },
]

export default function PricingTable() {
    return (
        <section className="pb-[100px]">
            <div className="w-[96%] mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {pricingData.map((v, index) => <PricingCard key={index} Obj={v} />)}
            </div>
        </section>
    )
}

const PricingCard = (props:any) => {
    return (
        <div className="border border-gray-600/10 rounded-xl text-gray-800">
            <div className="border-b border-gray-600/10 p-6 py-4 flex items-center gap-2 text-sm">
                <p className="text-xl">{props.Obj.planName}</p>
                {props.Obj.mostPopular && <p className="bg-slate-50 px-2 py-1 rounded-md border border-gray-600/10 text-main font-[400] flex items-center gap-1"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /> <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /> </svg></span>Most Popular</p>}
            </div>
            <div className="p-6 flex flex-col gap-4">
                <div className="mb-2">
                    <h1 className="text-5xl">{props.Obj.planPrice}<span className="text-base text-gray-600 font-[200]">/ {props.Obj.paymentRuntime}</span></h1>
                </div>
                <p className="font-[200] text-gray-600">{props.Obj.planTarget}</p>
                {props.Obj.mostPopular ?
                <Link className="bg-main border-[2px] border-main text-white flex items-center justify-center rounded-xl text-sm py-3" href={"/upgrade"}>
                    {props.Obj.cta}
                </Link>:
                <Link className="bg-white border-[2px] border-main text-main flex items-center justify-center rounded-xl text-sm py-3" href={"/upgrade"}>
                    {props.Obj.cta}
                </Link>}
            </div>
            <div className="border-t border-gray-600/10">
                <div className="p-6">
                    <div className="flex flex-col gap-4">
                        {props.Obj.tools.map((v:any, index:number) => <div key={v} className={index + 1 === props.Obj.tools.length ? "flex items-center justify-between text-gray-600":"flex items-center justify-between text-gray-600 border-b border-gray-600/10 pb-4"}>{v[0]}{v[1] ? <CheckBadgeIcon width={20} />:<XCircleIcon width={20} />}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}