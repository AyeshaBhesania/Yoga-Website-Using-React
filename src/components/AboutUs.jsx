
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function Counter({ target, suffix = "", label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-['Frank_Ruhl_Libre'] text-[45px] font-normal leading-[54px] text-[#252A1F]">
        {count}
        <span className="ml-1 text-[#866452]">{suffix}</span>
      </div>

      <p className="font-['Inter'] text-[14px] leading-[25.6px] text-[#535956]">
        {label}
      </p>
    </div>
  );
}

function AboutUs() {
  return (
    <section className="w-full bg-[#F4EFEC] py-[100px]">
      <div className="mx-auto grid max-w-[1290px] grid-cols-1 gap-[50px] px-5 md:grid-cols-[600px_1fr] md:gap-[70px] md:px-0">


        <div>
          <p className="mb-4 font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-[#866452]">
            About Us
          </p>

          <h2 className="font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-[#252A1F]">
            More Than A Studio. It’s A Way Of Coming Home.
          </h2>

          <div
            className="mt-[30px] h-[320px] w-full rounded-[10px] bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/a-group-of-girls-do-yoga-in-the-gym-under-the-guid-2026-01-09-07-11-13-utc.jpg')",
            }}
          />

          <p className="mt-[30px] font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
            Our studio is a place to relax, recharge, and transform. We offer
            yoga and fitness programs designed to improve your strength,
            flexibility, and overall well-being through mindful daily healthy
            practices.
          </p>

          <a
            href="#"
            className="mt-[30px] inline-flex h-[47.8px] w-[193.25px] items-center justify-center gap-2 rounded-[5px] bg-[#866452] px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-white transition-all duration-[400ms] ease-in-out hover:bg-[#12140F]"
          >
            More About Us
            <FaArrowRight className="text-[12px]" />
          </a>
        </div>


        <div>
          <div className="grid grid-cols-3 gap-2 pt-[48px]">
            <Counter
              target={22}
              suffix="+"
              label="Years of Experience"
            />

            <Counter
              target={2}
              suffix="K+"
              label="Active Members"
            />

            <Counter
              target={97}
              suffix="%"
              label="Positive Reviews"
            />
          </div>

          <div
            className="mt-[56px] h-[524px] w-full rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/women-practicing-yoga-together-in-sunny-studio-2026-01-23-16-29-40-utc.jpg')",
            }}
          />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
