import Image from 'next/image'
import React from 'react';

const HomePageSectionLabApp = () => {
  return (
    <section className="flex-center paddings relative z-0">
      <div className="flex-center hero-circle absolute top-[-150px] z-[-1] h-full w-full overflow-hidden">
        <svg viewBox="0 0 1194 1192" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <circle cx="596" cy="596" r="594.5" stroke="url(#paint0_linear_1147_785)" stroke-width="3"></circle>
            <circle cx="64" cy="335" r="10" fill="url(#paint1_linear_1147_785)"></circle>
            <circle cx="187" cy="1029" r="10" fill="url(#paint2_linear_1147_785)"></circle>
            <circle cx="1184" cy="684" r="10" fill="url(#paint3_linear_1147_785)"></circle>
          </g>
          <defs>
            <linearGradient id="paint0_linear_1147_785" x1="27.8649" y1="603.544" x2="1201.29" y2="603.544" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CA5FF"></stop>
              <stop offset="1" stop-color="#B673F8"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_1147_785" x1="54.4675" y1="335.127" x2="74.1558" y2="335.127" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CA5FF"></stop>
              <stop offset="1" stop-color="#B673F8"></stop>
            </linearGradient>
            <linearGradient id="paint2_linear_1147_785" x1="177.468" y1="1029.13" x2="197.156" y2="1029.13" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CA5FF"></stop>
              <stop offset="1" stop-color="#B673F8"></stop>
            </linearGradient>
            <linearGradient id="paint3_linear_1147_785" x1="1174.47" y1="684.127" x2="1194.16" y2="684.127" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4CA5FF"></stop>
              <stop offset="1" stop-color="#B673F8"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex-center inner-width nav-padding flex-col">
        <div className="flex-center flex-col">
          <article className="flex-center w-fit flex-col">
            <h1 className="heading1 text-center">
              <div className="max-sm:flex-center sm:heading1 heading2 text-center max-sm:flex-col">
                Skyrocket your{' '}
                <span className="text-gradient_blue-purple">
                  Crypto <br /> Project{' '}
                </span>
                today! 🚀
              </div>
            </h1>
            <div className="paragraph-regular mt-5 w-full text-center text-white-500 sm:w-[70%]">
              <div className="rounded-md bg-black-200">
                <h1 className="base-regular mt-7 px-8 py-5 text-center text-white-800">
                LabApp, a web3 development consortium, empowers individuals and projects with user-friendly design and exceptional programming.
                </h1>
              </div>
            </div>
            <div className="paragraph-regular mt-5 w-full text-center text-white-500 sm:w-[70%]"></div>
          </article>
          <section className="mt-9 flex flex-col flex-wrap items-center justify-center xs:flex-row">
          <Image
            alt="all tools"
            src="/all_tools.svg"
            width={820}
            height={60}
            layout="responsive"
            objectFit="contain"
            quality={75}
          />
          </section>
        </div>
      </div>
    </section>
  );
};

export default HomePageSectionLabApp;
