import Link from 'next/link'
import CustomerSlider from '../customer-slider'

export default function Cta() {
	return (
		<section className='py-16 mt-24 pb-0 relative'>
			<div className='w-[86%] relative mx-auto max-w-6xl mb-20 text-center'>
				<h2 className='text-[40px] md:text-[50px] xl:text-[55px] leading-[110%] max-w-[600px] mb-4 mx-auto font-bold text-gray-800'><span className='bg-gradient-to-r from-main via-violet-700 to-main text-transparent bg-clip-text'>Supercharge </span> your SaaS development today</h2>
				<p className="text-base md:text-lg xl:text-lg paragraph max-w-[350px] mx-auto text-gray-600">
					Increase your project overview today with the ultimate toolbox for SaaS developers. 
				</p>
				<div className="flex items-center paragraph relative justify-center gap-3 mt-8 font-medium">
						<Link
							target='_blank'
							href={'https://cal.com/lasseosmann/toolbird-demo'}
							className="bg-main border-[3px] border-main font-normal text-sm text-white px-4 py-1 rounded-full"
						>
							Book a free demo
						</Link>
						<Link
							className=" bg-gray-800 border-[3px] border-gray-800 font-normal text-sm text-white px-4 py-1 rounded-full"
							href={'analytics'}
						>
							View features
						</Link>
					</div>
			</div>
		</section>
	)
}
