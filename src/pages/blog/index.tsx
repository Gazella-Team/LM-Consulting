import { cn } from '@/components/Accordion'
import BlogCard from '@/components/content/BlogCard'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import { allPosts, Post } from 'contentlayer/generated'
import {
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'
import React from 'react'

const tabs: {
	name: string
	tag: Post['category'] | 'all'
	activeClass: string
}[] = [
	{
		name: 'All blogs',
		tag: 'all',
		activeClass: 'text-white bg-gradient-to-r from-cyan-500 to-blue-500',
	},
	{
		name: 'Guides',
		tag: 'guides',
		activeClass: 'text-white bg-gradient-to-r from-green-500 to-lime-500',
	},
	{
		name: 'Engineering',
		tag: 'engineering',
		activeClass:
			'text-white bg-gradient-to-r from-violet-500 to-fuchsia-500',
	},
]

export default function BlogList({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [activeTab, setActiveTab] = React.useState('all')

	const demoPosts = [
		...posts,
		...posts,
		...posts,
		...posts,
		...posts,
		...posts,
	]

	return (
		<Layout>
			{/* Create SEO banner from image.social when we have 3 blogs */}
			<Meta
				title="Blog | Toolbird"
				description="Latest news and updates from Toolbird aswell as guides."
			/>
			<div className="mt-12 mb-8">
				<div className="max-w-6xl w-[90%] mx-auto">
					<h1 className="text-4xl font-semibold mb-2 text-gray-800">
						Blog
					</h1>
					<h2 className="text-xl text-gray-700">
						Latest news and updates from Toolbird
					</h2>
					<div className="mt-8 mb-10 flex">
						<div className="bg-white border rounded-full px-3 py-2.5 flex gap-2">
							{
								// Tabs
								tabs.map((tab) => (
									<div
										key={tab.tag}
										className={cn(
											'text-sm cursor-pointer font-medium px-3 py-1.5 rounded-full',
											tab.tag == activeTab
												? tab.activeClass
												: 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
										)}
										onClick={() => setActiveTab(tab.tag)}
									>
										{tab.name}
									</div>
								))
							}
						</div>
					</div>
				</div>
				<div className="min-h-[500px] py-4 bg-white border-y border-gray-600/10">
					<div className="max-w-6xl w-[90%] gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{demoPosts.map((post) => (
							<BlogCard key={post.slug} post={post} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<{
	posts: Post[]
}> = async (context: GetStaticPropsContext) => {
	return {
		props: {
			posts: allPosts,
		},
	}
}
