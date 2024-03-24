import Image from "next/image";
import { Inter, Urbanist } from "next/font/google";
import { SmallBinOne, SmallBinTwo, SmallBinThree, Star, BigBin } from "~/public";

const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="w-full text-white bg-primary-blue pt-[83px] px-16 pb-16 overflow-hidden">
      <div className="layout relative">
        <Image src={BigBin} alt="" width={787} height={1217} className="absolute -left-24" />
        <div className="grid gap-28 justify-end relative z-10">
          <div className="grid gap-14">
            <div className="grid gap-4">
              <h1 className="font-semibold text-5xl max-w-[551px] leading-none">
                Jinligogo 2Pack 3.5 Gallon, 2.2 Gallon Bathroom Small.
              </h1>
              <p className={`${inter.className} max-w-[374px]`}>
                Available at a lower price from other sellers that may not offer
                free Prime shipping.
              </p>
            </div>
            <button className="bg-[#4A5465] px-[30px] py-[18px] rounded-full w-fit">
              Shop Now $89.00
            </button>
          </div>
          <div className="grid gap-10 max-w-[454px]">
            <div className="grid gap-4">
              <h2 className="text-xl font-bold">About this item</h2>
              <p className={inter.className}>
                We are confident you&apos;ll think we have the best Bathroom Trash
                Can on the market and that we make every order with a full
                money-back guarantee. Your 100%{" "}
              </p>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-3">
                <Image src={SmallBinOne} alt="" width={70} height={70} />
                <Image src={SmallBinTwo} alt="" width={70} height={70} />
                <Image src={SmallBinThree} alt="" width={70} height={70} />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex">
                  <Image src={Star} alt="" width={32} height={32} />
                  <Image src={Star} alt="" width={32} height={32} />
                  <Image src={Star} alt="" width={32} height={32} />
                  <Image src={Star} alt="" width={32} height={32} />
                  <Image src={Star} alt="" width={32} height={32} />
                </div>
                <p className={`${urbanist.className} text-2xl`}>
                  <span className="font-bold">12.832</span> <span className="font-gilroy">Review</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
