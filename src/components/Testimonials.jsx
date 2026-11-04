
import { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaStar,
} from "react-icons/fa6";

const testimonials = [
  {
    text: "Joining this yoga studio has completely transformed my daily routine. The instructors are knowledgeable, the atmosphere is calming, and I feel healthier both physically and mentally.",
    name: "Harriet Elysia",
    role: "Yoga Enthusiast",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/elegant-woman-with-black-hair-posing-in-studio-2026-04-14-01-47-26-utc.jpg",
  },
  {
    text: "The classes are suitable for all skill levels, and everyone is incredibly welcoming. I've improved my flexibility, reduced stress, and made great friends along the way.",
    name: "Balthazar Julian",
    role: "Mindfulness Practitioner",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/portrait-of-a-stylish-man-against-grey-background-2026-03-25-02-59-02-utc.jpg",
  },
  {
    text: "From the beautiful studio environment to the supportive instructors, every session is an amazing experience. I always leave feeling refreshed, energized, and balanced.",
    name: "Felicity Rowan",
    role: "Wellness Advocate",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/woman-with-bare-shoulders-and-blonde-hair-updo-2026-01-11-09-10-10-utc.jpg",
  },
];

const topImages = [
  "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/smiling-teen-with-long-hair-posing-in-studio-2026-01-08-22-30-37-utc.jpg",
  "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/studio-shot-of-a-happy-and-handsome-man-laughing-a-2026-01-09-09-23-06-utc.jpg",
  "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/radiant-woman-smiling-with-dark-hair-on-grey-2026-03-25-05-26-02-utc.jpg",
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    activeIndex + 2
  );

  const changeSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section className="w-full bg-[#F4EFEC] pt-[100px] px-5">
      <div className="relative mx-auto flex min-h-[706.8px] w-full max-w-[1290px] flex-col rounded-[10px] bg-[#252A1F] px-5 pt-[70px] pb-[80px] md:px-[60px]">

        <div className="flex w-full flex-1 flex-col">


          <div className="mb-[65px] flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-[510px]">
              <p className="mb-4 font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-white">
                Testimonials
              </p>

              <h2 className="font-['Frank_Ruhl_Libre'] text-[44px] font-normal capitalize leading-[1.2] text-white">
                What Our Members Say After Joining
              </h2>
            </div>


            <div className="flex items-center gap-5">

              <div className="flex items-center">
                {topImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt="Studio member"
                    className={`h-[48px] w-[48px] rounded-full border-2 border-[#252A1F] object-cover ${index !== 0 ? "-ml-[14px]" : ""
                      }`}
                  />
                ))}

                <button
                  aria-label="Next testimonials"
                  onClick={changeSlide}
                  className="group ml-[-8px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white text-[#252A1F] transition-all duration-300 hover:bg-[#866452] hover:text-white"
                >
                  <FaArrowUpRightFromSquare className="text-[16px] transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </div>

              <div>
                <div className="flex gap-[3px] text-[15px] text-[#F5A044]">
                  {[1, 2, 3, 4].map((star) => (
                    <FaStar key={star} />
                  ))}

                  <span className="relative inline-block">
                    <FaStar className="text-[#B7B7B7]" />
                    <span className="absolute inset-y-0 left-0 w-[90%] overflow-hidden">
                      <FaStar className="text-[#F5A044]" />
                    </span>
                  </span>
                </div>

                <p className="mt-1 font-['Inter'] text-[14px] text-[#B7B7B7]">
                  4.9/5 Rating
                </p>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">

            {visibleTestimonials.map((item) => (
              <div
                key={item.name}
                className="flex min-h-[314px] flex-col rounded-[10px] bg-[#363D2E] p-[30px] transition-all duration-300 hover:bg-[#3B4435]"
              >
                <p className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#B7B7B7]">
                  "{item.text}"
                </p>

                <div className="mt-auto pt-6">

                  <div className="mb-[18px] flex gap-[3px] text-[16px] text-[#F5A044]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </div>

                  <div className="flex items-center gap-[15px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[50px] w-[50px] rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-['Frank_Ruhl_Libre'] text-[20px] font-normal leading-[25px] text-white">
                        {item.name}
                      </h3>

                      <p className="mt-1 font-['Inter'] text-[14px] leading-[20px] text-[#B7B7B7]">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>


        </div>
      </div>
    </section>
  );
}

export default Testimonials;
