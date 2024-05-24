import Link from 'next/link'
import CustomerSlider from '../customer-slider'

export default function Cta() {
	return (
		<section className='py-16 relative'>
			<div className='flex items-center justify-center'>
				<div className="absolute top-[100px] h-[500px] w-[700px] overflow-hidden -z-1" style={{background: "radial-gradient(circle, rgba(94,23,235,0.12552958683473385) 0%, rgba(255,255,255,0) 62%)"}}></div>
			</div>
			<div className='w-[86%] mx-auto max-w-6xl mb-20 text-center'>
				<h2 className='text-[40px] md:text-[50px] xl:text-[55px] leading-[110%] max-w-[600px] mb-4 mx-auto font-black text-gray-800'><span className='bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text'>Supercharge </span> your SaaS development today</h2>
				<p className="text-base md:text-lg xl:text-lg paragraph max-w-[350px] mx-auto text-gray-600">
				We offer plans that suit any project. Start for free today, no credit card required.
				</p>
				<div className="flex items-center paragraph relative justify-center gap-3 mt-6 font-medium">
						<Link
							href={'/'}
							className="bg-main border border-main text-white text-sm px-6 py-2 rounded-full"
						>
							Join waitlist
						</Link>
						<Link
							className=" bg-gray-800 border-gray-800 text-white text-sm px-6 py-2 rounded-full hover:bg-main hover:border-main hover:text-white transition-all"
							href={''}
						>
							View features
						</Link>
					</div>
			</div>
			<CustomerSlider />
		</section>
	)
}
