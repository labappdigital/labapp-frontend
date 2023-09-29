import Image from 'next/image'
import React from 'react'

const HomePageSectionEntry = () => {
  return (
    <section className="flex-between nav-padding w-full max-lg:flex-col">
      <div className="max-w-[650px]">
        <h1 className="sm:heading1 xs:heading2 heading3 whitespace-pre-wrap">
          <span className="text-gradient_blue-purple">Crafting </span>
          Web3 Applications
          <span className="text-gradient_blue-purple"> for </span>
          Crypto Projects
        </h1>
        <p className="paragraph-regular text-white-400 max-w-[500px] pt-6">
            Enhancing Crypto Projects with Innovative Web3 Solutions.
        </p>
        <div className="flex w-full gap-[23px] pt-[34px] max-md:flex-col">
          <a className="relative flex h-[62px]" href="/projects">
            <div className="absolute -bottom-1 -right-1.5 z-10 flex h-[52px] w-full rounded-[5px] bg-white"></div>
            <div className="flex-center body-semibold border-black-200 bg-primary z-20 h-full w-full gap-2 rounded-[5px] border-2 px-6 py-[18px]">
              View our Projects
              <Image
                alt="arrow"
                loading="lazy"
                width={13}
                height={0}
                decoding="async"
                src="/arrow-white.svg"
              />
            </div>
          </a>
          <a className="relative flex h-[62px]" href="https://t.me/RaoWay">
            <div className="bg-black-200 absolute bottom-[-5px] right-[-8px] z-10 flex h-[52px] w-full rounded-[5px]"></div>
            <div className="flex-center body-semibold z-20 h-full w-full gap-2 rounded-[5px] bg-gradient-to-r from-[#854CFF] to-[#B573F8] px-6 py-[18px]">
              SPEAK WITH US
              <Image
                alt="arrow"
                loading="lazy"
                width={13}
                height={0}
                decoding="async"
                src="/arrow-white.svg"
              />
            </div>
          </a>
        </div>
        <p className="paragraph-regular w-full text-white-500 flex h-auto w-full items-center justify-start gap-[20px] mt-12 mb-8">
          <span className="text-gradient_yellow-orange">Socials:</span>
          <a href="https://twitter.com/LabAppDigital">
            <Image
              src="/twitter-500.svg"
              alt="Twitter"
              width={40}
              height={40}
              loading="lazy"
            />
          </a>
          <a href="https://t.me/LabAppDigital">
            <Image
              src="/telegram-500.svg"
              alt="Telegram"
              width={40}
              height={40}
              loading="lazy"
            />
          </a>
          <a href="https://github.com/labappdigital">
            <Image
              src="/github-500.svg"
              alt="GitHub"
              width={40}
              height={40}
              loading="lazy"
            />
          </a>
        </p>
      </div>
      <div className="w-full max-md:mt-10 md:max-w-[600px]">
      <Image
            alt="arrow left"
            loading="lazy"
            width="1605"
            height="1543"
            decoding="async"
            data-nimg="1"
            className="ml-2 h-1605 w-1543"
            style={{ color: 'transparent' }}
            src="/on-chain.svg"
          />
      </div>
    </section>
  )
}

export default HomePageSectionEntry