import Layout from "@/components/Layout";
import BlurSection from "@/components/blur-section";
import Link from "next/link";
import { cn } from "utils/cs";

export default function GlossarySite() {
    return (
        <Layout>
        <section
			style={{
				background:
					'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
			}}
			className={cn(
				'mb-24 max-w-7xl mx-auto lg:rounded-[100px] backdrop:blur-3xl border-y border-gray-600/10'
			)}
		>
			<div className="w-[86%] mx-auto max-w-6xl">
				<div className="text-gray-800 py-24 z-1">
					<div className="flex flex-col gap-6">
                        <p className="text-gray-500 paragraph"><span><Link className="text-gray-600" href={"/glossary"}>Glossary</Link></span> / Bounce Rate</p>
						<h2 className="text-5xl font-semibold">Bounce Rate</h2>
					</div>
                    <div className="w-[100px] my-6 mb-14 h-1 bg-main"></div>
                    <div>
                        <p className="text-gray-600 paragraph">
                        Accelerated Mobile Pages (AMP) is an open source framework originally developed by Google for creating fast-loading web pages that optimize the user experience on mobile devices. AMP achieves its speed by simplifying HTML code and using the extensive caching provided by Google&apos;s servers to deliver content quickly.
<br></br><br></br>
For example, a news site can use AMP for its articles so that they load almost instantly on mobile devices. This is especially useful for users in areas with slower internet connections. AMP pages are stripped-down versions of regular web pages, but include essential content such as text, images, and video, while omitting elements that could slow load times, such as certain scripts and third-party JavaScript.
<br></br><br></br>
Adopting AMP can significantly improve mobile browsing speeds, reduce page load times, and potentially increase traffic and engagement by providing a better user experience and higher visibility in mobile search results.
                        </p>
                    </div>
				</div>
			</div>
		</section>
        </Layout>
    )
}