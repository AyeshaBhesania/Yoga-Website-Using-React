function VideoSection() {
  return (
    <section className="w-full px-5 relative z-[1] -mb-[200px]">
      <div
        className="relative mx-auto flex h-[360px] max-w-[1290px] items-center justify-center overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{
          backgroundImage:
            "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/above-view-of-woman-meditating-in-yoga-studio-2026-01-06-10-30-36-utc.jpg')",
        }}
      >

        <div className="absolute inset-0 z-0 bg-black/40" />


        <div className="relative z-[1] flex h-[240px] w-full max-w-[1170px] flex-col items-center justify-center px-[10px]">
          <h2 className="mb-[30px] max-w-[550px] text-center font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-white">
            Where Serenity Inspires Every Movement
          </h2>

          <a
            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
            target="_blank"
            rel="noreferrer"
            aria-label="Play video"
            className="group relative z-[6] flex h-[80px] w-[80px] items-center justify-center rounded-full border border-white/20 bg-white/[0.28] font-['Inter'] text-[18px] text-[#252A1F] transition-all duration-300 ease-in-out hover:bg-[#866452] hover:text-white"
          >
            <span className="relative z-[2]">Play</span>
            <span className="pointer-events-none absolute inset-0 rounded-full border border-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;