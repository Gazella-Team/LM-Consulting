import FAQ from '.'

const questions = [
	{
		question: 'What happens if I go over the monthly plan limits?',
		answer: "We do not enforce hard caps on monthly limits for tracking website events. If you exceed your monthly limit, we will continue to monitor your website's events without interruption. Our team will then contact you to discuss upgrading your plan to better suit your tracking needs.",
	},
	{
		question: 'Is Toolbird Analytics free?',
		answer: 'Yes, we do offer a free plan. Our free plan allows you to track up to 2,500 page views per month. If you need to track more events, you can upgrade to one of our paid plans.',
	},
	{
		question:
			'What is the difference between page views and custom events?',
		answer: 'Page views are the number of times your website has been viewed. Custom events are specific actions that users take on your website, such as clicking a button or submitting a form. Custom events are events that you define and track using Toolbird Analytics. We do offer a auto-track script, but it is not enabled by default.',
	},
]

export default function PricingFAQ() {
	return <FAQ questions={questions} />
}
