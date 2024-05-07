type ToolHeroProps = {
	heading: string
	description: string
	image: string
}

export default function ToolHero(props: ToolHeroProps) {
	return (
		<section>
			<div className="max-w-8xl bg-slate-50 mx-auto grid grid-cols-1 md:grid-cols-2"></div>
		</section>
	)
}
