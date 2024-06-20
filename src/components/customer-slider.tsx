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
      <section className="flex items-center overflow-hidden">
        <div className='flex items-center'>
          <Slider
            width="400px"
            duration={200}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v, index) => (
              <Slider.Slide key={v}>
				<div style={index % 2 === 0 ? { background: 'linear-gradient(149deg, rgba(243,237,255,1) 0%, rgba(255,255,255,1) 50%)', }:{ background: 'linear-gradient(311deg, rgba(243,237,255,1) 0%, rgba(255,255,255,1) 50%)', }} className='flex shadow-clean mb-14 shadow-main/10 flex-col gap-10 w-[500px] text-gray-800 paragraph mr-10 border rounded-2xl border-gray-600/10 p-10 py-8'>
					<p className='text-gray-600'>
					&quot;Dub.co has been a game-changer for our marketing campaigns – our links get hundreds of thousands of clicks monthly and with Dub, we are able...&quot;
					</p>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-[2px]'>
							<h3 className="font-semibold">Andreas Pedersen</h3>
							<p className='text-gray-600 font-normal text-sm'>Founder, Upboost.ai</p>
						</div>
						<img className='w-11 border border-gray-600/10 h-11 rounded-full' src='/users/user-headshots/andreas-pedersen.webp'></img>
					</div>
				</div>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
