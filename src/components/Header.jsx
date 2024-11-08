
export default function Header() {
  return (
    <div className="flex flex-col w-[1440px] h-20 items-center justify-center px-16 py-0 absolute top-0 left-[666px] bg-white">
    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex items-start relative flex-[0_0_auto]">
        <div className="relative w-[143px] h-[30px]">
          <img
            className="absolute w-[30px] h-[30px] top-0 left-0"
            alt="Logo"
            src="https://c.animaapp.com/RjXRgyF6/img/logo-1-1.svg"
          />

          <div className="absolute top-0.5 left-[35px] [font-family:'Roboto',Helvetica] font-medium text-[#020202] text-base tracking-[0.32px] leading-6 whitespace-nowrap">
            B2Boutsource
          </div>
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-8 relative flex-[0_0_auto]">
        <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#222222] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
            About Us
          </div>

          <div className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#222222] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
            Services
          </div>

          <div className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#222222] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
            Contact
          </div>

          <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[#222222] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
              More
            </div>

            <img
              className="relative w-6 h-6"
              alt="Chevron down"
              src="https://c.animaapp.com/RjXRgyF6/img/chevron-down-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
