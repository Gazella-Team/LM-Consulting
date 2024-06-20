import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/PageIntro'
import AffiliateProcess from '@/components/affiliate/process'
import Goals from '@/components/goals'
import Stats from '@/components/stats'
import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Affiliate() {
	return (
		<Layout white={true}>
			<Meta
				title={`Become an affiliate - Toolbird.io`}
				description="Get in touch with the team behind Toolbird today."
				keywords='Contact, Mail, Phone, Team'
			/>
			<PageIntro
			buttons={[
								{
									text: 'Become an affiliate',
									path: 'https://app.toolbird.io/share/toolbird.io',
									target: '_blank',
								},
							]}
				hook="Work with us"
				highlighted=""
				heading="Become an affiliate. Earn 30% recurring commission."
				paragraph="Promote Toolbird, and earn commissions as you refer people to our paid plans."
			/>
			<AffiliateProcess />
		</Layout>
	)
}
