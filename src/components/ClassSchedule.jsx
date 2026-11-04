
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const schedules = [
  [
    ["Yin Yoga", "Charlotte Bexley", "Beginner", "07.00 AM - 08.00 AM"],
    ["Power Yoga", "Oliver Smith", "All Levels", "09.00 AM - 10.00 AM"],
    ["Restorative Yoga", "Evelyn Thorne", "Beginner", "11.00 AM - 12.00 PM"],
    ["Vinyasa Flow", "James Thompson", "Beginner", "02.00 PM - 03.00 PM"],
    ["Hot Yoga", "Clara Hargrove", "Beginner", "04.00 PM - 05.00 PM"],
    ["Hatha Yoga", "Henry Wilson", "All Levels", "06.00 PM - 07.00 PM"],
  ],
  [
    ["Vinyasa Flow", "James Thompson", "Beginner", "07.00 AM - 08.00 AM"],
    ["Hatha Yoga", "Henry Wilson", "All Levels", "09.00 AM - 10.00 AM"],
    ["Yin Yoga", "Charlotte Bexley", "Beginner", "11.00 AM - 12.00 PM"],
    ["Power Yoga", "Oliver Smith", "All Levels", "02.00 PM - 03.00 PM"],
    ["Restorative Yoga", "Evelyn Thorne", "Beginner", "04.00 PM - 05.00 PM"],
    ["Hot Yoga", "Clara Hargrove", "Beginner", "06.00 PM - 07.00 PM"],
  ],
  [
    ["Restorative Yoga", "Evelyn Thorne", "Beginner", "07.00 AM - 08.00 AM"],
    ["Hot Yoga", "Clara Hargrove", "Beginner", "09.00 AM - 10.00 AM"],
    ["Yin Yoga", "Charlotte Bexley", "Beginner", "11.00 AM - 12.00 PM"],
    ["Vinyasa Flow", "James Thompson", "Beginner", "02.00 PM - 03.00 PM"],
    ["Power Yoga", "Oliver Smith", "All Levels", "04.00 PM - 05.00 PM"],
    ["Hatha Yoga", "Henry Wilson", "All Levels", "06.00 PM - 07.00 PM"],
  ],
  [
    ["Hatha Yoga", "Henry Wilson", "All Levels", "07.00 AM - 08.00 AM"],
    ["Yin Yoga", "Charlotte Bexley", "Beginner", "09.00 AM - 10.00 AM"],
    ["Power Yoga", "Oliver Smith", "All Levels", "11.00 AM - 12.00 PM"],
    ["Restorative Yoga", "Evelyn Thorne", "Beginner", "02.00 PM - 03.00 PM"],
    ["Hot Yoga", "Clara Hargrove", "Beginner", "04.00 PM - 05.00 PM"],
    ["Vinyasa Flow", "James Thompson", "Beginner", "06.00 PM - 07.00 PM"],
  ],
  [
    ["Power Yoga", "Oliver Smith", "All Levels", "07.00 AM - 08.00 AM"],
    ["Vinyasa Flow", "James Thompson", "Beginner", "09.00 AM - 10.00 AM"],
    ["Hatha Yoga", "Henry Wilson", "All Levels", "11.00 AM - 12.00 PM"],
    ["Yin Yoga", "Charlotte Bexley", "Beginner", "02.00 PM - 03.00 PM"],
    ["Restorative Yoga", "Evelyn Thorne", "Beginner", "04.00 PM - 05.00 PM"],
    ["Hot Yoga", "Clara Hargrove", "Beginner", "06.00 PM - 07.00 PM"],
  ],
  [
    ["Yin Yoga", "Charlotte Bexley", "Beginner", "07.00 AM - 08.00 AM"],
    ["Restorative Yoga", "Evelyn Thorne", "Beginner", "09.00 AM - 10.00 AM"],
    ["Vinyasa Flow", "James Thompson", "Beginner", "11.00 AM - 12.00 PM"],
    ["Hatha Yoga", "Henry Wilson", "All Levels", "02.00 PM - 03.00 PM"],
    ["Power Yoga", "Oliver Smith", "All Levels", "04.00 PM - 05.00 PM"],
    ["Hot Yoga", "Clara Hargrove", "Beginner", "06.00 PM - 07.00 PM"],
  ],
  [
    ["Hot Yoga", "Clara Hargrove", "Beginner", "07.00 AM - 08.00 AM"],
    ["Power Yoga", "Oliver Smith", "All Levels", "09.00 AM - 10.00 AM"],
    ["Hatha Yoga", "Henry Wilson", "All Levels", "11.00 AM - 12.00 PM"],
    ["Restorative Yoga", "Evelyn Thorne", "Beginner", "02.00 PM - 03.00 PM"],
    ["Yin Yoga", "Charlotte Bexley", "Beginner", "04.00 PM - 05.00 PM"],
    ["Vinyasa Flow", "James Thompson", "Beginner", "06.00 PM - 07.00 PM"],
  ],
];

function ClassCard({ classInfo }) {
  const [name, instructor, level, time] = classInfo;

  return (
    <div className="group flex flex-col overflow-hidden rounded-[10px] bg-[#EEE5E1] transition-colors duration-300 hover:bg-white">
      <h3 className="px-[30px] pt-[30px] font-['Frank_Ruhl_Libre'] text-[26px] font-normal leading-[31.2px] text-[#252A1F]">
        {name}
      </h3>

      <p className="px-[30px] pt-[3px] font-['Inter'] text-[16px] leading-[25.6px] text-[#535956]">
        Instructors: {instructor}
      </p>

      <div className="mx-[30px] my-[15px] border-t border-dashed border-[#D8CECA]" />

      <div className="flex items-center gap-[5px] px-[30px] font-['Inter'] text-[16px] leading-[25.6px] text-[#866452]">
        <FaRegUser className="text-[16px]" />
        <span>{level}</span>
      </div>

      <p className="px-[30px] pt-[5px] font-['Inter'] text-[16px] leading-[25.6px] text-[#252A1F]">
        {time}
      </p>

      <div className="px-[30px] pb-[30px] pt-[25px]">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-[10px] rounded-[5px] bg-[#866452] px-[25px] py-[15px] font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-white transition-colors duration-300 hover:bg-[#252A1F]"
        >
          Join Classes
          <FaArrowRight className="text-[16px]" />
        </a>
      </div>
    </div>
  );
}

function ClassSchedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section className="w-full bg-[#F4EFEC] px-5 py-[100px]">

      <div className="relative mx-auto mb-[100px] flex h-[10.8px] w-full max-w-[1270px] items-center py-[5px]">
        <div className="h-px w-full bg-[#D8CECA]" />
      </div>
      <div className="mx-auto max-w-[1290px]">
        <div className="mb-[45px] flex flex-col items-center text-center">
          <p className="mb-4 font-['Inter'] text-[14px] font-medium uppercase leading-[16.8px] text-[#866452]">
            Class Schedule
          </p>

          <h2 className="max-w-[750px] font-['Frank_Ruhl_Libre'] text-[50px] font-normal capitalize leading-[60px] text-[#252A1F]">
            Weekly Yoga Schedule for Mind, Body &amp; Soul
          </h2>
        </div>

        <div className="mb-[40px] flex flex-wrap items-center justify-center">
          {days.map((day, index) => (
            <button
              key={day}
              onClick={() => setActiveDay(index)}
              className={`mx-[5px] flex h-[46.8px] items-center justify-center rounded-[5px] px-[25px] py-[15px] font-['Inter'] text-[16px] font-normal leading-[25.6px] transition-colors duration-300 ${activeDay === index
                  ? "bg-[#12140F] text-white"
                  : "bg-white text-[#252A1F] hover:bg-[#866452] hover:text-white"
                }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
          {schedules[activeDay].map((classInfo, index) => (
            <ClassCard key={`${activeDay}-${index}`} classInfo={classInfo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClassSchedule;
