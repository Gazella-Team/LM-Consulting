import Layout from '@/components/Layout'
import BlurSection from '@/components/blur-section'
import PricingTable from '@/components/pricingtable'
import PricingFAQ from '@/components/FAQ/PricingFAQ'
import Meta from '@/components/Layout/Meta'
import CurvePageIntro from '@/components/CurvePageIntro'
import Link from 'next/link'

const partnerData = [
	{name: "Luxvps", image:"/partners/luxvps.png", link: "https://luxvps.net/", description: "LuxVPS is a hosting service provider that offers Virtual Private Servers (VPS) solutions. VPS hosting is a type of web hosting that uses virtualization technology to provide dedicated resources on a server with multiple users. It's a more secure and stable solution than shared hosting, where you don’t get a dedicated server space."},
	{name: "Burst Creators", image:"/partners/burstcreators.png", link: "https://burstcreators.com/", description: "With Burst you only pay for actual views. Never overspend on influencer marketing again! Empower your brand with Burst—where impactful trends and measurable engagement drive your influencer campaigns. Pay for performance, not promises."},
]

export default function Partners() {
	return (
		<Layout whiteBeforeScroll={true} white={true}>
			<Meta title={`Pricing - Toolbird.io`} />
			<CurvePageIntro
				hook="Who we work with"
				highlighted=""
				heading="Toolbird Partners"
				paragraph="Learn more about who we work with to provide as much value as possible."
				buttons={[
					{
						text: 'Become a Toolbird Partner',
						path: 'https://cal.com/lasseosmann/toolbird-partner',
						target: "_blank",
					},
				]}
			>
				<section className=''>
					<div style={{ background: 'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)', }} className='max-w-2xl mx-auto rounded-3xl shadow-clean flex flex-col gap-6 shadow-main/10 border border-gray-600/10 p-10'>
					{partnerData.map((partner) => <PartnerCards key={partner.name} Obj={partner} />)}
					</div>
				</section>
			</CurvePageIntro>
		</Layout>
	)
}


const PartnerCards = (props:any) => {
	return (
		<Link target='_blank' href={props.Obj.link} className='bg-white flex flex-col gap-3 p-10 text-gray-800 border border-gray-600/10 rounded-2xl'>
			<img className='w-14 h-14 mb-4 object-cover rounded-full border border-gray-600/10' src={props.Obj.image}></img>
			<h2 className='font-semibold text-lg'>{props.Obj.name}</h2>
			<p className='paragraph text-gray-600'>{props.Obj.description}</p>
		</Link>
	)
}