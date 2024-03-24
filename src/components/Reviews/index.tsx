import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { ReviewOne, ReviewTwo, PlayCircle } from "~/public";

const plusjakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Reviews() {
  return (
    <section className="w-full bg-[#F7F7F7] bg-review bg-center py-[140px] px-20">
      <div className="layout grid gap-[72px]">
        <div className="flex justify-between gap-10">
          <h1 className="font-semibold text-[#101010] text-2xl min-w-max">
            <span className="text-[#FF8A00]">/ </span>Reviews
          </h1>
          <p className="font-medium text-[28px] text-[#101010] max-w-[722px]">
            Unveiling Highly-Rated Reviews and Commendations from Discerning
            Audiences Across{" "}
            <span className="text-[#667085]">
              the United States, Reflecting Exceptional Satisfaction and
              Unmatched Quality.
            </span>
          </p>
        </div>
        <div
          className={`${plusjakarta.className} text-white flex gap-6 justify-between`}
        >
          <div className="w-fit h-fit relative">
            <Image src={ReviewOne} alt="" width={438} height={382} />
            <div className="absolute top-2 left-[clamp(1rem,-2.077rem+4.808vw,2.25rem)]">
              <h3 className="font-bold text-[clamp(4rem,0.923rem+4.808vw,5.25rem)]">
                920<span className="text-[#7C8C6C]">+</span>
              </h3>
              <p className="text-[#878C91] text-[19px] font-medium">
                Top reviews from the United States
              </p>
            </div>
            <div className="absolute bottom-8 left-[clamp(1rem,-2.077rem+4.808vw,2.25rem)]">
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
                <Image
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
                <Image
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
                <Image
                  className="inline-block rounded-full ring-2 ring-black w-[clamp(2rem,-3.846rem+9.135vw,4.375rem)] h-[clamp(2rem,-3.846rem+9.135vw,4.375rem)]"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
          <div className="w-fit h-fit relative">
            <Image src={ReviewTwo} alt="" width={818} height={382} />
            <p className="max-w-[315px] absolute bottom-8 left-[clamp(1rem,-1.462rem+3.846vw,2rem)] font-medium text-[clamp(1.125rem,-0.413rem+2.404vw,1.75rem)]">
              Highly-rated reviews from the United States
            </p>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image src={PlayCircle} alt="" width={56} height={56} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
