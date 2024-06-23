import Link from 'next/link'
import Slider from 'react-infinite-logo-slider'
import { cn } from 'utils/cs'

const testimonialData = [
	{
		name: "Andreas Pedersen",
		testimonial: "Dub.co has been a game-changer for our marketing campaigns, our links get hundreds of thousands of clicks monthly and with Dub, we are able.",
		image: "/users/user-headshots/andreas-pedersen.webp",
		position: "Founder, Upboost.ai",
	},
	{
		name: "Viktor Lasse",
		testimonial: "Dub.co has been a game-changer for our marketing campaigns, our links get hundreds of thousands of clicks monthly and with Dub, we are able.",
		image: "/users/user-headshots/andreas-pedersen.webp",
		position: "Founder, MatematikTutor",
	},
	{
		name: "Andreas Pedersen",
		testimonial: "Dub.co has been a game-changer for our marketing campaigns, our links get hundreds of thousands of clicks monthly and with Dub, we are able.",
		image: "/users/user-headshots/andreas-pedersen.webp",
		position: "Founder, Upboost.ai",
	},
	{
		name: "Viktor Lasse",
		testimonial: "Dub.co has been a game-changer for our marketing campaigns, our links get hundreds of thousands of clicks monthly and with Dub, we are able.",
		image: "/users/user-headshots/andreas-pedersen.webp",
		position: "Founder, MatematikTutor",
	},
	{
		name: "Viktor Lasse",
		testimonial: "Dub.co has been a game-changer for our marketing campaigns, our links get hundreds of thousands of clicks monthly and with Dub, we are able.",
		image: "/users/user-headshots/andreas-pedersen.webp",
		position: "Founder, MatematikTutor",
	},
]

export default function CustomerSlider() {
    return (
      <section className="flex items-center overflow-hidden">
        <div className='flex items-center'>
          <Slider
            width="400px"
            duration={30}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={"#fff"}
          >
            {testimonialData.map((testimonial, index) => (
              <Slider.Slide key={testimonial.name}>
				<div style={index % 2 === 0 ? { background: 'linear-gradient(149deg, rgba(243,237,255,1) 0%, rgba(255,255,255,1) 50%)', }:{ background: 'linear-gradient(311deg, rgba(243,237,255,1) 0%, rgba(255,255,255,1) 50%)', }} className='flex shadow-clean mb-14 shadow-main/10 flex-col gap-10 w-[500px] text-gray-800 paragraph mr-10 border rounded-2xl border-gray-600/10 p-10 py-8'>
					<p className='text-gray-600'>
					&quot;{testimonial.testimonial}&quot;
					</p>
					<div className='flex items-center justify-between'>
						<div className='flex flex-col gap-[2px]'>
							<h3 className="font-semibold">{testimonial.name}</h3>
							<p className='text-gray-600 font-normal text-sm'>{testimonial.position}</p>
						</div>
						<img className='w-11 border border-gray-600/10 h-11 rounded-full' src={testimonial.image}></img>
					</div>
				</div>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
