import { Ibarra_Real_Nova, Urbanist } from "next/font/google";

const ibarra = Ibarra_Real_Nova({ subsets: ["latin"] });
const urbanist = Urbanist({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <section className="w-full text-white bg-primary-blue px-20 py-5">
      <div className="layout grid grid-cols-3 items-center">
        <div className={`${ibarra.className} font-bold text-[40px]`}>
          Jinligogo
        </div>
        <div className={`${urbanist.className} flex gap-10 min-w-max`}>
          <p className="font-semibold">Home</p>
          <p>New Release</p>
          <p>Soundbar</p>
          <p>Bookshelf Speakers</p>
        </div>
      </div>
    </section>
  );
}
