import Link from 'next/link';
import React from 'react';
import { cn } from 'utils/cs';
import { RevealLight } from '../Animations/RevealLight';

export default function Cta() {
  return (
    <>
      <section className='py-32 pt-10 hidden lg:block'>
        <div className='w-[90%] mx-auto text-center flex flex-col gap-6 max-w-7xl'>
          <h1 className='text-6xl tracking-tighter times-new-font heading leading-[100%] font-bold'>Contact us.</h1>
          <RevealLight delayTime={0.4}>
                  <p className='text-xl max-w-xl mx-auto font-light text-gray-600'>We&apos;sre here to assist with any questions or concerns you may have.
                    Reach out to us via email or phone for prompt support.
                  </p>
              </RevealLight>
              <div className="flex mx-auto mt-5">
                <RevealLight delayTime={0.4}>
                  <Link
                  className="border mx-auto hover:bg-black hover:text-white transition-all px-5 py-2 rounded-md border-gray-600/40 font-normal text-base"
                  href="https://cal.com/libanm94"
                  target='_blank'
                >
                  Schedule a Consultation
                </Link>
                </RevealLight>
					  </div>
        </div>
      </section>

      <section className='py-20 block lg:hidden'>
        <div className='w-[90%] mx-auto max-w-7xl flex flex-col gap-6'>
          <div>
            <h1 className='text-6xl tracking-tighter max-w-3xl times-new-font heading leading-[100%] font-light'>Contact us.</h1>
          </div>
          <div className='flex items-center w-full justify-end'>
            <div className='flex flex-col gap-14'>
              <div>
                <RevealLight delayTime={0.4}>
                  <p className='text-xl font-light text-gray-600'>We&apos;sre here to assist with any questions or concerns you may have.
                    Reach out to us via email or phone for prompt support.
                    Our team is dedicated to providing exceptional customer service.
                    Visit us in person for a more personalized experience.
                    Your satisfaction is our top priority.
                  </p>
                </RevealLight>
              </div>
              <div className="flex">
                <RevealLight delayTime={0.4}>
                  <Link
                  className="border hover:bg-black hover:text-white transition-all px-5 py-2 rounded-md border-gray-600/40 font-normal text-base"
                  href="/"
                >
                  Get in touch
                </Link>
                </RevealLight>
					  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

