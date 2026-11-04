
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";

const heroImages = [
  "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/woman-meditating-calmly-with-hands-raised-in-studi-2026-01-08-05-32-07-utc.jpg",

  "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/woman-doing-yoga-in-warm-cozy-room-2026-01-23-16-29-40-utc.jpg",

  "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/07/woman-meditating-on-yoga-mat-in-modern-home-2026-01-08-22-30-59-utc.jpg",
];

const profiles = [
  "smiling-teen-with-long-hair-posing-in-studio-2026-01-08-22-30-37-utc.jpg",
  "studio-shot-of-a-happy-and-handsome-man-laughing-a-2026-01-09-09-23-06-utc.jpg",
  "radiant-woman-smiling-with-dark-hair-on-grey-2026-03-25-05-26-02-utc.jpg",
];

const profileBase =
  "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/";

function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[730px] items-center overflow-hidden bg-[#252A1F] text-white"
    >
      {/* Background slideshow */}
      <div
        key={activeImage}
        className="absolute inset-0 animate-hero-zoom bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroImages[activeImage]}')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(20,25,19,0.48)]" />

      {/* Main heading and buttons */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-5 pt-6">
        <h1 className="max-w-[850px] font-serif text-5xl leading-[1.12] md:text-[80px]">
          Restore Balance
          <br />
          Renew Your Spirit
        </h1>

        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="#about"
            className="flex items-center gap-3 rounded-[5px] bg-[#866452] px-7 py-4 text-sm font-medium uppercase text-white transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Unwind With Us
            <FaArrowRight size={14} />
          </a>

          <a
            href="#classes"
            className="flex items-center gap-3 rounded-[5px] bg-white px-7 py-4 text-sm font-medium uppercase text-[#252A1F] transition-colors duration-300 hover:bg-[#866452] hover:text-white"
          >
            Discover Our Classes
            <FaArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Bottom left: Profiles and supported members */}
      <div className="absolute bottom-8 left-8 z-10 flex items-center gap-4">
        <div className="flex items-center">
          {profiles.map((profile) => (
            <img
              key={profile}
              src={profileBase + profile}
              alt="Flowra member"
              className="-ml-3 h-12 w-12 rounded-full border-2 border-white object-cover first:ml-0"
            />
          ))}

          <a
            href="#about"
            aria-label="Learn more"
            className="group -ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#252A1F] transition-colors duration-300 hover:bg-[#866452] hover:text-white"
          >
            <FaArrowRight
              size={18}
              className="rotate-[-45deg] transition-transform duration-300 group-hover:rotate-0"
            />
          </a>
        </div>

        <div className="text-md leading-6 text-white">
          <strong>1.5K+</strong> people supported on
          <br />
          their wellness journey
        </div>
      </div>

      {/* Bottom right: Social icons */}
      <div className="absolute bottom-9 right-8 z-10 flex gap-3">
        <a
          href="#contact"
          aria-label="Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#ffffff38] bg-[#ffffff20] text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <FaFacebookF size={16} />
        </a>

        <a
          href="#contact"
          aria-label="Twitter"
          className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#ffffff38] bg-[#ffffff20] text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <FaXTwitter size={16} />
        </a>

        <a
          href="#contact"
          aria-label="YouTube"
          className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#ffffff38] bg-[#ffffff20] text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <FaYoutube size={16} />
        </a>

        <a
          href="#contact"
          aria-label="Instagram"
          className="flex h-10 w-10 items-center justify-center rounded-[5px] border border-[#ffffff38] bg-[#ffffff20] text-white transition-colors duration-300 hover:bg-white hover:text-black"
        >
          <FaInstagram size={16} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
