
import { GiBamboo } from "react-icons/gi";
import { LuLeaf, LuFlower } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  {
    title: "Professional Yoga",
    description:
      "Enhance flexibility, improve strength, and cultivate inner peace through yoga practice.",
    icon: GiBamboo,
  },
  {
    title: "Nutrition Strategies",
    description:
      "Personalized nutrition guidance to support a balanced, healthy, and mindful lifestyle.",
    icon: LuLeaf,
  },
  {
    title: "Yoga Classes",
    description:
      "Explore diverse yoga classes designed for beginners and experienced alike.",
    icon: LuFlower,
  },
];

function WhatWeOffer() {
  return (
    <section className="w-full bg-[#F4EFEC] pt-[100px] pb-0">
      <div className="mx-auto max-w-[1290px] px-5">


        <div className="flex flex-col items-center">
          <p className="mb-4 font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-black">
            What We Offer
          </p>

          <h2 className="max-w-[670px] text-center font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-[#252A1F]">
            Discover Wellness Through Every Practice
          </h2>
        </div>


        <div className="mt-[50px] grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative h-[362.6px] overflow-hidden rounded-[10px] bg-[#EEE5E1] p-[10px] transition-all duration-[400ms] ease-in-out hover:bg-white"
              >

                <div className="relative z-[2] h-[155px] w-full">
                  <div className="flex h-[55px] w-[55px] items-start rounded-[5px] bg-white pl-[14px] pt-[13px] transition-all duration-[400ms] ease-in-out group-hover:bg-[#866452]">
                    <Icon className="text-[28px] text-[#866452] transition-all duration-[400ms] ease-in-out group-hover:text-white" />
                  </div>
                </div>


                <h3 className="px-5 font-['Frank_Ruhl_Libre'] text-[24px] font-normal capitalize leading-[28.8px] text-[#252A1F]">
                  {service.title}
                </h3>


                <p className="mx-5 mt-[10px] font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
                  {service.description}
                </p>


                <div className="relative z-[2] w-full">
                  <a
                    href="#"
                    className="mb-5 ml-5 mt-[30px] inline-flex h-[47.6px] w-[166.7px] items-center justify-center gap-2 rounded-[5px] bg-[#866452] px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-white transition-all duration-[400ms] ease-in-out group-hover:bg-[#12140F]"
                  >
                    Learn More
                    <FaArrowRight className="text-[12px]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>


        <div className="mt-[100px] flex w-full items-center py-[5px]">
          <div className="h-px w-full bg-[#D8CECA]" />
        </div>

      </div>
    </section>
  );
}

export default WhatWeOffer;
