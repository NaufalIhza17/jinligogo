import { upgradeData } from "@/data/staticData";

export default function Upgrade() {
  return (
    <section className="w-full bg-white bg-review bg-center px-5">
      <div className="layout bg-upgrade flex items-center justify-around rounded-2xl">
        <h2 className="text-white font-semibold text-5xl max-w-[544px]">
          Upgrade your bathroom for a fresh, stylish vibe.
        </h2>
        <div className="flex flex-col gap-6 my-[140px]">
          {upgradeData.map((data, idx) => (
            <div className="w-[309px] py-4 bg-white/80 rounded-full text-center hover:scale-110 group hover:bg-[#8A95A6] transition-all">
              <p className="font-medium text-[#8E8E8E] group-hover:text-white">{data}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
