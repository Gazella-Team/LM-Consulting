import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const pricingData = [
    {
        planName: "Premium",
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
    {
        planName: "Premium",
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
        ],
        mostPopular: true,
    },
    {
        planName: "Premium",
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
                {props.Obj.mostPopular && <p className="bg-slate-50 px-2 py-1 rounded-md border border-gray-600/10 text-main">most popular</p>}
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
                    <h2 className="mb-4 font-[500] uppercase">Tools</h2>//
                    <div className="flex flex-col gap-4">
                        {props.Obj.tools.map((v:any) => <div className="flex items-center justify-between text-gray-600 border-b border-gray-600/10 pb-4">{v[0]}{v[1] ? <CheckBadgeIcon width={20} />:<XCircleIcon width={20} />}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}