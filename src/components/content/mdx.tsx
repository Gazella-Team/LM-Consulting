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
				'prose-headings:font-semibold paragraph prose mx-auto prose-slate prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-img:rounded-lg prose-img:border prose-img:border-border',
				className
			)}
		>
			<MDXComponent components={{ ...components }} />
		</div>
	)
}
