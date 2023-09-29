import Image from 'next/image'
import React from 'react'

const HomePageSectionProcess = () => {
  return (
    <section className="flex-center inner-width paddings mt-24 flex-col">
      <div className="flex-center relative min-h-[424px] w-full flex-col max-lg:py-4">
        <Image
          className="z-0 rounded-xl object-fill"
          alt="background"
          src="/wave-bg.webp"
          layout="fill"
          objectFit="cover"
          quality={75}
        />
        <p className="heading3 z-10 px-5 text-center">Start Your Project Development</p>
        <div className="flex-center z-10 flex-col gap-x-2 gap-y-6 pt-[38px] max-lg:px-6 lg:flex-row">
          <p className="body-regular rounded-[40px] bg-black-400 px-5 py-2.5 text-center text-white-800">
          15-Minute Request
          </p>
          <Image
            alt="arrow right"
            src="/gradient-arrow-right.svg"
            width={28}
            height={28}
          />
          <p className="body-regular rounded-[40px] bg-black-400 px-5 py-2.5 text-center text-white-800">
          Planning
          </p>
          <Image
            alt="arrow right"
            src="/gradient-arrow-right.svg"
            width={28}
            height={28}
          />
          <p className="body-regular rounded-[40px] bg-black-400 px-5 py-2.5 text-center text-white-800">
          Testing
          </p>
          <Image
            alt="arrow right"
            src="/gradient-arrow-right.svg"
            width={28}
            height={28}
          />
          <p className="body-regular rounded-[40px] bg-black-400 px-5 py-2.5 text-center text-white-800">
          Take-Home App
          </p>
          <Image
            alt="arrow right"
            src="/gradient-arrow-right.svg"
            width={28}
            height={28}
          />
          <p className="body-regular rounded-[40px] bg-black-400 px-5 py-2.5 text-center text-white-800">
          Explore Transformation
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 flex-center paragraph-semibold gradient_blue-purple z-10 mt-11 h-fit rounded-full px-[66px] py-[14px]"
          type="button"
          aria-haspopup="dialog"
          aria-expanded=""
          aria-controls="radix-:ri:"
          data-state="closed"
        >
          <a href="https://t.me/RaoWay" target="_blank" rel="noopener noreferrer">SPEAK WITH US</a>
        </button>
      </div>
    </section>
  )
}

export default HomePageSectionProcess