import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import Goals from '@/components/goals'
import Stats from '@/components/stats'

export default function Contact() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="We'd love to hear from you"
				highlighted=""
				heading="Get in touch"
				paragraph="Wake up to an inbox full of new testimonial alerts. Share them everywhere in seconds. Get more visits, convert more, and close more deals. Senja makes it easy."
			/>
		</Layout>
	)
}
