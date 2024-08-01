import React from 'react';
import { RevealLight } from './Animations/RevealLight';

const TeamData = [
    {
        headline: "Outsource the Tedious",
        description: "Focus on your growth while we do the prep, research, outreach, and intros so you can keep doing what you do best."
    },
    {
      headline: "Raise faster",
      description: "Investors see hundreds of deals per day. Let LM Capital put your outreach on auto-pilot to ensure that your fundraising machine is formidable and that you're winning the numbers game."
    },
    {
      headline: "Find the right investor",
      description: "Smart money wins. We'll identify, target, and engage investors that are strategic partners for the next phase of your company."
    },
    {
      headline: "Data Room done right",
      description: "Partner with us to get your company valuation, deck, projections, and financial models in order."
    },
]

export default function WhyUs() {
  return (
    <>
      <section className='py-32 hidden lg:block'>
        <div className='w-[90%] mx-auto max-w-7xl grid grid-cols-2 gap-6'>
          <div className='sticky top-20 col-span-1 hidden self-start sm:block'>
            <h1 className='text-7xl tracking-tighter max-w-sm times-new-font heading leading-[100%] font-light'>What we can do for you</h1>
          </div>
          <div className='flex items-center w-full justify-end'>
            <div className='flex flex-col gap-14'>
              <RevealLight delayTime={0.4}>
                <p className='text-2xl font-light text-gray-600'>Raising capital is a full-time job and we understand that you already have a full-time job, which is growing your business.</p>
              </RevealLight>
              <div className='grid grid-cols-1 gap-16'>
                  {TeamData.map((member, index) => <WhyCard count={index} key={member.headline} member={member} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 block lg:hidden'>
        <div className='w-[90%] mx-auto max-w-7xl flex flex-col gap-6'>
          <div>
            <h1 className='text-6xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-bold'>How we help</h1>
          </div>
          <div className='flex items-center w-full justify-end'>
            <div className='flex flex-col gap-14'>
              <p className='text-xl font-light text-gray-600'>LM Capital boasts a best-in-class team with an exceptional track record. Our unique blend of modern growth strategies, direct response marketing expertise, investor relations acumen, and exclusive access to top-tier investors ensures unparalleled success for our clients.</p>
              <div className='grid grid-cols-1 gap-8'>
                  {TeamData.map((member, index) => <WhyCard count={index} key={member.headline} member={member} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

const WhyCard = ({member, count}:{member:any, count:number}) => {
    return (
      <RevealLight delayTime={0.4}>
        <div className='flex items-center gap-4'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-black times-new-font text-2xl font-extrabold'>{count + 1}.{" "}  
                {member.headline}</h2>
              <p className='text-gray-600 max-w- font-light text-xl'>{member.description}</p>
            </div>
        </div>
      </RevealLight>
    )
}