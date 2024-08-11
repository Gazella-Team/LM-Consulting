import React from 'react';
import { RevealLight } from './Animations/RevealLight';

const TeamData = [
    {
        headline: "Fractionalize the Investor Relations Process",
        description: "Concentrate on strategic growth while we manage research, outreach, presentation decks, financial models, etc allowing you to focus on your core competence."
    },
    {
      headline: "Accelerate your Fundraise",
      description: "Investors review hundreds of opportunities daily. Allow LM Capital to automate your outreach, ensuring your fundraising efforts are robust and effectively positioned to succeed in a competitive market."
    },
    {
      headline: "Identify Optimal Investors",
      description: "Strategic capital drives success. We will pinpoint, target, and engage investors who can serve as strategic partners for your company's next growth phase."
    },
    {
      headline: "Collaborative Guidance",
      description: "We will guide you along the entire process, taking investor meetings with you and providing constant iterations until the funding closes."
    },
]

export default function WhyUs() {
  return (
    <>
      <section className='py-32 hidden lg:block'>
        <div className='w-[90%] mx-auto max-w-7xl grid grid-cols-2 gap-6'>
          <div className='sticky top-20 col-span-1 hidden self-start sm:block'>
            <h1 className='text-7xl tracking-tighter max-w-sm times-new-font heading leading-[100%] font-light'>How We Empower your Fundraise.</h1>
          </div>
          <div className='flex items-center w-full justify-end'>
            <div className='flex flex-col gap-14'>
              <RevealLight delayTime={0.4}>
                <p className='text-2xl font-light text-gray-600'>Raising capital demands full-time attention and we recognize that your primary responsibility is growing your business.</p>
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
            <h1 className='text-6xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-bold'>How We Empower your Fundraise</h1>
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