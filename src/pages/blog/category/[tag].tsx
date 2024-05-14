import BlogCategoryPage from '@/components/content/blog/BlogCategoryPage'
import categories from '@/contentlayer/categories'
import { allPosts, Post } from 'contentlayer/generated'
import {
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'
import React from 'react'

export default function CategoryBlogListPage({
	posts,
	category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <BlogCategoryPage posts={posts} activeTab={category} />
}

export const getStaticPaths = async () => {
	const paths = Object.keys(categories).map((tag) => ({
		params: { tag },
	}))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<{
	posts: Post[]
	category: keyof typeof categories
}> = async (context: GetStaticPropsContext) => {
	const tag = context.params?.tag as keyof typeof categories
	if (!tag) {
		return {
			notFound: true,
		}
	}

	if (!Object.keys(categories).includes(tag)) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			category: tag,
			posts: allPosts.filter((post) => post.category === tag),
		},
	}
}
