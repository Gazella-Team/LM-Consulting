import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'

export default function Terms() {
	return (
		<Layout white={true}>
			<Meta title={`Terms of service - Toolbird.io`} />
			<div className="w-[86%] mx-auto max-w-6xl py-24 text-center">
				<h1 className="text-gray-800 text-6xl font-semibold">
					Terms of Service
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
					<p className="leading-[220%]">
						Subject to these Terms of Service (this
						&quot;Agreement&quot;), Toolbird.io
						(&quot;Toolbird&quot;, &quot;we&quot;, &quot;us&quot;
						and/or &quot;our&quot;) provides access to
						Toolbird&apos;s cloud platform as a service
						(collectively, the &quot;Services&quot;). By using or
						accessing the Services, you acknowledge that you have
						read, understand, and agree to be bound by this
						Agreement.
						<br></br>
						<br></br>
						If you are entering into this Agreement on behalf of a
						company, business or other legal entity, you represent
						that you have the authority to bind such entity to this
						Agreement, in which case the term &quot;you&quot; shall
						refer to such entity. If you do not have such authority,
						or if you do not agree with this Agreement, you must not
						accept this Agreement and may not use the Services.{' '}
					</p>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							1. Acceptance of Terms
						</h2>
						<p>
							By signing up and using the services provided by
							Toolbird (referred to as the &quot;Service&quot;),
							you are agreeing to be bound by the following terms
							and conditions (&quot;Terms of Service&quot;). The
							Service is owned and operated by Toolbird
							(&quot;Us&quot;, &quot;We&quot;, or
							&quot;Our&quot;).
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							2. Description of Service
						</h2>
						<p>
							Toolbird provides an open-source link management
							tool for modern marketing teams to create, share,
							and track short links (&quot;the Product&quot;). The
							Product is accessible at toolbird.io and other
							domains and subdomains controlled by Us
							(collectively, &quot;the Website&quot;).
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							3. Intellectual Property Rights
						</h2>
						<p>
							You acknowledge and agree that the Service and its
							entire contents, features, and functionality,
							including but not limited to all information,
							software, code, text, displays, graphics,
							photographs, video, audio, design, presentation,
							selection, and arrangement, are owned by Us, our
							licensors, or other providers of such material and
							are protected by United States and international
							copyright, trademark, patent, trade secret, and
							other intellectual property or proprietary rights
							laws.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							4. Changes to these Terms
						</h2>
						<p>
							We reserve the right to revise and update these
							Terms of Service from time to time in our sole
							discretion. All changes are effective immediately
							when we post them, and apply to all access to and
							use of the Website thereafter. Your continued use of
							the Website following the posting of revised Terms
							of Service means that you accept and agree to the
							changes.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							5. Contact Information
						</h2>
						<p>
							Questions or comments about the Website or these
							Terms of Service may be directed to our support team
							at contact@toolbird.io
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							6. Disclaimer of Warranties
						</h2>
						<p>
							THE SERVICE AND ITS CONTENT ARE PROVIDED ON AN
							&quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS
							WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL
							WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
							WARRANTY OF TITLE, MERCHANTABILITY, NON-INFRINGEMENT
							OF THIRD PARTIES&apos; RIGHTS, AND FITNESS FOR
							PARTICULAR PURPOSE.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							7. Limitation of Liability{' '}
						</h2>
						<p>
							IN NO EVENT WILL WE, OUR AFFILIATES OR THEIR
							LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS,
							OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY
							KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
							CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE
							WEBSITE, THE SERVICE, ANY WEBSITES LINKED TO IT, ANY
							CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES,
							INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
							CONSEQUENTIAL, OR PUNITIVE DAMAGES.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							8. Governing Law and Jurisdiction
						</h2>
						<p>
							These Terms of Service and any dispute or claim
							arising out of or related to them, their subject
							matter or their formation (in each case, including
							non-contractual disputes or claims) shall be
							governed by and construed in accordance with the
							internal laws of the State of California without
							giving effect to any choice or conflict of law
							provision or rule. Any legal suit, action, or
							proceeding arising out of, or related to, these
							Terms of Service or the Website shall be instituted
							exclusively in the federal courts of Denmark.
						</p>
					</div>
					<div className="flex flex-col gap-5">
						<h2 className="text-xl font-semibold text-gray-800">
							Thanks for using Toolbird
						</h2>
						<p>
							By using Toolbird, you acknowledge that you have
							read these Terms of Service, understood them, and
							agree to be bound by them. If you do not agree to
							these Terms of Service, you are not authorized to
							use the Service. We reserve the right to change
							these Terms of Service at any time, so please review
							them frequently.
						</p>
					</div>
					<div className="border-t border-gray-600/20 pt-5 text-gray-500 text-center">
						<p>Last updated: May 29, 2023</p>
					</div>
				</div>
			</section>
		</Layout>
	)
}
