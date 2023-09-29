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
                  Privacy{' '}
                </span>& <span className="text-gradient_blue-purple">
                  Policy{' '}
                </span>
              </div>
            </h1>
            <span className="heading3 text-gradient_blue-purple mt-12 mb-12 w-full text-start">
            This Privacy Policy describes how <span className="text-gradient_yellow-orange">LabApp.digital</span> ("<span className="text-gradient_yellow-orange">LabApp</span>," "<span className="text-gradient_yellow-orange">we</span>," "<span className="text-gradient_yellow-orange">our</span>," or "<span className="text-gradient_yellow-orange">us</span>") collects, uses, and discloses your personal information when you access and use our website. By using our website, you consent to the practices described in this <span className="text-gradient_yellow-orange">Privacy Policy</span>.
            </span>
            <div className="flex flex-col items-center">
            <ul className="flex-start mt-6 w-full flex-col gap-y-9">
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">01</p>
                <p>Information We Collect</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                <span className="text-gradient_yellow-orange">Personal Information:</span> We may collect personal information, such as your name, email address, contact information, and any other information you provide when contacting us or using our services. <br />
                <span className="text-gradient_yellow-orange">Usage Information:</span> We collect information about how you use our website, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed. <br />
                <span className="text-gradient_yellow-orange">Cookies:</span> We may use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">02</p>
                <p>How We Use Your Information</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                We may use your information for the following purposes: <br /><br />

                To provide and maintain our services. <br />
                To communicate with you, respond to inquiries, and provide customer support. <br />
                To analyze usage patterns and improve our website. <br />
                To comply with legal obligations.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">03</p>
                <p>Data Sharing</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below: <br /><br />

                We may share your information with trusted service providers who assist us in operating our website and delivering services. <br />
                We may disclose your information in response to legal requests, such as court orders or government inquiries. <br />
                We may share aggregated, non-personal information for analytical purposes.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">04</p>
                <p>Data Security</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of data transmission over the internet is entirely secure, and we cannot guarantee absolute security.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">05</p>
                <p>Your Choices</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                You can choose to opt-out of receiving promotional communications from us by following the instructions in our emails. You can also modify your browser settings to reject cookies.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">06</p>
                <p>Links to Other Websites</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                Our website may contain links to third-party websites that are not operated by us. We have no control over these external sites and are not responsible for their content or privacy practices. We encourage you to review the privacy policies of these third-party websites.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">07</p>
                <p>Children's Privacy</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                Our website is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected personal information from a child, please contact us to have it removed.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">08</p>
                <p>Changes to this Privacy Policy</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "last updated" date will be revised.
                </p>
              <li className="flex-start heading3 gap-x-3 text-white-500">
                <p className="text-gradient_yellow-orange">09</p>
                <p>Contact Information</p>
              </li>
                <p className="paragraph-regular w-full text-white-500">
                If you have questions or concerns about our Privacy Policy, please contact us at <a href="mailto:enquire@labapp.digital">enquire@labapp.digital</a>. <br /><br />

                Last Updated: 28 September 2023
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