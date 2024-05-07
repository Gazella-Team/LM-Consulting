import axios from 'axios'

export default function TestPage() {
	async function test() {
		await axios
			.post('https://api.toolbird.io/v1/event', {
				url: document.location.href,
				referrer: document.referrer,
				screen: `${window.screen.width}x${window.screen.height}`,
				language: navigator.language,
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div>
			<h1>Test Page</h1>
			<button
				className="bg-blue-500 text-white rounded p-4"
				onClick={test}
			>
				Track Page View
			</button>
		</div>
	)
}
