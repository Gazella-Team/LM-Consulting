import { Post } from 'contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'
import BlogBadge from './BlogBadge'

type BlogCardProps = {
	post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
	return (
		<Link
			className="flex flex-col overflow-hidden rounded-xl border border-gray-600/10 shadow-sm transition-all hover:shadow-md"
			href={`/blog/${post.slug}`}
		>
			<img
				alt={post.title}
				width="2400"
				height="1260"
				decoding="async"
				data-nimg="1"
				className="blur-0 aspect-[1200/630] object-cover"
				src={post.image}
				style={{ color: 'transparent' }}
			/>
			<div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-3.5">
				<div>
					<h2 className="line-clamp-2 font-display text-xl font-bold text-gray-700">
						{post.title}
					</h2>
					<p className="mt-2 paragraph line-clamp-2 text-sm text-gray-500">
						{post.description}
					</p>
				</div>
				<div className="mt-4 paragraph flex items-center justify-between">
					<time
						dateTime={format(
							new Date(post.publishedAt),
							'yyyy-MM-dd'
						)}
						className="text-sm text-gray-500"
					>
						{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
					</time>
					<BlogBadge category={post.category} />
				</div>
			</div>
		</Link>
	)
}
