import Image from 'next/image'
import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <>   
    <Navbar />
    <section className="flex-center paddings relative z-0">
      <div className="flex-center inner-width nav-padding flex-col">
        <div className="flex-center flex-col">
          <article className="flex-center w-fit flex-col">
            <h1 className="heading1 text-center">
              <div className="max-sm:flex-center sm:heading1 heading2 text-center max-sm:flex-col">
                <span className="text-gradient_blue-purple">
                  SPEAK WITH US{' '}
                </span>
                <p className="paragraph-regular w-full text-white-500">
                  Feel free to reach out to us with any questions, feedback, or inquiries. We are here to assist you.
                </p>
              </div>
            </h1>
            <div className="flex flex-col items-center mt-12 mb-12">
            <a href="https://t.me/RaoWay" target="_blank" rel="noopener noreferrer">
              <button
                className="gradient_blue-purple whitespace-nowrap rounded-lg px-8 py-2.5 capitalize text-white"
              >
                💬 SPEAK WITH US
              </button>
            </a>
            </div>
            <div className="flex flex-col items-center">
            <ul className="flex-start mt-6 w-full flex-col gap-y-9">
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p>Contact Information</p>
              </li>
                <p className="paragraph-regular w-full text-white-500 flex h-auto w-full items-center justify-start gap-[6px]">
                <Image
                  src="/telegram-50.svg"
                  alt="checkbox"
                  width={22}
                  height={22}
                  loading="lazy"
                />
                <span className="text-gradient_yellow-orange">Telegram:</span> <a href="https://t.me/RaoWay">@RaoWay</a>
                </p>
                <p className="paragraph-regular w-full text-white-500 flex h-auto w-full items-center justify-start gap-[6px]">
                <Image
                  src="/telegram-50.svg"
                  alt="checkbox"
                  width={22}
                  height={22}
                  loading="lazy"
                />
                <span className="text-gradient_yellow-orange">Telegram:</span> <a href="https://t.me/kuku4040">@kuku4040</a>
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p>Email Address</p>
              </li>
                <p className="paragraph-regular w-full text-white-500 flex h-auto w-full items-center justify-start gap-[6px]">
                <Image
                  src="/email.svg"
                  alt="checkbox"
                  width={22}
                  height={22}
                  loading="lazy"
                />
                <span className="text-gradient_yellow-orange">Email:</span> <a href="mailto:enquire@labapp.digital">enquire@labapp.digital</a>
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p>Message from LabApp</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                We value your feedback and inquiries. Whether you have a question about our services, want to discuss a potential project, or simply want to say hello, we'd love to hear from you. Our team is committed to providing you with the best possible assistance. <br /><br />

                If you prefer to reach out via email or phone, please use the contact details provided above.
                </p>
            </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default page