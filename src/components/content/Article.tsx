import Link from 'next/link'
import type { Post } from 'contentlayer/generated'

import { Mdx } from '@/components/content/mdx'
import { format } from 'date-fns'
import { AuthorAvatars } from './blog/AuthorAvatars'
import { AuthorNames } from './blog/AuthorNames'
import BlogBadge from './BlogBadge'
import { ArrowLeft } from 'lucide-react'

export function Article({ post }: { post: Post }) {
	return (
		<article className="border border-gray-600/10 relative mx-auto flex max-w-3xl w-[86%] p-8 py-12 my-24 rounded-3xl shadow-clean shadow-main/10 bg-white flex-col gap-8">
			<div className="grid max-w-2xl mx-auto w-full gap-5">
				<div className="mb-3 paragraph text-gray-400 text-sm gap-2">
					<Link className='flex gap-2 items-center' href={`/blog`} passHref>
						<ArrowLeft size={14} />
						Back to all posts
					</Link>
				</div>
				<div className="flex items-center gap-2">
					<Link href={`/blog/category/${post.category}`} passHref>
						<BlogBadge category={post.category} />
					</Link>
				</div>
				<h1 className="font-semibold text-gray-800 text-3xl">{post.title}</h1>
				<h2 className="text-gray-600 paragraph">{post.description}</h2>
				<div className="flex items-center gap-3 paragraph mb-5">
					<div className="flex gap-4">
						<AuthorAvatars authors={post.authors} />
						<div>
							<AuthorNames authors={post.authors} />
							<p className="text-sm text-gray-500 font-light">
								{format(
									new Date(post.publishedAt),
									'MMMM dd, yyyy'
								)}
								<span className="text-gray-500 mx-1">
									&bull;
								</span>
								{post.readingTime}
							</p>
						</div>
					</div>
				</div>
				<div className="border border-gray-600/10 relative h-full w-full overflow-hidden rounded-3xl">
					<img src={post.image} alt={post.title} />
				</div>
			</div>
			<Mdx code={post.body.code} />
		</article>
	)
}
