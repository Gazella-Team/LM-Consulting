import { cn } from '@/helpers/utils'
import {
	TooltipProvider,
	Tooltip as RadixTooltip,
	TooltipTrigger,
	TooltipContent,
} from './provider'

export default function Tooltip({
	content,
	jsx,
	children,
	className,
	style,
}: {
	content?: string
	jsx?: React.ReactNode
	children: React.ReactNode
	className?: string
	style?: React.CSSProperties
}) {
	if (!content && !jsx) return <>{children}</>
	return (
		<TooltipProvider>
			<RadixTooltip delayDuration={100}>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent className={cn(className)} style={style}>
					{content && (
						<p
							className={cn(
								className,
								'font-medium max-w-[300px]'
							)}
						>
							{content}
						</p>
					)}
					{jsx && jsx}
				</TooltipContent>
			</RadixTooltip>
		</TooltipProvider>
	)
}
