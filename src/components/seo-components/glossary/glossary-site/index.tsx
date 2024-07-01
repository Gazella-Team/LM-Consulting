import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import BlurSection from '@/components/blur-section'
import Link from 'next/link'
import { cn } from 'utils/cs'

export default function GlossarySite() {
	return (
		<Layout>
			{/* TODO: Create SEO banner from image.social when we have 3 blogs */}
			<Meta
				title={`User Insights Glossary - Learn and compare the most essential terms in SaaS user-insights | Toolbird`}
				description="Latest news and updates from Toolbird aswell as guides."
			/>
			<div
				style={{
					background:
						'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 40%)',
				}}
				className="z-10 relative"
			>
				<div className="max-w-6xl py-16 text-center w-[86%] mx-auto">
					<h1 className="text-5xl font-bold  mb-4 text-gray-800">
						Bounce Rate
					</h1>
				</div>
				<div
					style={{
						background:
							'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
					}}
					className="py-12 sm:py-24 flex items-center justify-center border-y border-gray-600/10"
				>
						<p className="text-gray-600 paragraph w-[84%] max-w-2xl">
								Bounce rate in web analytics refers to the
								percentage of visitors who navigate away from a
								website after viewing only one page. It measures
								the effectiveness of a website in engaging
								visitors and encouraging them to explore more
								content.<br></br>
								<br></br>A high bounce rate often indicates that
								the landing page was not compelling enough for
								users to continue browsing, while a low bounce
								rate suggests that users are finding the website
								engaging and are likely exploring further.
							</p>
				</div>
			</div>
		</Layout>
	)
}
