import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col">
      <p>Copyright © 2023 LabApp | All Rights Reserved</p>

      <div className="flex gap-x-9">
        <Link href="/terms-and-conditions">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>

      <div className="flex gap-x-9">
      <a href="https://twitter.com/LabAppDigital">
            <Image
              src="/twitter-500.svg"
              alt="Twitter"
              width={30}
              height={30}
              loading="lazy"
            />
          </a>
          <a href="https://t.me/LabAppDigital">
            <Image
              src="/telegram-500.svg"
              alt="Telegram"
              width={30}
              height={30}
              loading="lazy"
            />
          </a>
          <a href="https://github.com/labappdigital">
            <Image
              src="/github-500.svg"
              alt="GitHub"
              width={30}
              height={30}
              loading="lazy"
            />
          </a>
      </div>
    </footer>
  )
}

export default Footer