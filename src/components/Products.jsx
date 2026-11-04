import { FaArrowRight } from "react-icons/fa6";

const products = [
  {
    name: "Yoga Mat",
    price: "$39.99",
    description: "Non-slip premium yoga mat",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/purple-yoga-mat-rolled-on-wooden-floor-2026-03-10-04-55-05-utc.jpg",
  },
  {
    name: "Yoga Block (Pair)",
    price: "$19.99",
    description: "High-density foam blocks",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/yoga-block-and-mat-on-wood-floor-2026-03-18-04-19-34-utc.jpg",
  },
  {
    name: "Yoga Strap",
    price: "$44.99",
    description: "Soft cushion for restorative yoga poses.",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/stacked-yoga-bolsters-and-potted-green-plant-2026-03-17-20-41-53-utc.jpg",
  },
];

function Products() {
  return (
    <section className="w-full bg-[#F4EFEC] px-5 py-[100px]">
      <div className="mx-auto max-w-[1290px]">

        <div className="mb-[50px] flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="flex max-w-[600px] flex-col">
            <p className="mb-4 font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-[#866452]">
              Our Products
            </p>

            <h2 className="font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-[#252A1F]">
              Explore Our Products Collection
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex h-[47.775px] w-fit items-center justify-center gap-2 rounded-[5px] bg-[#866452] px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-white transition-all duration-[400ms] ease-in-out hover:bg-[#12140F]"
          >
            All Products
            <FaArrowRight className="text-[12px]" />
          </a>
        </div>


        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col gap-5">


              <div
                className="group relative flex h-[347.6px] w-full items-center justify-center overflow-hidden rounded-[10px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${product.image}')` }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-[400ms] ease-in-out group-hover:bg-black/20">
                  <a
                    href="#"
                    className=" rounded-[5px] bg-white px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase text-[#252A1F] opacity-0 transition-all duration-[400ms] ease-in-out hover:bg-[#866452] hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    Order Now
                    <FaArrowRight className="ml-2 inline text-[12px]" />
                  </a>
                </div>
              </div>


              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-[10px]">
                  <h3 className="font-['Frank_Ruhl_Libre'] text-[24px] font-normal capitalize leading-[28.8px] text-[#252A1F]">
                    {product.name}
                  </h3>

                  <p className="font-['Inter'] text-[16px] font-normal leading-[25.6px] text-[#535956]">
                    {product.description}
                  </p>
                </div>

                <p className="shrink-0 font-['Inter'] text-[16px] font-medium leading-[24px] text-[#866452]">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;