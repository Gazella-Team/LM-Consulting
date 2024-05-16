import { Article } from '@/components/content/Article'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import { allPosts, Post } from 'contentlayer/generated'
import { ChevronLeft } from 'lucide-react'
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'
import Link from 'next/link'

export default function BlogList({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout>
			<Meta
				title={`${post.title} | Toolbird`}
				description={post.description}
				banner={post.image}
				authors={post.authors.map((author) => author.name)}
			/>
			<div className="py-8">
				<Article post={post} />
			</div>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = allPosts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<{
	post: Post
}> = async (context: GetStaticPropsContext) => {
	const slug = context.params?.slug as string
	const post = allPosts.find((p) => p.slug === slug)

	if (!post) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			post: post,
		},
	}
}
