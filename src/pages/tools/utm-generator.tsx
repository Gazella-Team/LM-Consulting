import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/Form'
import Tooltip from '@/components/ui/Tooltip'
import { cn } from '@/helpers/utils'
import Copyable from '@/components/molecules/Copyable'
const FAQ_INFO = [
	{
		question: 'What Do You Use UTM Links For?',
		answer: `UTM links are used to track specific marketing campaigns across various media. By adding UTM parameters to URLs, marketers can measure the effectiveness of each campaign in driving traffic to their website. This is particularly useful for understanding which campaigns are performing well in terms of generating clicks, engaging users, and contributing to conversions or sales. With UTM links, you can fine-tune your marketing strategies, allocate budgets more efficiently, and achieve better ROI.`,
	},
	{
		question: 'How Does a UTM Campaign Work?',
		answer: `A UTM campaign works by using tagged URLs that track a visitor's journey from the initial click to subsequent actions on a website. When a user clicks on a URL with UTM parameters, the parameters are sent to your analytics platform, such as Toolbird Analytics. This data is then categorized and displayed, showing you where visitors originated from, what campaign directed them to you, and how they interact with your site. Over time, analyzing this data helps you understand what attracts and engages your visitors, allowing you to optimize future campaigns for better results.`,
	},
]

const schema = z.object({
	url: z.string().optional(),
	source: z.string().optional(),
	medium: z.string().optional(),
	campaign: z.string().optional(),
	content: z.string().optional(),
	term: z.string().optional(),
})

export default function UTMGeneratorTool() {
	const form = useForm({
		resolver: zodResolver(schema),
		defaultValues: {
			url: '',
			source: '',
			medium: '',
			campaign: '',
			content: '',
			term: '',
		},
	})

	function getURL(data: z.infer<typeof schema>) {
		if (!data.url) return null
		let query: { [key: string]: string } = {}
		if (data.source) query['utm_source'] = data.source
		if (data.medium) query['utm_medium'] = data.medium
		if (data.campaign) query['utm_campaign'] = data.campaign
		if (data.content) query['utm_content'] = data.content
		if (data.term) query['utm_term'] = data.term

		const utmParams = new URLSearchParams(query)
		try {
			var newURL = new URL(data.url)
		} catch (error) {
			return null
		}
		utmParams.forEach((value, key) => {
			newURL.searchParams.set(key, value)
		})

		return newURL.toString()
	}

	const url = getURL(form.watch())

	return (
		<Layout>
			<Meta
				title="UTM Builder | Generate UTM links to Track Campaigns - Toolbird.io"
				description="Gain deeper and better insights into your marketing campaigns by adding UTM parameters to inbound links with this free campaign URL generator, designed to enhance your tracking and analysis capabilities."
			/>
			<div className="mx-auto px-2">
				<section
					style={{
						background:
							'linear-gradient(329deg, rgba(244,244,244,1) 0%, rgba(250,248,255,1) 17%, rgba(247,247,247,1) 37%, rgba(253,252,255,1) 67%, rgba(252,251,255,1) 94%)',
					}}
					className="mt-14 py-24 p-2 md:px-12 max-w-7xl mx-auto rounded-3xl lg:rounded-[100px] backdrop:blur-3xl border-y border-gray-600/10"
				>
					<div className="flex flex-col gap-12 mx-auto max-w-4xl">
						<div className="flex flex-col gap-4">
							<h2 className="text-3xl font-semibold text-gray-800">
								UTM Generator for Campaign Tracking
							</h2>
							<p className="text-gray-600 max-w-2xl">
								Gain deeper and better insights into your
								marketing campaigns by adding UTM parameters to
								inbound links with this free campaign URL
								generator, designed to enhance your tracking and
								analysis capabilities.
							</p>
						</div>
						<Form {...form}>
							<form
								className="mx-auto max-w-lg flex w-full flex-col gap-4"
								onSubmit={form.handleSubmit((data) =>
									console.log(data)
								)}
							>
								<h3 className="text-xl font-semibold text-gray-800">
									UTM Parameters
								</h3>
								<FormField
									name="url"
									render={({ field }) => (
										<FormItem className="flex flex-1 flex-col">
											<div
												className={cn('flex items-end')}
											>
												<FormLabel>
													Website URL
												</FormLabel>
												<Tooltip content="Website URL is required">
													<p className="text-rose-500">
														*
													</p>
												</Tooltip>
											</div>
											<input
												{...field}
												placeholder="https://toolbird.io"
												className="peer text-gray-600 bg-white shadow-sm flex p-2 px-4 rounded-md h-10 w-full border border-gray-600/10 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:ring-2 ring-purple-500"
											/>
											<p className="text-gray-600 text-xs">
												The full URL of the page -
												include the protocol
												(http/https)
											</p>
										</FormItem>
									)}
								/>
								<FormField
									name="source"
									render={({ field }) => (
										<FormItem className="flex flex-1 flex-col">
											<div className="flex items-end gap-">
												<FormLabel>Source</FormLabel>
												<Tooltip content="Campaign Source is required">
													<p className="text-rose-500">
														*
													</p>
												</Tooltip>
											</div>
											<input
												{...field}
												placeholder="google, facebook, hacker news, twitter etc."
												className="text-gray-600 bg-white shadow-sm flex p-2 px-4 rounded-md h-10 w-full border border-gray-600/10 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:ring-2 ring-purple-500"
											/>
											<p className="text-gray-600 text-xs">
												Identifies the platform or
												website referrer.
											</p>
										</FormItem>
									)}
								/>
								<FormField
									name="medium"
									render={({ field }) => (
										<FormItem className="flex flex-1 flex-col">
											<div className="flex items-end gap-">
												<FormLabel>Medium</FormLabel>
												<Tooltip content="Campaign Medium is required">
													<p className="text-rose-500">
														*
													</p>
												</Tooltip>
											</div>
											<input
												{...field}
												placeholder="organic, cpc, referral, social, email or none"
												className="text-gray-600 bg-white shadow-sm flex p-2 px-4 rounded-md h-10 w-full border border-gray-600/10 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:ring-2 ring-purple-500"
											/>
											<p className="text-gray-600 text-xs">
												Identifies the traffic type.
											</p>
										</FormItem>
									)}
								/>
								<FormField
									name="campaign"
									render={({ field }) => (
										<FormItem className="flex flex-1 flex-col">
											<div className="flex items-end gap-">
												<FormLabel>
													Campaign Name
												</FormLabel>
												<Tooltip content="Campaign Name is required">
													<p className="text-rose-500">
														*
													</p>
												</Tooltip>
											</div>
											<input
												{...field}
												placeholder="winter-sales-2024"
												className="text-gray-600 bg-white shadow-sm flex p-2 px-4 rounded-md h-10 w-full border border-gray-600/10 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:ring-2 ring-purple-500"
											/>
											<p className="text-gray-600 text-xs">
												Name for marketing promotion. If
												running a winter sales campaign.
												All links should use the same
												name.
											</p>
										</FormItem>
									)}
								/>
								<FormField
									name="term"
									render={({ field }) => (
										<FormItem className="flex flex-1 flex-col">
											<FormLabel>
												Term (optional)
											</FormLabel>
											<input
												{...field}
												placeholder="privacy analytics, shoe store, best iphone repair shops"
												className="text-gray-600 bg-white shadow-sm flex p-2 px-4 rounded-md h-10 w-full border border-gray-600/10 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:ring-2 ring-purple-500"
											/>
											<p className="text-gray-600 text-xs">
												Keywords used for paid ads
											</p>
										</FormItem>
									)}
								/>
								<FormField
									name="content"
									render={({ field }) => (
										<FormItem className="flex flex-1 flex-col">
											<FormLabel>
												Content (optional)
											</FormLabel>
											<input
												{...field}
												placeholder="logo-link, text-link, image-link, sidebar-link, footer-link, header-link, etc."
												className="text-gray-600 bg-white shadow-sm flex p-2 px-4 rounded-md h-10 w-full border border-gray-600/10 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 outline-none focus-visible:ring-2 ring-purple-500"
											/>
											<p className="text-gray-600 text-xs">
												Used to differentiate links on
												the same ad or page. Used for
												A/B testing of copy or ad
												placement.
											</p>
										</FormItem>
									)}
								/>
								{url && (
									<div className="flex flex-col gap-2">
										<div className="flex items-center justify-between">
											<h3
												className="text-lg font-semibold text-gray-800"
												id="generated-url"
											>
												Your Unique Campaign URL
											</h3>
											<button
												className="text-sm text-gray-500 hover:text-main transition-all"
												onClick={() => {
													form.reset()
												}}
											>
												Clear fields
											</button>
										</div>
										<div className="w-full flex rounded-xl gap-4 bg-white items-center justify-between p-2 border">
											<p className="text-sm flex-grow flex-1 text-main overflow-hidden whitespace-wrap break-all">
												{url}
											</p>
											<Tooltip content="Copy to clipboard">
												<Copyable text={url} />
											</Tooltip>
										</div>
									</div>
								)}
							</form>
						</Form>
						<div className="grid grid-cols-1 paragraph gap-y-8 mx-auto max-w-4xl">
							<div className="flex gap-4" key={'UTM-Parameters'}>
								<div className="w-10">
									<HiQuestionMarkCircle
										fill="rgb(40 40 51)"
										size={30}
									/>
								</div>
								<div className="flex flex-col gap-2">
									<h2 className="font-semibold text-xl text-gray-800">
										What are UTM Parameters?
									</h2>
									<p className="text-gray-700">
										UTM parameters are simple snippets of
										text added to the end of a URL to help
										track the performance of digital
										marketing campaigns. Standing for
										&quot;Urchin Tracking Module,&quot;
										these parameters work with analytics
										tools to give insights about how
										visitors are coming to your website. The
										most common UTM parameters include:
									</p>
									<ul className="list-disc list-inside text-gray-700 space-y-1">
										<li>
											<strong>utm_source:</strong>{' '}
											Identifies which site sent the
											traffic (e.g., Google, newsletter).
										</li>
										<li>
											<strong>utm_medium:</strong>{' '}
											Specifies the medium used (e.g.,
											email, social media).
										</li>
										<li>
											<strong>utm_campaign:</strong> Names
											the specific campaign or promotion.
										</li>
										<li>
											<strong>utm_term:</strong> Notes the
											keywords for paid search.
										</li>
										<li>
											<strong>utm_content:</strong> Helps
											differentiate similar content, or
											links within the same ad.
										</li>
									</ul>
									<p className="text-gray-700">
										These parameters allow you to see the
										effectiveness of different marketing
										strategies and adjust your efforts based
										on actual data.
									</p>
								</div>
							</div>
							<div className="flex gap-4" key={'UTM-Tracking'}>
								<div className="w-10">
									<HiQuestionMarkCircle
										fill="rgb(40 40 51)"
										size={30}
									/>
								</div>
								<div className="flex flex-col gap-2">
									<h2 className="font-semibold text-xl text-gray-800">
										How do I start tracking UTM campaigns?
									</h2>
									<p className="text-gray-700">
										Tracking UTM campaigns is fairly simple.
										Most analytics platforms like Toolbird
										Analytics offers a straightforward way
										to track UTM parameters. To start
										tracking UTM campaigns with Toolbird
										Analytics follow these steps:
									</p>
									<ol className="text-gray-700 space-y-4">
										<li>
											<strong>
												Create an account on Toolbird:
											</strong>
											<br />
											We offer a 14 day free trial to get
											you started.{' '}
											<a
												href="https://app.toolbird.io/signup"
												className="text-main hover:text-main/70"
												target="_blank"
											>
												Register here
											</a>
										</li>
										<li>
											<strong>Add your website:</strong>
											<br />
											Add your first website and install
											the tracking code on your website.
											This will enable privacy-friendly
											tracking of your website visitors.
											Toolbird Analytics does not use
											cookies or store personal data.
										</li>
										<li>
											<strong>
												Create UTM campaign links
											</strong>
											<br />
											Use the UTM generator tool above to
											add UTM parameters to your campaign
											URLs. Toolbird Analytics will
											automatically track these parameters
											and show you the results in your
											dashboard.
										</li>
										<li>
											<strong>
												Wunderbar! You are now tracking
												UTM campaigns
											</strong>
											<br />
											You can now see the performance of
											your campaigns in real-time.
											Toolbird Analytics offers a range of
											tools to help you understand your
											audience and help you making
											user-driven decisions.
										</li>
									</ol>
								</div>
							</div>
							{FAQ_INFO.map((faq) => (
								<div className="flex gap-4" key={faq.question}>
									<div className="w-10">
										<HiQuestionMarkCircle
											fill="rgb(40 40 51)"
											size={30}
										/>
									</div>
									<div className="flex flex-col gap-2">
										<h2 className="font-semibold text-xl text-gray-800">
											{faq.question}
										</h2>
										<p className="text-gray-600">
											{faq.answer}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}
