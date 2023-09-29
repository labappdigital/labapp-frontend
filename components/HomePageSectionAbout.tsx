import Image from 'next/image'
import React from 'react'

const HomePageSectionAbout = () => {
  return (
    <section className="flex-center paddings">
      <div className="flex-center inner-width flex-col">
        <div className="w-[95%] lg:w-[70%]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="heading2 w-full pb-10 text-center">
                Your Web3 Application Partner
            </h2>
            <div className="flex flex-col items-center">
                <p className="paragraph-regular w-full text-white-500">
                Greetings from <span className="font-bold text-white">LabApp</span>, your trusted companion in the world of web3 applications for crypto projects.
                </p>
            </div>
            <Image
              src="/labbapp-banner.svg"
              alt="LabApp"
              width={496}
              height={93}
              loading="lazy"
              className="mt-5"
            />
            <h2 className="heading2 w-full pt-[73px] text-center">
                Who We Are:
            </h2>
            <div className="flex flex-col items-center">
                <p className="paragraph-regular w-full text-white-500">
                <span className="font-bold text-white">LabApp</span> is your dedicated provider of web3 applications tailored specifically for crypto projects. We understand the unique challenges and opportunities within this space, and our mission is to empower crypto projects like yours with innovative solutions.
                </p>
            </div>
            <div className="flex-center max-w-5xl max-md:flex-col w-full lg:gap-x-16 gap-x-7 gap-y-12 mt-5">
              <Image
                src="/developers.svg"
                alt="banner"
                width={291}
                height={132}
                loading="lazy"
              />
              <Image
                src="/designers.svg"
                alt="banner"
                width={291}
                height={132}
                loading="lazy"
              />
              <Image
                src="/ui-ux.svg"
                alt="banner"
                width={291}
                height={132}
                loading="lazy"
              />
            </div>
          </div>
            <h2 className="heading2 w-full pt-[73px] text-center">
                Why Choose LabApp:
            </h2>
          <div className="flex flex-col items-center">
            <span className="heading3 text-gradient_blue-purple mt-2 w-full text-start">
                Here's why you should consider partnering with us:
            </span>
            <ul className="flex-start mt-6 w-full flex-col gap-y-9">
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">01</p>
                <p>Tailored Web3 Applications</p>
              </li>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">02</p>
                <p>Strategic Collaboration</p>
              </li>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">03</p>
                <p>Personalized Support</p>
              </li>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">04</p>
                <p>Shared Vision</p>
              </li>
            </ul>
            <p className="text-gradient_blue-green heading2 mt-[76px] flex h-auto w-full items-center justify-start gap-[20px]">
              <Image
                src="/green-checkbox.svg"
                alt="checkbox"
                width={50}
                height={50}
                loading="lazy"
              />
              You're in Sync with LabApp
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <p className="paragraph-regular mt-9 w-full text-white-500">
                <span className="font-bold text-white">LabApp</span> isn't just a product; it's a hands-on experience. It's about embracing the ethos of <span className="font-bold text-gradient_blue-purple">"Innovate. Develop. Elevate."</span> We believe that true mastery is achieved by doing—by building something from scratch, testing it, iterating, debugging, and truly owning your creations.
              <br />
              <br />
                <span className="paragraph-regular mt-5 w-full text-white-500">Our journey together is not just about learning; it's about applying that knowledge in practical ways, making a real impact, and experiencing the transformative power of web3 applications.</span>
              <br />
              <br />
                <span className="paragraph-regular mt-5 w-full text-white-500">So, join LabApp today, and let's embark on this practical journey together.</span> <span className="text-gradient_yellow-orange">Your path to progress in the world of web3 applications starts right here, with us.</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="heading3 text-gradient_blue-purple mt-8 w-full text-start">
                Innovate. Develop. Elevate.
            </span>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <Image
              src="/github-star.svg"
              alt="github star"
              width={980}
              height={202}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePageSectionAbout