
export default function Footer() {
  return (
    <div className="absolute w-[1440px] h-[258px] top-[8222px] left-0 bg-[#73543d]">
    <div className="flex flex-col w-[1312px] items-center gap-8 absolute top-[180px] left-16">
      <div className="relative self-stretch w-full h-px bg-[#eeeeee] border border-solid border-[#eeeeeeee]" />

      <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
        <div className="inline-flex items-start gap-6 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-white text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
            Privacy Policy
          </div>

          <div className="relative w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-white text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
            Terms of Service
          </div>

          <div className="relative w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-white text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
            Cookies Settings
          </div>
        </div>
      </div>
    </div>

    <div className="flex w-[1312px] items-center gap-8 absolute top-20 left-16">
      <img
        className="relative flex-1 grow"
        alt="Logo"
        src="https://c.animaapp.com/RjXRgyF6/img/logo-2.svg"
      />

      <div className="inline-flex items-start gap-10 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
          About Us
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
          Services
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
          Category
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
          Contact us
        </div>

        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
          Blog
        </div>
      </div>

      <img
        className="relative flex-1 grow"
        alt="Social links"
        src="https://c.animaapp.com/RjXRgyF6/img/social-links-1.svg"
      />
    </div>
  </div>
  )
}
