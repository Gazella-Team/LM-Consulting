import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { RevealLight } from './Animations/RevealLight'
import CustomerSlider from './customer-slider'

export default function Hero02() {
	return (
        <Reveal delayTime={0.1}>
            <div>
                <section className="py-24 pt-[60px] min-h-[600px] relative bg-[url(/bgs/hero.svg)] bg-center bg-cover">
                    {/* Transparent white linear gradient overlay */}
                    <div style={{background: "linear-gradient(0deg, rgba(255,255,255,1) 16%, rgba(255,255,255,0.29037552521008403) 47%)"}} className="absolute inset-0"></div>
                    
                    <div className="flex items-center">
                        <div
                            className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1"
                            style={{
                                background:
                                    'radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 60%)',
                            }}
                        ></div>
                    </div>
                    <div className="w-[86%] mx-auto max-w-6xl relative flex flex-col gap-5 z-10">
                        <Reveal delayTime={0}>
                            <p className="font-[Caveat] text-main mb-4 text-2xl md:text-3xl">
                                Proudly built and launched in Europe
                            </p>
                        </Reveal>
                        <Reveal delayTime={0.1}>
                            <h1 className="text-4xl md:text-5xl xl:text-5xl max-w-[600px] font-bold text-gray-800 xl:leading-[68px]">
                                Get <span className='bg-main/10 text-gray-800 p-2 py-1 rounded-xl'>Web Analytics</span>,{' '}
                                <span className='bg-main/10 text-gray-800 p-2 py-1 rounded-xl'>Uptime Monitoring</span> and{' '}
                                <span className='bg-main/10 text-gray-800 p-2 py-1 rounded-xl'>User Feedback</span>, all collected in 1 place.
                            </h1>
                        </Reveal>
                        <Reveal delayTime={0.2}>
                            <p className="text-base md:text-lg xl:text-xl font-regular paragraph mb-2 max-w-[500px] w-[85%] text-gray-600">
                                Manage web analytics, cron jobs, monitoring, feature
                                flags, waitlists, client feedback and more
                            </p>
                        </Reveal>
                        <RevealLight delayTime={0.4}>
                            <div className="flex items-center paragraph relative gap-3 mt-4 font-medium">
                                <button
                                    className="bg-main border-[3px] border-main font-normal text-sm text-white px-4 py-1 rounded-full"
                                >
                                    Get started
                                </button>
                                <button
                                    className="bg-transparent border-[3px] border-gray-800 font-normal text-sm text-gray-800  px-4 py-1 rounded-full"
                                >
                                    Get started
                                </button>
                            </div>
                        </RevealLight>
                    </div>
                </section>
                <CustomerSlider />
                <div style={{background: "linear-gradient(180deg, rgba(255,255,255,1) 11%, rgba(255,255,255,0) 100%)"}} className='min-h-[100px]'>
                </div>
            </div>
        </Reveal>
	)
}
