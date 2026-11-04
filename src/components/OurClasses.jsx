
import {
  LuHeart,
  LuLeaf,
  LuMoonStar,
  LuUserRound,
  LuClock,
} from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";

const classes = [
  {
    title: "Vinyasa Flow",
    description:
      "A smooth sequence of movements that builds strength and flexibility.",
    level: "Beginner",
    duration: "60 Minutes",
    icon: LuHeart,
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/yoga-class-engages-in-a-kneeling-pose-with-arms-ex-2026-03-19-10-32-29-utc.jpg",
  },
  {
    title: "Hatha Yoga",
    description:
      "A gentle practice focused on basic poses, breathing, and relaxation.",
    level: "All Levels",
    duration: "60 Minutes",
    icon: LuLeaf,
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/joyful-woman-meditating-in-tree-pose-near-multieth-2026-01-06-00-03-23-utc.jpg",
  },
  {
    title: "Yin Yoga",
    description:
      "Slow-paced stretches that improve flexibility and release tension.",
    level: "Beginner",
    duration: "60 Minutes",
    icon: LuMoonStar,
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/women-practicing-yoga-meditating-with-peaceful-exp-2026-01-09-09-24-57-utc.jpg",
  },
];

function OurClasses() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#EEE5E1] bg-cover bg-center bg-no-repeat py-[100px]"
      style={{
        backgroundImage:
          "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/Bg.png')",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1290px] px-5">


        <div className="flex flex-col items-center text-center">
          <p className="font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-[#866452]">
            Our Classes
          </p>

          <h2 className="mt-4 max-w-[670px] font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-[#252A1F]">
            Explore Mindful Classes To Strengthen Your Body
          </h2>
        </div>


        <div className="mx-auto mt-[35px] grid max-w-[1270px] grid-cols-1 gap-5 md:grid-cols-3">
          {classes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group/card relative flex h-[496.775px] flex-col overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat p-[10px]"
                style={{ backgroundImage: `url('${item.image}')` }}
              >

                <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover/card:bg-black/50" />


                <div className="relative z-10 flex h-[55.2px] w-[54px] shrink-0 items-center justify-center rounded-[5px] bg-white">
                  <Icon className="h-[20px] w-[20px] text-[#866452]" />
                </div>


                <div className="h-[180px] w-full shrink-0" />


                <div className="relative z-10 px-5">
                  <h3 className="mb-4 mt-2 font-['Frank_Ruhl_Libre'] text-[28px] font-normal capitalize leading-[33.6px] text-white">
                    {item.title}
                  </h3>

                  <p className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#D8D8D8]">
                    {item.description}
                  </p>


                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 font-['Inter'] text-[12px] font-medium text-white">
                    <div className="flex items-center gap-2">
                      <LuUserRound className="h-[13px] w-[13px]" />
                      <span>{item.level}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <LuClock className="h-[13px] w-[13px]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>


                  <a
                    href="#"
                    className="mt-[18px] inline-flex h-[47.775px] w-[173.137px] items-center justify-center gap-2 whitespace-nowrap rounded-[5px] bg-white px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-[#252A1F] transition-all duration-[400ms] ease-in-out group-hover/card:bg-[#12140F] group-hover/card:text-white hover:!bg-[#866452] hover:!text-white"
                  >
                    View Details
                    <FaArrowRight className="text-[11px]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>


        <p className="mx-auto mt-[30px] max-w-[570px] text-center font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
          Explore our complete range of yoga classes designed to improve your
          strength, flexibility, balance, and overall wellness.
        </p>


        <div className="mt-[20px] flex justify-center">
          <a
            href="#"
            className="inline-flex h-[47.775px] items-center justify-center gap-2 rounded-[5px] bg-[#866452] px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-white transition-all duration-[400ms] ease-in-out hover:bg-[#12140F]"
          >
            All Classes
            <FaArrowRight className="text-[11px]" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default OurClasses;
