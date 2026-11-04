
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";
import logo from "../assets/Logo-Light.png";

const quickLinks = [
  "About",
  "Classes",
  "Instructors",
  "Products",
  "Blog",
  "Contact",
];

const socialLinks = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaYoutube, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="w-full bg-[#252A1F] text-white">
      <div className="mx-auto flex w-full max-w-[1290px] flex-col gap-5 px-0 pt-[100px] pb-[20px]">


        <div className="grid grid-cols-1 items-center gap-8 border-b border-white/10 py-[25px] md:grid-cols-[1.1fr_1fr] md:gap-[60px]">
          <div>
            <h2 className="mb-[12px] font-['Frank_Ruhl_Libre'] text-[36px] font-normal leading-[1.2]">
              Subscribe Our Newsletter
            </h2>

            <p className="font-['Inter'] text-[15px] leading-[24px] text-[#B7B7B7]">
              Subscribe to our newsletter for yoga tips, wellness inspiration,
              exclusive offers, and the latest studio updates.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center gap-[10px]"
          >
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="h-[47px] min-w-0 flex-1 rounded-[5px] bg-[#363D2E] px-[25px] font-['Inter'] text-[14px] text-white outline-none placeholder:text-[#B7B7B7]"
            />

            <button
              type="submit"
              className="inline-flex h-[47px] shrink-0 items-center justify-center gap-[8px] rounded-[5px] bg-white px-[25px] font-['Inter'] text-[12px] font-medium uppercase text-[#252A1F] transition-all duration-300 hover:bg-[#866452] hover:text-white"
            >
              Subscribe
              <FaEnvelope className="text-[11px]" />
            </button>
          </form>
        </div>


        <div className="grid grid-cols-1 gap-12 border-b border-white/10 py-[50px] md:grid-cols-[1.3fr_1.1fr_0.6fr]">


          <div>
            <img
              src={logo}
              alt="Flowra"
              className="mb-[22px] w-[180px] object-contain"
            />

            <p className="max-w-[300px] font-['Inter'] text-[15px] leading-[24px] text-[#B7B7B7]">
              Experience the harmony of mind, body, and spirit in a space
              designed for growth, balance, and well-being.
            </p>

            <h3 className="mb-[18px] mt-[40px] font-['Frank_Ruhl_Libre'] text-[20px] font-normal">
              Follow Us:
            </h3>

            <div className="flex gap-[10px]">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] bg-[#363D2E] text-white transition-all duration-300 hover:bg-[#866452]"
                >
                  <Icon className="text-[15px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-[20px] font-['Frank_Ruhl_Libre'] text-[24px] font-normal">
              Quick Links
            </h3>

            <ul className="flex flex-col gap-[10px]">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-['Inter'] text-[14px] text-[#B7B7B7] transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col gap-[25px]">
            <div>
              <h3 className="mb-[8px] font-['Frank_Ruhl_Libre'] text-[24px] font-normal">
                Email Address:
              </h3>
              <p className="font-['Inter'] text-[14px] leading-[22px] text-[#B7B7B7]">
                Flowra@support.com
              </p>
            </div>

            <div>
              <h3 className="mb-[8px] font-['Frank_Ruhl_Libre'] text-[24px] font-normal">
                Our Phone:
              </h3>
              <p className="font-['Inter'] text-[14px] leading-[22px] text-[#B7B7B7]">
                (555) 987-6543
              </p>
            </div>

            <div>
              <h3 className="mb-[8px] font-['Frank_Ruhl_Libre'] text-[24px] font-normal">
                Our Location:
              </h3>
              <p className="font-['Inter'] text-[14px] leading-[22px] text-[#B7B7B7]">
                Jalan By Pass Ngurah Rai – Denpasar, Bali.
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-between gap-4 py-[30px] md:flex-row md:items-center">
          <p className="font-['Inter'] text-[14px] text-[#B7B7B7]">
            © Flowra by aminnastudio. All Right Reserved 2026.
          </p>

          <div className="flex gap-[30px]">
            <a
              href="#"
              className="font-['Inter'] text-[14px] text-[#B7B7B7] transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="font-['Inter'] text-[14px] text-[#B7B7B7] transition-colors hover:text-white"
            >
              Terms & Services
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
