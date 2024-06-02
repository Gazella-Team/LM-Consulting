import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import Goals from '@/components/goals'
import Stats from '@/components/stats'

export default function Enterprise() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Get in touch today"
				highlighted="enterprises"
				heading="Toolbird for"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds."
			/>
		</Layout>
	)
}
