import { Post } from 'contentlayer/generated'
import BlogCard from '../BlogCard'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import categories, { getCategoriesList } from '@/contentlayer/categories'
import { cn } from '@/helpers/utils'
import Link from 'next/link'
type BlogCategoryPageProps = {
	activeTab: keyof typeof categories
	posts: Post[]
}

export default function BlogCategoryPage({
	posts,
	activeTab,
}: BlogCategoryPageProps) {
	const category = categories[activeTab]
	return (
		<Layout>
			{/* Create SEO banner from image.social when we have 3 blogs */}
			<Meta
				title={`Blog | ${category.name} | Toolbird`}
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
								getCategoriesList().map((category) => (
									<Link
										key={category.tag}
										href={
											category.tag == 'all'
												? '/blog'
												: `/blog/category/${category.tag}`
										}
										className={cn(
											'text-sm cursor-pointer font-medium px-3 py-1.5 rounded-full',
											category.tag == activeTab
												? category.activeClass
												: 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
										)}
									>
										{category.name}
									</Link>
								))
							}
						</div>
					</div>
				</div>
				<div className="min-h-[800px] py-12 bg-white border-y border-gray-600/10">
					{posts.length > 0 ? (
						<div className="max-w-6xl w-[90%] gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
							{posts.map((post) => (
								<BlogCard key={post.slug} post={post} />
							))}
						</div>
					) : (
						<div className="max-w-6xl w-[90%] mx-auto flex items-center justify-center border border-dashed rounded-xl">
							<p className="text-gray-600 text-lg p-8">
								No blog posts found in this category yet. Check
								back later!
							</p>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}
