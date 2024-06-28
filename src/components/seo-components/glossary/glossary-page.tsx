import { Post } from 'contentlayer/generated'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import categories, { getCategoriesList } from '@/contentlayer/lib/categories'
import { cn } from '@/helpers/utils'
import Link from 'next/link'
import GlossaryCard from './GlossaryCard'
type GlossaryPageProps = {
	activeTab: keyof typeof categories
	posts: Post[]
}

const glossaryData = [
    {term: "Bounce Rate", description: "Bounce rate in web analytics refers to the percentage of visitors who navigate away from a website after viewing only one page. It measures the effectiveness of a website in engaging visitors and encouraging them to explore more content. A high bounce rate often indicates that the landing page was not compelling enough for users to continue browsing, while a low bounce rate suggests that users are finding the website engaging and are likely exploring further.", link:"/glossary/glossary-single"},
]

export default function GlossaryPage() {
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
				className="mt-12 z-10 relative"
			>
				<div className="max-w-6xl mb-12 w-[86%] mx-auto">
					<h1 className="text-4xl font-bold  mb-4 text-gray-800">
						Toolbird <span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">Glossary</span>
					</h1>
					<h2 className="text-xl max-w-md paragraph font-regular text-gray-600">
						Stay updated on the most important and popular terms in the industry of digital user insights.
					</h2>
				</div>
				<div
					style={{
						background:
							'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
					}}
					className="py-12 flex items-center justify-center border-y border-gray-600/10"
				>
						<div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto">
                            {glossaryData.map((v) => <GlossaryCard key={v.term} link={v.link} term={v.term} description={v.description} />)}
						</div>
				</div>
			</div>
		</Layout>
	)
}
