import { CheckCheckIcon, CheckCircle2, CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "utils/cs";

export default function FeatureBox() {
    return (
		<section
			style={{
				background:
					'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
			}}
			className='mt-14 py-24 max-w-7xl mx-auto lg:rounded-[100px] backdrop:blur-3xl border-y border-gray-600/10'
		>
			<div className="w-[86%] flex flex-col gap-24 mx-auto max-w-6xl">
                <div className="lg:grid grid-cols-[50%_1fr] lg:gap-20 flex gap-4 flex-col">
                    <div className="flex flex-col gap-6">
                        <p className="paragraph uppercase text-main text-base font-semibold">Privacy-first web analytics</p>
                        <h2 className="text-3xl font-semibold text-gray-800">Analyze all the traffic going through your website with one intuitive dashboard</h2>
                    </div>
                    <div className="flex flex-col justify-center gap-6 paragraph">
                        <p className="text-gray-600 max-w-sm lg:max-w-lg">Track what pages your visitors use, where they&apos;re located, what device they&apos;re using and from where they are referred</p>
                        <div className="flex">
							<Link
								href={'https://app.toolbird.io/auth/register'}
								className="bg-main border-[3px] border-main font-medium paragraph text-xs flex text-white px-6 py-1 rounded-full"
							>
								View features
							</Link>
						</div>
                    </div>
                </div>
                <img className="border rounded-2xl border-gray-600/10" src="/showcases/platform.webp"></img>
                <div className="grid grid-cols-1 lg:grid-cols-2 paragraph gap-x-32 gap-y-16 w-[90%] mx-auto">
                    <div className="flex gap-4">
                        <div className="w-10">
                            <CheckCircle2 fill="rgb(40 40 51)" className="text-white" size={30} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-xl text-gray-800">Privacy friendly (GDPR)</h2>
                            <p className="text-gray-600">Your data is stored securely in Europe. We never share your data or sell it to a third-party.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10">
                            <CheckCircle2 fill="rgb(40 40 51)" className="text-white" size={30} />
                        </div>                      
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-xl text-gray-800">Realtime data</h2>
                            <p className="text-gray-600">See your dashboard update live. Watch your visitors come and go.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10">
                            <CheckCircle2 fill="rgb(40 40 51)" className="text-white" size={30} />
                        </div>                  
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-xl text-gray-800">Geographic data</h2>
                            <p className="text-gray-600">Track exactly what country, city and region your visitors visit you from.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-10">
                            <CheckCircle2 fill="rgb(40 40 51)" className="text-white" size={30} />
                        </div>               
                        <div className="flex flex-col gap-2">
                            <h2 className="font-semibold text-xl text-gray-800">Referer data</h2>
                            <p className="text-gray-600">Track exactly where your visitors are referred to your website from.</p>
                        </div>
                    </div>
                </div>
			</div>
		</section>
    )
}