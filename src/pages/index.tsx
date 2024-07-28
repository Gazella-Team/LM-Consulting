import About from "@/components/about";
import { Reveal } from "@/components/Animations/Reveal";
import { RevealLight } from "@/components/Animations/RevealLight";
import Hero from "@/components/hero";
import Layout from "@/components/Layout";
import Cta from "@/components/Layout/Cta";
import Team from "@/components/team";
import VSL from "@/components/vsl";
import Link from "next/link";
import { Element } from "react-scroll";
import { cn } from "utils/cs";

export default function Home() {
    return (
		<Layout>
			<Hero />
			<section className="py-20 relative lg:h-[100vh] flex flex-col justify-center bg-[url(/bgs/abstract01.webp)] bg-center bg-cover border-t border-white">
				<div className="w-[90%] items-center z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 text-white max-w-7xl">
					<div className="flex flex-col gap-8">
						<Reveal delayTime={0.3}>
							<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light">Unlock Direct Access to over $1 Trillion in Investor Funds</h1>
						</Reveal>
						<RevealLight delayTime={0.5}>
							<p className="text-lg sm:text-xl lg:text-2xl max-w-lg font-light text-gray-200">LM Capital specializes in digital-first advisory services, focusing on cross-sector capital raising and private placements globally</p>
						</RevealLight>
						<div className="flex">
							<RevealLight delayTime={0.7}>
								<Link
									className={cn("hidden border mt-5 text-white hover:bg-white hover:text-black transition-all px-5 py-2 rounded-md border-gray-500 font-normal text-base lg:flex")}
									href="/"
								>
									Contact
								</Link>
							</RevealLight>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 " style={{background: "linear-gradient(90deg, rgba(9,25,48,1) 0%, rgba(29,58,93,0.5) 100%)"}}></div>
			</section>
			<section className="py-20 relative lg:h-[100vh] flex flex-col justify-center bg-[url(/bgs/abstract01.webp)] bg-center border-t border-white">
				<div className="w-[90%] items-center z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 text-white max-w-7xl">
					<div className="flex flex-col gap-8">
						<Reveal delayTime={0.3}>
							<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light">Unlock Direct Access to over $1 Trillion in Investor Funds</h1>
						</Reveal>
						<RevealLight delayTime={0.5}>
							<p className="text-lg sm:text-xl lg:text-2xl max-w-lg font-light text-gray-200">LM Capital specializes in digital-first advisory services, focusing on cross-sector capital raising and private placements globally</p>
						</RevealLight>
						<div className="flex">
							<RevealLight delayTime={0.7}>
								<Link
									className={cn("hidden border mt-5 text-white hover:bg-white hover:text-black transition-all px-5 py-2 rounded-md border-gray-500 font-normal text-base lg:flex")}
									href="/"
								>
									Contact
								</Link>
							</RevealLight>
						</div>
					</div>
				</div>
				<div className="absolute inset-0 " style={{background: "linear-gradient(90deg, rgba(9,25,48,1) 0%, rgba(29,58,93,0.5) 100%)"}}></div>
			</section>
			<Element name="about">
				<About />
			</Element>
			<Element name="team">
				<Team />
			</Element>
			<div className="w-[90%] py-24 mx-auto max-w-3xl">
				<VSL />
			</div>
			<Element name="contact">
				<Cta />
			</Element>
		</Layout>
    )
}