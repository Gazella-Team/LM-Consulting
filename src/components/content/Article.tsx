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
		<article className="border border-gray-600/10 relative mx-auto flex max-w-3xl p-8 rounded-xl bg-white flex-col gap-8">
			<div className="grid w-full gap-3">
				<div className="flex">
					<Link
						href="/blog"
						className="flex items-center gap-2 group text-gray-500 hover:text-gray-800"
					>
						<ArrowLeft />
						<p>Back to all posts</p>
					</Link>
				</div>
				<h1 className="font-semibold mb-5 text-3xl">{post.title}</h1>
				<div className="border-border relative h-64 w-full overflow-hidden rounded-lg border">
					<Image
						src={post.image}
						fill={true}
						alt={post.title}
						className="object-cover"
					/>
				</div>
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src={post.author.avatar} />
						<AvatarFallback>
							{getNameInitials(post.author.name)}
						</AvatarFallback>
					</Avatar>
					<div className="text-sm font-light">
						<Link
							href={post.author.url ?? '#'}
							target="_blank"
							className="cursor-pointer font-medium hover:underline"
						>
							{post.author.name}
						</Link>
						<p>
							{format(
								new Date(post.publishedAt),
								'MMMM dd, yyyy'
							)}
							<span className="text-gray-500 mx-1">&bull;</span>
							{post.readingTime}
						</p>
					</div>
				</div>
			</div>
			<Mdx code={post.body.code} />
		</article>
	)
}
