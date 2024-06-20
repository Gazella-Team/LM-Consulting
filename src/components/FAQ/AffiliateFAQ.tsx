import FAQ from '.'

const questions = [
	{
		question: 'What are the commision rates?',
		answer: "We do not enforce hard caps on monthly limits for tracking website events. If you exceed your monthly limit, we will continue to monitor your website's events without interruption. Our team will then contact you to discuss upgrading your plan to better suit your tracking needs.",
	},
	{
		question: 'Is there a limit on how much i can make as a Toolbird Affiliate?',
		answer: 'Yes, we do offer a free plan. Our free plan allows you to track up to 2,500 page views per month. If you need to track more events, you can upgrade to one of our paid plans.',
	},
]

export default function AffiliateFAQ() {
	return <FAQ questions={questions} />
}
