import { FaArrowRight } from "react-icons/fa6";

function GetStarted() {
  return (
    <section
      className="relative flex min-h-[412px] w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat px-[10px] lg:bg-fixed"
      style={{
        backgroundImage:
          "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/woman-meditating-at-home-in-comfortable-sportswear-2026-01-06-11-03-50-utc.jpg')",
      }}
    >

      <div className="absolute inset-0 z-0 bg-[#252A1F]/60" />


      <div className="relative z-[1] mx-auto flex w-full max-w-[1012px] flex-col items-start">
        <h2 className="mb-[35px] max-w-[600px] font-['Frank_Ruhl_Libre'] text-[40px] font-normal capitalize leading-[1.2] text-white">
          Begin Your Relaxing - Wellness Journey Don’t Wait Feel
        </h2>

        <a
          href="#"
          className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[5px] bg-white px-[20px] font-['Inter'] text-[11px] font-medium uppercase text-[#252A1F] transition-all duration-[400ms] ease-in-out hover:bg-[#866452] hover:text-white"
        >
          Get Started
          <FaArrowRight className="text-[11px]" />
        </a>
      </div>
    </section>
  );
}

export default GetStarted;