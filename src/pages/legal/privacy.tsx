import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'

export default function Privacy() {
	return (
		<Layout white={true}>
			<Meta
				title={`Privacy policy - Toolbird.io`}
			/>
			<div className="w-[86%] mx-auto max-w-6xl py-24 text-center">
				<h1 className="text-gray-800 text-6xl font-semibold">
					Privacy policy
				</h1>
			</div>
			<section
				className="border-y paragraph border-gray-600/10 py-16"
				style={{
					background:
						'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
				}}
			>
				<div className="mx-auto max-w-2xl flex flex-col gap-16 leading-8 text-gray-600">
						<p className='leading-[220%]'>
						Welcome to Toolbird.io (the "Site"), hosted by Toolbird ("Toolbird", "we", "us", and/or "our"). Toolbird provides a platform for managing web analytics, uptime monitoring, user feedback and a list of other tools (the "Services")​1​. We value your privacy and are dedicated to protecting your personal data. This Privacy Policy covers how we collect, handle, and disclose personal data on our Platform.<br></br><br></br>If you have any questions, comments, or concerns regarding this Privacy Policy, our data practices, or would like to exercise your rights, do not hesitate to contact us.
						</p>
						<div className='flex flex-col gap-5'>
							<h2 className='text-xl font-semibold text-gray-800'>To Whom Does This Policy Apply</h2>
							<p>This Privacy Policy applies to customers and site visitors. Each customer is responsible for posting its own terms, conditions, and privacy policies, and ensuring compliance with all applicable laws and regulations.</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='text-xl font-semibold text-gray-800'>Changes To This Privacy Policy</h2>
							<p>This Privacy Policy may change from time to time, as our Platform and our business may change. Your continued use of the Platform after any changes to this Privacy Policy indicates your agreement with the terms of the revised Privacy Policy.</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='text-xl font-semibold text-gray-800'>What Information Do We Collect</h2>
							<p>We collect information directly from you when you provide it to us explicitly on our Site. We do not use third-party cookies on our Site.</p>
						</div>
						<div className='flex flex-col gap-5'>
							<h2 className='text-xl font-semibold text-gray-800'>How To Contact Us</h2>
							<p>For privacy-related questions, please contact us at contact@toolbird.io</p>
						</div>
						<div className='border-t border-gray-600/20 pt-5 text-gray-500 text-center'>
							<p>Last updated: May 29, 2023</p>
						</div>
				</div>
			</section>
		</Layout>
	)
}
