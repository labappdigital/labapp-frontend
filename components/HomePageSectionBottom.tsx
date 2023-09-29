import Image from 'next/image'
import React from 'react';

const HomePageSectionBottom = () => {
  return (
    <section className="paddings">
      <div className="flex-center paddings inner-width frame w-full max-w-[900px] flex-col px-0 py-16 xs:px-8 3xl:min-h-[600px] 3xl:max-w-[1000px]">
        <div className="sm-box sm-box-1 bg-black-400"></div>
        <div className="sm-box sm-box-2 bg-black-400"></div>
        <div className="sm-box sm-box-3 bg-black-400"></div>
        <div className="sm-box sm-box-4 bg-black-400"></div>
        <div className="sm-box sm-box-5 bg-black-400"></div>
        <div className="sm-box sm-box-6 bg-black-400"></div>
        <div className="sm-box sm-box-7 bg-black-400"></div>
        <div className="sm-box sm-box-8 bg-black-400"></div>
        <article className="mb-5 flex items-center justify-center text-center">
          <p className="text-gradient_yellow-orange mr-2 flex self-center text-[14px] font-semibold uppercase leading-[20px] tracking-[2px]">
            Your Partner in Web3 Innovation
          </p>
        </article>
        <h2 className="heading1 mt-4 text-center">Still not sure if it's right for you?</h2>
        <p className="paragraph-regular mt-10 w-full text-center text-white-500 sm:w-[80%]">
          LabApp is your go-to solution for web3 applications tailored specifically for crypto projects. We're all about fostering collaboration, and we've got some compelling reasons for you to consider teaming up with us.
        </p>
        <p className="paragraph-regular mt-6 w-[100%] text-center text-white-500 sm:w-[80%]">
          Here's why you should choose LabApp:
        </p>
            <p className="text-sm mt-2 mb-2 w-[100%] text-left text-white-500 sm:w-[90%]"><strong>Innovative Solutions:</strong> Our web3 applications are designed to take your crypto project to the next level. Whether it's improving user experiences or streamlining your platform, we've got the tools you need.</p>
            <p className="text-sm mt-2 mb-2 w-[100%] text-left text-white-500 sm:w-[90%]"><strong>Strategic Partnerships:</strong> When you partner with LabApp, you gain access to a network of industry experts and fellow innovators. We'll connect you with the right people to help drive your project forward.</p>
            <p className="text-sm mt-2 mb-2 w-[100%] text-left text-white-500 sm:w-[90%]"><strong>Personalized Support:</strong> Your success is our top priority. We offer customized support to ensure our solutions align perfectly with your project's specific goals and requirements.</p>
            <p className="text-sm mt-2 mb-2 w-[100%] text-left text-white-500 sm:w-[90%]"><strong>Shared Vision:</strong> We're more than just a service provider – we're a dedicated partner invested in your success. Your success story is our success story. Let's collaborate and make waves in the crypto space together.</p>
        <p className="paragraph-regular mt-6 w-[100%] text-center text-white-500 sm:w-[80%]">
          LabApp isn't just a product; it's a catalyst for transformation. Join us on this exciting journey as we work together to shape the future of web3. Your journey toward success starts right here.
        </p>
        <a href="https://t.me/RaoWay" target="_blank" rel="noopener noreferrer">
        <button
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 flex-center mt-10 h-fit rounded-full bg-[#2190ff] px-6 py-4"
          type="button"
          aria-haspopup="dialog"
          aria-expanded=""
          aria-controls="radix-:rr:"
          data-state="closed"
        >
          <p className="text-[14px] font-semibold leading-[16px] text-white">SPEAK WITH US</p>
          <Image
            alt="arrow left"
            loading="lazy"
            width="16"
            height="16"
            decoding="async"
            data-nimg="1"
            className="ml-2 h-4 w-4"
            style={{ color: 'transparent' }}
            src="/arrow-white.svg"
          />
        </button>
        </a>
      </div>
    </section>
  );
};

export default HomePageSectionBottom;
