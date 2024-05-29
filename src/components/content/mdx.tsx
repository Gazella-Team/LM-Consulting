import { getMDXComponent } from 'next-contentlayer/hooks'
import { components } from './mdx-components'
import { cn } from '@/helpers/utils'

interface MdxProps {
	code: string
	className?: string
}

export function Mdx({ code, className }: MdxProps) {
	const MDXComponent = getMDXComponent(code)

	return (
		<div
			className={cn(
				'text-gray-600 prose-headings:font-semibold prose-headings:text-gray-800 paragraph prose mx-auto prose-slate prose-pre:border prose-pre:border-gray-600/10 prose-pre:rounded-lg prose-img:rounded-3xl prose-img:border prose-img:border-border',
				className
			)}
		>
			<MDXComponent components={{ ...components }} />
		</div>
	)
}
