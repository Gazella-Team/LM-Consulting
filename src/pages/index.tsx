import Layout from '@/components/Layout'
import SectionIntro from '@/components/SectionIntro'
import BentoGridComponent from '@/components/bento-grids/analytics-bento-grid'
import BlurSection from '@/components/blur-section'
import CustomerSlider from '@/components/customer-slider'
import DashboardDisplay from '@/components/dashboarddisplay'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import Hero02 from '@/components/hero-02'
import Testimonials from '@/components/testimonials'

export default function Home() {
	return (
		<Layout white={true}>
			<Hero />
			<div className='mt-[-40px]'>
				<SectionIntro
					heading="The all-in-one cockpit for your SaaS startup"
					description="With our all-in-one platform we ensure better overview and higher productivity"
					hook="Save time and get better overview"
				>
					<BentoGridComponent />
				</SectionIntro>
			</div>
			<BlurSection
					bottomMargin={true}
					heading="Used by rapidly growing startups worldwide"
					hook="Testimonials"
			>
					<Testimonials />			
			</BlurSection>
		</Layout>
	)
}
