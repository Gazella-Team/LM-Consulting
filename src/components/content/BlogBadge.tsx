import categories from '@/contentlayer/lib/categories'
import { Post } from 'contentlayer/generated'
import { cn } from '../Accordion'

type BlogCategory = Post['category']

type BlogBadgeProps = {
	category: BlogCategory
}

export default function BlogBadge({ category }: BlogBadgeProps) {
	const badgeColor = categories[category].activeClass

	return (
		<span
			className={cn(
				`px-2 border border-gray-600/10 paragraph text-white py-1.5 rounded-full text-xs font-medium bg-gradient-to-r`,
				badgeColor
			)}
		>
			{category.slice(0, 1).toUpperCase() + category.slice(1)}
		</span>
	)
}
