
import { FaArrowRight } from "react-icons/fa6";

const posts = [
  {
    category: "Yoga",
    title: "Morning Yoga Routine for Busy Professionals",
    date: "August 7, 2026",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/view-from-the-top-doing-exercises-young-woman-in-2026-03-24-03-21-18-utc.jpg",
    link: "https://templatekit.aminnastudio.com/flowra/2026/08/07/morning-yoga-routine-for-busy-professionals/",
  },
  {
    category: "Benefits",
    title: "Yoga for Seniors: Benefits and Safe Practices",
    date: "August 7, 2026",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/yoga-class-stretches-and-bends-together-peacefully-2026-01-09-11-45-12-utc.jpg",
    link: "https://templatekit.aminnastudio.com/flowra/2026/08/07/yoga-for-seniors-benefits-and-safe-practices/",
  },
  {
    category: "Self-Care",
    title: "How to Build a Sustainable Self-Care Routine",
    date: "August 7, 2026",
    image:
      "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/young-woman-practicing-yoga-meditation-outdoors-ne-2026-01-11-08-59-32-utc.jpg",
    link: "https://templatekit.aminnastudio.com/flowra/2026/08/07/how-to-build-a-sustainable-self-care-routine/",
  },
];

const featuredPost = {
  category: "Practice",
  title: "Building A Consistent Yoga Practice At Home",
  date: "August 3, 2026",
  image:
    "https://templatekit.aminnastudio.com/flowra/wp-content/uploads/sites/30/2026/08/woman-practicing-yoga-pose-in-indoor-setting-2026-03-24-04-58-35-utc.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...",
  link: "https://templatekit.aminnastudio.com/flowra/2026/08/03/building-a-consistent-yoga-practice-at-home/",
};

function Blog() {
  return (
    <section className="w-full bg-[#F4EFEC] px-5 py-[100px]">
      <div className="mx-auto max-w-[1290px]">


        <div className="mb-[50px] flex flex-col items-center text-center">
          <p className="mb-3 font-['Inter'] text-[14px] font-medium uppercase text-[#866452]">
            Our Blog
          </p>

          <h2 className="max-w-[600px] font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-[#252A1F]">
            Stories, Tips &amp; Yoga Inspiration
          </h2>
        </div>


        <div className="grid grid-cols-1 items-start gap-[25px] lg:grid-cols-2">


          <div className="flex flex-col gap-[20px]">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex flex-col gap-[15px] sm:flex-row"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h-[240px] w-full shrink-0 overflow-hidden rounded-[5px] sm:w-[311.25px]"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>

                <div className="flex min-w-0 flex-col items-start justify-center">
                  <p className="mb-[5px] font-['Inter'] text-[12px] text-[#866452]">
                    {post.category}
                  </p>

                  <h3 className="mb-[8px] font-['Frank_Ruhl_Libre'] text-[22px] font-normal leading-[1.2] text-[#252A1F]">
                    {post.title}
                  </h3>

                  <p className="mb-[15px] font-['Inter'] text-[12px] text-[#535956]">
                    by rizal&nbsp; • &nbsp;{post.date}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-[4px] bg-[#866452] px-[15px] py-[10px] font-['Inter'] text-[11px] font-medium uppercase text-white transition-colors duration-300 hover:bg-[#252A1F]"
                  >
                    Read More
                    <FaArrowRight className="text-[10px]" />
                  </a>
                </div>
              </article>
            ))}
          </div>


          <div className="lg:sticky lg:top-[50px]">
            <article
              className="relative flex min-h-[500px] items-end overflow-hidden rounded-[10px] bg-cover bg-center"
              style={{
                backgroundImage: `url('${featuredPost.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="relative z-[1] p-[30px] text-white">
                <p className="mb-[8px] font-['Inter'] text-[13px]">
                  {featuredPost.category}
                </p>

                <h3 className="mb-[8px] font-['Frank_Ruhl_Libre'] text-[30px] font-normal leading-[1.2]">
                  {featuredPost.title}
                </h3>

                <p className="mb-[12px] font-['Inter'] text-[12px]">
                  by rizal&nbsp; • &nbsp;{featuredPost.date}
                </p>

                <p className="mb-[20px] font-['Inter'] text-[14px] leading-[1.6] text-white">
                  {featuredPost.description}
                </p>

                <a
                  href={featuredPost.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[4px] bg-white px-[20px] py-[12px] font-['Inter'] text-[12px] font-medium uppercase text-[#252A1F] transition-colors duration-300 hover:bg-[#866452] hover:text-white"
                >
                  Read More
                  <FaArrowRight className="text-[11px]" />
                </a>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;
