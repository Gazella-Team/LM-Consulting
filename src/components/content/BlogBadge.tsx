import { Post } from 'contentlayer/generated'

type BlogCategory = Post['category']

type BlogBadgeProps = {
	category: BlogCategory
}

export default function BlogBadge({ category }: BlogBadgeProps) {
	const badgeColor = {
		guides: 'from-green-500 to-lime-500',
		engineering: 'from-violet-500 to-fuchsia-500',
		news: 'from-cyan-500 to-blue-500',
	}

	return (
		<span
			className={`px-2 border border-gray-600/10 text-white py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${badgeColor[category]}`}
		>
			{category.slice(0, 1).toUpperCase() + category.slice(1)}
		</span>
	)
}
