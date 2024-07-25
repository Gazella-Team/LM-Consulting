import React from 'react';

export default function Cta() {
  return (
    <section className='py-24'>
      <div className='w-[90%] mx-auto max-w-7xl flex flex-col gap-6'>
        <div>
          <h1 className='text-7xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light'>Get in touch.</h1>
        </div>
        <div className='flex items-center justify-end'>
          <div className='max-w-xl flex flex-col gap-14'>
            <p className='text-2xl font-light text-gray-600'>
              LM Capital is a digital-first advisory firm designed to support companies in capital raising and private placements
              <br></br>
              <br></br>
              Our cutting-edge platform transforms the private placements / capital raising process, providing access to a vast network of over 10 million investors worldwide. Leveraging advanced data enrichment and automated outreach technologies, our platform connects with over 8,000 investors daily. Our tech-enabled approach allows us to significantly accelerate funding timelines and boost our clients' success rates.
              <br></br>
              <br></br>
              We&apos;ve gotten our clients in front of:
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

