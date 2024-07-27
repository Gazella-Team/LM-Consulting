import React from 'react';
import { RevealLight } from './Animations/RevealLight';

const TrackRecordData = [
  {
      image: "/track-record/goldman-sachs.svg",
      size: "w-24"
  },
  {
      image: "/track-record/blackrock.png",
      size: "w-32"
  },
  {
      image: "/track-record/volvo.png",
      size: "w-32"
  },
  {
      image: "/track-record/psg.png",
      size: "w-20"
  },
  {
    image: "/track-record/shell-ventures.png",
    size: "w-60"
  },
  {
    image: "/track-record/sge.svg",
    size: "w-40"
  },
]

export default function About() {
  return (
    <>
    <section className='py-32 hidden lg:block'>
      <div className='w-[90%] mx-auto max-w-7xl grid grid-cols-2 gap-6'>
        <div className='sticky top-20 col-span-1 hidden self-start sm:block'>
          <h1 className='text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light'>About us.</h1>
        </div>
        <div className='flex items-center justify-end'>
          <div className='flex flex-col gap-14'>
            <p className='text-2xl font-light text-gray-600'>
              LM Capital is a digital-first advisory firm designed to support companies in capital raising and private placements
              <br></br>
              <br></br>
              Our cutting-edge platform transforms the private placements / capital raising process, providing access to a vast network of over 10 million investors worldwide. Leveraging advanced data enrichment and automated outreach technologies, our platform connects with over 8,000 investors daily. Our tech-enabled approach allows us to significantly accelerate funding timelines and boost our clients&apos; success rates.
              <br></br>
              <br></br>
              We&apos;ve gotten our clients in front of:
            </p>
            <div className='grid grid-cols-3 items-center gap-14 max-w-md'>
              {TrackRecordData.map((v, index) => <RevealLight key={v.image} delayTime={index/80}><img className={v.size} src={v.image}></img></RevealLight>)}
            </div>
            <p className='text-2xl font-light text-gray-600'>
              Our results at a glance:
            </p>
            <div className='grid grid-cols-3 items-center gap-14 max-w-lg'>
              <div>
                <h2 className='text-6xl font-semibold times-new-font'>8</h2>
                <p className='font-light text-gray-600'>Figure term sheets</p>
              </div>
              <div>
                <h2 className='text-6xl font-semibold times-new-font'>90</h2>
                <p className='font-light text-gray-600'>Days average raise</p>
              </div>
              <div>
                <h2 className='text-6xl font-semibold times-new-font'>100+</h2>
                <p className='font-light text-gray-600'>Countries. Global coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='py-32 block lg:hidden'>
      <div className='w-[90%] mx-auto max-w-7xl flex flex-col gap-6'>
        <div>
          <h1 className='text-5xl tracking-tighter times-new-font heading leading-[100%] font-light'>About LM Capital.</h1>
        </div>
        <div>
          <div className='flex flex-col gap-14'>
            <p className='text-xl font-light text-gray-600'>
              LM Capital is a digital-first advisory firm designed to support companies in capital raising and private placements
              <br></br>
              <br></br>
              Our cutting-edge platform transforms the private placements / capital raising process, providing access to a vast network of over 10 million investors worldwide. Leveraging advanced data enrichment and automated outreach technologies, our platform connects with over 8,000 investors daily. Our tech-enabled approach allows us to significantly accelerate funding timelines and boost our clients&apos; success rates.
              <br></br>
              <br></br>
              We&apos;ve gotten our clients in front of:
            </p>
            <div className='grid grid-cols-3 items-center gap-14 max-w-md'>
              {TrackRecordData.map((v, index) => <RevealLight key={v.image} delayTime={index/80}><img className={v.size} src={v.image}></img></RevealLight>)}
            </div>
            <p className='text-xl font-light text-gray-600'>
              Our results at a glance:
            </p>
            <div className='grid grid-cols-3 items-center gap-14 max-w-lg'>
              <div>
                <h2 className='text-6xl font-semibold times-new-font'>8</h2>
                <p className='font-light text-gray-600'>Figure term sheets</p>
              </div>
              <div>
                <h2 className='text-6xl font-semibold times-new-font'>90</h2>
                <p className='font-light text-gray-600'>Days average raise</p>
              </div>
              <div>
                <h2 className='text-6xl font-semibold times-new-font'>100+</h2>
                <p className='font-light text-gray-600'>Countries. Global coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

