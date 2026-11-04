
import { useState } from "react";
import { FaRegCircleQuestion, FaMinus, FaArrowRight } from "react-icons/fa6";

const questions = [
  {
    question: "What Types Of Yoga Classes Do You Offer?",
    answer:
      "We offer a variety of classes including Hatha Yoga, Vinyasa Flow, Yin Yoga, Meditation, and beginner-friendly sessions.",
  },
  {
    question: "Do I Need Prior Yoga Experience To Join?",
    answer:
      "No. Our classes are designed for all levels, from beginners to experienced practitioners.",
  },
  {
    question: "What Should I Bring To My First Yoga Class?",
    answer:
      "Bring comfortable clothing, a water bottle, and a yoga mat if you have one. We also provide studio equipment for members.",
  },
  {
    question: "How Long Is Each Yoga Session?",
    answer:
      "Most classes run between 45–60 minutes, depending on the type of practice.",
  },
  {
    question: "How Often Should I Practice Yoga?",
    answer:
      "For the best results, we recommend practicing 2–3 times per week, but even one session can support your wellbeing.",
  },
  {
    question: "Are Private Yoga Sessions Available?",
    answer:
      "Yes. We offer one-on-one private sessions tailored to your fitness level, goals, and schedule.",
  },
];

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#F4EFEC] px-5 py-[100px]">
      <div className="mx-auto grid max-w-[1290px] grid-cols-1 items-start gap-[70px] lg:grid-cols-[1.7fr_1fr]">


        <div className="flex flex-col">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.question}
                className="mb-[10px] last:mb-0"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className={`flex min-h-[56px] w-full items-center justify-between rounded-[10px] px-[25px] py-[15px] text-left transition-colors duration-300 ${isOpen
                      ? "bg-white"
                      : "bg-[#EEE5E1] hover:bg-white"
                    }`}
                >
                  <span className="font-['Frank_Ruhl_Libre'] text-[20px] font-normal capitalize leading-[25px] text-[#252A1F]">
                    {item.question}
                  </span>

                  <span className="ml-4 shrink-0 text-[#866452]">
                    {isOpen ? (
                      <FaMinus className="text-[18px]" />
                    ) : (
                      <FaRegCircleQuestion className="text-[18px]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-[25px] pb-[16px] pt-[23px]">
                    <p className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>


        <div className="lg:sticky lg:top-[150px]">
          <p className="mb-[22px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-[#866452]">
            FAQs
          </p>

          <h2 className="mb-[22px] font-['Frank_Ruhl_Libre'] text-[48px] font-normal capitalize leading-[1.25] text-[#252A1F]">
            Have Questions? We’re Here To Help
          </h2>

          <p className="mb-[40px] font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
            Get quick answers about our services, instructors, booking
            process, and studio experience.
          </p>

          <a
            href="#"
            className="inline-flex h-[47.8px] items-center justify-center gap-[12px] rounded-[5px] bg-[#866452] px-[25px] font-['Inter'] text-[14px] font-medium uppercase text-white transition-colors duration-300 hover:bg-[#252A1F]"
          >
            Learn More
            <FaArrowRight className="text-[12px]" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default FAQs;
