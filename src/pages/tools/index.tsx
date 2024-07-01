import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES = {
	analytics: 'Web Analytics Tools',
}

const TOOLS = [
	{
		title: 'UTM Generator for Campaign Tracking',
		description: 'Generate unique UTM parameters for your campaign',
		category: 'Web Analytics',
		link: '/tools/utm-generator',
		icon: <LinkIcon size={20} strokeWidth={2.5} />,
	},
]

export default function Tools() {
	return (
		<Layout>
			{/* TODO: Create SEO banner from image.social when we have 3 blogs */}
			<Meta
				title={`Free to use tools - Toolbird`}
				description="Latest news and updates from Toolbird aswell as guides."
			/>
			<div
				style={{
					background:
						'radial-gradient(circle, rgba(103,27,255,0.06908700980392157) 0%, rgba(255,255,255,0) 40%)',
				}}
				className="z-10 relative"
			>
				<div className="max-w-6xl py-24 w-[86%] text-center mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold  mb-4 text-gray-800">
						Free to use{" "}
						<span className="bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text">
							tools
						</span>
					</h1>
					<h2 className="text-xl paragraph font-regular text-gray-600">
						Dive into the variours supplementary tools provided by
						Toolbird.
					</h2>
				</div>
				<div
					style={{
						background:
							'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
					}}
					className="py-12 flex items-center justify-center border-y border-gray-600/10"
				>
					<div className="max-w-6xl w-[86%] gap-8 md:gap-6 mx-auto grid grid-cols-1 md:grid-cols-2">
						{TOOLS.map((tool) => (
							<ToolCard key={tool.title} tool={tool} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

const ToolCard = ({ tool }: { tool: any }) => {
	return (
		<Link
			href={tool.link}
			className="bg-white rounded-2xl border flex flex-col gap-6 text-gray-800 border-gray-600/10 p-10 hover:bg-slate-50 transition all"
		>
			<p className="flex items-center gap-1 paragraph font-semibold text-sm text-main">
				<div className="w-2 h-2 rounded-full bg-main text-sm"></div>{' '}
				{tool.category}
			</p>
			<div className="flex flex-col gap-1">
				<h2 className="font-semibold">{tool.title}</h2>
				<p className="text-gray-600 font-normal paragraph text-sm">
					{tool.description}
				</p>
			</div>
		</Link>
	)
}
