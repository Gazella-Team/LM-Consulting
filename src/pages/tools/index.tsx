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
		category: 'analytics',
		link: '/tools/utm-generator',
		icon: <LinkIcon size={20} strokeWidth={2.5} />,
	},
]

export default function Tools() {
	return (
		<Layout>
			<Meta
				title="Free to use Tools | Toolbird.io"
				description="Free to use tools for web analytics, feedback, surveys, SEO, and more."
			/>
			<div className="bg-white border border-gray-600/10 p-10 mt-10 mx-auto max-w-6xl rounded-3xl">
				<h1 className="text-3xl text-center text-gray-800 font-bold">
					Free to use Tools
				</h1>
				<div className="flex flex-col gap-8 mt-10">
					{Object.keys(CATEGORIES).map((category) => (
						<div key={category}>
							<h2 className="text-lg font-semibold text-gray-800">
								{
									CATEGORIES[
										category as keyof typeof CATEGORIES
									]
								}
							</h2>
							<hr className="my-2" />
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
								{TOOLS.filter(
									(tool) => tool.category === category
								).map((tool) => (
									<Link
										key={tool.link}
										href={tool.link}
										className="hover:bg-gray-50 cursor-pointer rounded-xl p-2 flex items-center gap-2"
									>
										<div className="text-gray-700 rounded-full p-2 bg-slate-50 border border-gray-600/10">
											{tool.icon}
										</div>
										<div className="flex paragraph flex-col gap-1">
											<h3 className="text-sm text-gray-800 font-medium">
												UTM Generator for Campaign
												Tracking
											</h3>
											<p className="text-xs text-gray-700">
												Generate unique UTM parameters
												for tracking your campaign
											</p>
										</div>
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}
