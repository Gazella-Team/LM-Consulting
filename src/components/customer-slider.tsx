import Link from 'next/link'
import Slider from 'react-infinite-logo-slider'
import { cn } from 'utils/cs'

const imageData = [
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},
	{
		path: '/users/burst.svg',
		website: 'https://burstcreators.com/',
		size: 'w-[150px]',
	},

]

export default function CustomerSlider() {
	return (
		<section
			className=" bg-white max-w-7xl mx-auto lg:rounded-[100px] backdrop:blur-3xl"
		>
			<div>
				<Slider
					width="300px"
					duration={70}
					pauseOnHover={false}
					blurBorders={true}
					blurBoderColor={'#fff'}
				>
					{imageData.map((v) => (
						<Slider.Slide key={v}>
							<img className='w-[200px]' src={v.path}></img>
						</Slider.Slide>
					))}
				</Slider>
			</div>
		</section>
	)
}
