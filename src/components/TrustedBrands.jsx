
const logos = [
  {
    name: "AlphaWave",

    src: "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/Logo5.png",
  },
  {
    name: "Kintsugi",

    src: "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/Logo3.png",
  },
  {
    name: "45 Degrees",
    src: "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/Logo2.png",
  },
  {
    name: "Boltshift",

    src: "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/Logo1.png",
  },
  {
    name: "Acme Corp",
    src: "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/Logo4.png",
  },
];

function TrustedBrands() {
  return (
    <section className="w-full bg-[#F4EFEC] pt-[50px] pb-0">
      <div className="mx-auto flex max-w-[1290px] flex-col items-center gap-8 px-6 md:flex-row md:gap-0 md:px-0">


        <div className="w-full shrink-0 md:w-[250px]">
          <h2 className="font-['Inter'] text-[18px] font-medium leading-[1.25] text-[#252A1F]">
            We team up with trusted
            <br />
            brands and experts
          </h2>
        </div>


        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-8 md:flex-nowrap md:justify-start md:gap-x-[80px]">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex w-[131.7px] shrink-0 items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-auto w-[131.7px] object-contain opacity-45 grayscale transition-[filter,opacity] duration-300 group-hover:brightness-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBrands;
