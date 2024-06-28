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
				'mb-24 mt-14 max-w-7xl mx-auto lg:rounded-[100px] backdrop:blur-3xl border-y border-gray-600/10'
			)}
		>
			<div className="w-[86%] mx-auto max-w-6xl">
				<div className="text-gray-800 py-24 z-1">
					<div className="flex mb-12 flex-col gap-6">
                        <p className="text-gray-800 paragraph"><span><Link className="text-gray-500" href={"/glossary"}>Glossary</Link></span> / Bounce Rate</p>
						<h2 className="text-5xl font-semibold">Bounce Rate</h2>
					</div>
                    <div>
                        <p className="text-gray-600 paragraph">
						Bounce rate in web analytics refers to the percentage of visitors who navigate away from a website after viewing only one page. It measures the effectiveness of a website in engaging visitors and encouraging them to explore more content.<br></br><br></br>A high bounce rate often indicates that the landing page was not compelling enough for users to continue browsing, while a low bounce rate suggests that users are finding the website engaging and are likely exploring further.
                        </p>
                    </div>
				</div>
			</div>
		</section>
        </Layout>
    )
}