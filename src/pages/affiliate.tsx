import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'

export default function Affiliate() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="Work with us"
				highlighted="affiliate"
				heading="Become an"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds."
			/>
		</Layout>
	)
}
