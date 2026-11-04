
import { FaCheck, FaArrowRight } from "react-icons/fa6";

const packages = [
  {
    name: "Basic Package",
    description:
      "Perfect for starting your yoga journey with confidence and consistency.",
    price: "$89",
    priceDescription: "Ideal for regular weekly practice.",
    features: [
      "Up to 8 classes per month",
      "Access to all regular yoga classes",
      "Beginner-friendly sessions",
      "Free mat rental",
      "Pause or cancel anytime",
    ],
  },
  {
    name: "Ultimate Package",
    description:
      "Unlimited access for dedicated practitioners seeking growth and balance.",
    price: "$129",
    priceDescription: "Unlimited access to all yoga classes.",
    features: [
      "Unlimited yoga classes",
      "Priority class booking",
      "Access to workshops & special events",
      "Complimentary guest pass each month",
      "Exclusive member discounts",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    description:
      "Personalized yoga experience tailored to your goals and lifestyle.",
    price: "$169",
    priceDescription: "Personalized yoga tailored to your goals.",
    features: [
      "Private one-on-one sessions",
      "Personalized yoga program",
      "Flexible scheduling",
      "Dedicated instructor support",
      "Nutrition & wellness consultation",
    ],
  },
];

function OurPricing() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EEE5E1]">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage:
            "url('https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/Bg.png')",
        }}
      />


      <div className="relative z-[1] mx-auto max-w-[1290px] px-5 pb-[100px] pt-[300px]">

        <div className="mb-[35px] flex flex-col items-center text-center">
          <p className="mb-4 font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-black">
            Our Pricing
          </p>

          <h2 className="max-w-[670px] font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-[#252A1F]">
            Personalized Memberships That Fit Your Lifestyle
          </h2>
        </div>


        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className="relative flex w-full flex-col bg-white transition-all duration-300 ease-in-out md:min-h-[581.775px]"
            >

              {item.popular && (
                <span className="absolute right-[30px] top-[10px] z-[2] rounded-[4px] bg-[#252A1F] px-[14px] py-[5px] font-['Inter'] text-[11px] font-medium text-white">
                  Popular
                </span>
              )}


              <div className="flex h-[247px] flex-col gap-5 px-[30px] pb-[5px] pt-[30px]">
                <div>
                  <h3 className="mb-4 mt-2 font-['Frank_Ruhl_Libre'] text-[26px] font-normal capitalize leading-[31.2px] text-[#252A1F]">
                    {item.name}
                  </h3>

                  <p className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline">
                    <span className="font-['Frank_Ruhl_Libre'] text-[50px] font-normal leading-[60px] text-[#866452]">
                      {item.price}
                    </span>
                    <span className="ml-1 font-['Inter'] text-[12px] text-[#535956]">
                      /Package
                    </span>
                  </div>

                  <p className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
                    {item.priceDescription}
                  </p>
                </div>
              </div>


              <div className="flex h-[10.8px] w-full items-center py-[5px]">
                <div className="h-px w-full bg-[#E5DCD7]" />
              </div>


              <div className="flex flex-1 flex-col px-[30px] pb-[30px] pt-[5px]">
                <h4 className="mb-3 font-['Inter'] text-[16px] font-medium leading-[24px] capitalize text-[#252A1F]">
                  What's Included:
                </h4>

                <ul className="flex flex-col gap-[5px]">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-[5px]"
                    >
                      <FaCheck className="w-[20px] shrink-0 text-[16px] text-[#866452]" />

                      <span className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>


                <a
                  href="#"
                  className="mt-auto inline-flex min-h-[47.775px] w-full items-center justify-center gap-2 rounded-[5px] bg-[#866452] px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-white transition-all duration-400 ease-in-out hover:bg-[#12140F]"
                >
                  Select Package
                  <FaArrowRight className="text-[12px]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPricing;
