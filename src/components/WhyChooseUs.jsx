
import { FaRegUser } from "react-icons/fa6";
import { LuSlidersHorizontal, LuLeaf } from "react-icons/lu";

const features = [
  {
    title: "Expert Instructors",
    description:
      "Learn from experienced trainers who guide you with professional knowledge and care.",
    icon: FaRegUser,
  },
  {
    title: "Personalized Classes",
    description:
      "Classes designed to support different goals, levels, and wellness journeys successfully.",
    icon: LuSlidersHorizontal,
  },
  {
    title: "Peaceful Environment",
    description:
      "A relaxing space to refresh your body and mind through mindful movement every day.",
    icon: LuLeaf,
  },
];

function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F4EFEC] px-[25px] pt-[25px] pb-[100px]">
      <div className="mx-auto flex max-w-[1463px] flex-col gap-[25px] lg:flex-row">


        <div className="flex w-full gap-[20px] lg:w-[calc(50%+12px)]">
          <div
            className="h-[686px] w-1/2 rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/group-of-young-adult-caucasian-women-practicing-yo-2026-03-27-01-27-58-utc.jpg')",
            }}
          />

          <div
            className="h-[686px] w-1/2 rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/woman-meditating-peacefully-on-rock-in-nature-2026-01-09-00-52-14-utc.jpg')",
            }}
          />
        </div>


        <div className="flex w-full flex-col justify-center gap-[20px] rounded-[10px] bg-[#252A1F] px-[40px] py-[44px] text-white lg:flex-1 lg:px-[58.8px]">

          <p className="font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px]">
            Why Choose Us
          </p>

          <h2 className="font-['Frank_Ruhl_Libre'] text-[40px] font-normal capitalize leading-[1.2] sm:text-[50px] sm:leading-[60px]">
            More Than Yoga, It's A Way Of Living Together
          </h2>

          <p className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#B7B7B7]">
            At Our Studio, we create experiences that inspire mindful living,
            helping you achieve balance through movement, breath, and
            self-awareness.
          </p>

          <div className="flex flex-col gap-[25px]">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start"
                >

                  <div className="relative z-[2] mr-[15px] w-[65px] shrink-0">

                    <div className="group/icon flex h-[55px] w-[55px] items-center justify-center rounded-[5px] bg-[#363D2E] transition-all duration-[400ms] ease-in-out hover:bg-white">
                      <Icon className="text-[28px] text-white transition-all duration-[400ms] ease-in-out group-hover/icon:text-[#866452]" />
                    </div>
                  </div>


                  <div className="relative z-[2] flex-1">
                    <h3 className="font-['Frank_Ruhl_Libre'] text-[24px] font-normal capitalize leading-[28.8px] text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-[10px] font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#B7B7B7]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
