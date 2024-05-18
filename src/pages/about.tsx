import Layout from '@/components/Layout'
import PageIntro from '@/components/PageIntro'
import AboutComponent from '@/components/about'

export default function About() {
	return (
		<Layout white={true}>
			<PageIntro
				hook="By developers, for developers"
				highlighted="us"
				heading="About"
				paragraph=""
			/>
			<AboutComponent />
		</Layout>
	)
}
