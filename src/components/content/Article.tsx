import Image from 'next/image'
import Link from 'next/link'
import type { Post } from 'contentlayer/generated'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Mdx } from '@/components/content/mdx'
import { format } from 'date-fns'
import { ArrowLeft } from 'lucide-react'

export function Article({ post }: { post: Post }) {
	const getNameInitials = (name: string) => {
		const individualNames = name.split(' ')
		return (
			individualNames[0][0] +
			individualNames[individualNames.length - 1][0]
		)
	}

	return (
		<article className="border border-gray-600/10 relative mx-auto flex max-w-6xl w-[90%] p-8 rounded-xl bg-white flex-col gap-8">
			<div className="grid max-w-3xl mx-auto w-full gap-3">
				<div className="flex">
					<Link
						href="/blog"
						className="flex items-center gap-2 group text-gray-500 hover:text-gray-800"
					>
						<ArrowLeft />
						<p>Back to Blog</p>
					</Link>
				</div>
				<h1 className="font-semibold text-3xl">{post.title}</h1>
				<p className="text-sm font-light">
					{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
					<span className="text-gray-500 mx-1">&bull;</span>
					{post.readingTime}
				</p>
				<div className="flex items-center gap-3 mb-5">
					<div className="flex gap-4">
						{post.authors.map((author, index) => (
							<div
								key={index}
								className="flex items-center gap-2"
							>
								<Avatar>
									<AvatarImage src={author.avatar} />
									<AvatarFallback>
										{getNameInitials(author.name)}
									</AvatarFallback>
								</Avatar>
								<div>
									<Link
										href={author.url ?? '#'}
										target="_blank"
										className="text-sm cursor-pointer font-medium hover:underline"
									>
										{author.name}
									</Link>
									<p className="text-sm text-gray-700">
										Technical Cofounder
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="border-border relative h-full w-full overflow-hidden rounded-lg border">
					<img src={post.image} alt={post.title} />
				</div>
			</div>
			<Mdx code={post.body.code} />
		</article>
	)
}
