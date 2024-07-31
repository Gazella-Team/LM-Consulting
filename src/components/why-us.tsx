import React from 'react';
import { RevealLight } from './Animations/RevealLight';

const TeamData = [
    {
        image: "/team/liban-mohamed.webp",
        name: "Liban Mohamed",
        position: "Founder"
    },
    {
        image: "/team/liban-mohamed.webp",
        name: "Liban Mohamed",
        position: "Founder"
    },
    {
        image: "/team/liban-mohamed.webp",
        name: "Liban Mohamed",
        position: "Founder"
    },
    {
        image: "/team/liban-mohamed.webp",
        name: "Liban Mohamed",
        position: "Founder"
    },
]

export default function WhyUs() {
  return (
    <>
      <section className='py-32 hidden lg:block'>
        <div className='w-[90%] mx-auto max-w-7xl grid grid-cols-2 gap-6'>
          <div className='sticky top-20 col-span-1 hidden self-start sm:block'>
            <h1 className='text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light'>What we can do for you</h1>
          </div>
          <div className='flex items-center w-full justify-end'>
            <div className='flex flex-col gap-14'>
              <RevealLight delayTime={0.4}>
                <p className='text-2xl font-light text-gray-600'>LM Capital boasts a best-in-class team with an exceptional track record. Our unique blend of modern growth strategies, direct response marketing expertise, investor relations acumen, and exclusive access to top-tier investors ensures unparalleled success for our clients.</p>
              </RevealLight>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8'>
                  {TeamData.map((member) => <WhyCard key={member.name} member={member} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 block lg:hidden'>
        <div className='w-[90%] mx-auto max-w-7xl flex flex-col gap-6'>
          <div>
            <h1 className='text-6xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-bold'>Our team.</h1>
          </div>
          <div className='flex items-center w-full justify-end'>
            <div className='flex flex-col gap-14'>
              <p className='text-xl font-light text-gray-600'>LM Capital boasts a best-in-class team with an exceptional track record. Our unique blend of modern growth strategies, direct response marketing expertise, investor relations acumen, and exclusive access to top-tier investors ensures unparalleled success for our clients.</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8'>
                  {TeamData.map((member) => <WhyCard key={member.name} member={member} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

const WhyCard = ({member}:{member:any}) => {
    return (
      <RevealLight delayTime={0.4}>
        <div className='flex flex-col gap-4'>
            <img alt={member.image} className='w-full lg:h-[250px] lg:w-[250px] object-cover' src={member.image}></img>
            <div className='flex flex-col'>
              <h2 className='text-black font-normal'>{member.name}</h2>
              <p className='text-gray-600 font-light text-sm'>{member.position}</p>
            </div>
        </div>
      </RevealLight>
    )
}