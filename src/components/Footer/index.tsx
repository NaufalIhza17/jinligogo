import Image from "next/image";
import { Ibarra_Real_Nova, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Arrow, Facebook, Instagram, Youtube } from "~/public";
import { footerData } from "@/data/staticData";

const ibarra = Ibarra_Real_Nova({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const plusjakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <section className="w-full bg-[#101010] py-14 px-[100px] text-[#C2C2C2]">
      <div className="layout">
        <div className="flex justify-between gap-10 border-b border-[#606060]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 max-w-[467px]">
              <div
                className={`${ibarra.className} font-bold text-[40px] text-white`}
              >
                Jinligogo
              </div>
              <p className="font-switzer w-3/5">
                Making health datamore accessible for better care at lower
                costs.
              </p>
            </div>
            <div className="rounded-full bg-white/5 border border-[#EDEDED]/30 p-2 flex justify-between items-center w-full max-w-[493px] h-fit">
              <input
                type="text"
                className="font-general-sans bg-transparent h-fit focus:outline-none pl-6"
                placeholder="youremail@gmail.com"
              />
              <button className="flex gap-[10px] py-4 px-8 bg-[#4A5465] rounded-full">
                <p>Submit</p>
                <Image src={Arrow} alt="" width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="flex gap-[clamp(1rem,-7.615rem+13.462vw,4.5rem)] py-10">
            {footerData.map((data) => (
              <div key={data.title} className="flex flex-col gap-6">
                <h3 className="font-semibold text-lg text-white">
                  {data.title}
                </h3>
                <div className={`${inter.className} text-[17px] flex flex-col gap-4`}>
                  {data.children.map((child) => (
                    <a key={child.name} href={child.url}>
                      {child.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="uppercase font-satoshi font-bold text-[clamp(9rem,-3.923rem+20.192vw,14.25rem)] leading-none text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/0 via-white/50 to-white/0">
            JINLIGOGO
          </span>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className={`${plusjakarta.className}`}>
            2024 &#169; Jinligogo Copyrights
          </p>
          <div className="flex gap-6">
            <Image src={Facebook} alt="" width={24} height={24} />
            <Image src={Instagram} alt="" width={24} height={24} />
            <Image src={Youtube} alt="" width={24} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
