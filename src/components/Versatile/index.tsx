import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { StepOne, StepTwo, StepThree, StepFour } from "~/public";

const plusjakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Versatile() {
  return (
    <section className="w-full bg-white bg-review bg-center py-[140px] px-20">
      <div className="layout grid gap-[72px]">
        <div className="flex justify-between">
          <h1 className="font-semibold text-[#101010] text-2xl">
            <span className="text-[#FF8A00]">/ </span>Versatile Opening Options
          </h1>
          <p className="font-medium text-[28px] text-[#101010] max-w-[685px]">
            Indulge in the convenience of a myriad of versatile opening options,{" "}
            <span className="text-[#667085]">
              providing you with a customizable and adaptable experience
              tailored to your specific preferences and requirements.
            </span>
          </p>
        </div>
        <div
          className={`${plusjakarta.className} text-[#101010] flex gap-8 justify-between text-lg uppercase `}
        >
          <div className="flex flex-col gap-4 max-w-[348px]">
            <Image src={StepOne} alt="" width={348} height={461} />
            <p>01 ⎯⎯ Gesture-Activated Sensor</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[309.41px]">
            <Image src={StepTwo} alt="" width={309.41} height={408} />
            <p>02 ⎯⎯ Foot-Activated Sensor</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[244.62px]">
            <Image src={StepThree} alt="" width={244.62} height={310} />
            <p>03 ⎯⎯ Single Button Operation</p>
          </div>
          <div className="flex flex-col gap-4 max-w-[364.97px]">
            <Image src={StepFour} alt="" width={364.97} height={483} />
            <p>04 ⎯⎯ Knee-Triggered Sensor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
