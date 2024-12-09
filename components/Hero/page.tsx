import Image from "next/image";
import hero from "../../public/hero.jpg";
import versace from '../../public/Group (1).png';
import zara from '../../public/zara-logo-1 1.png';
import gucci from '../../public/gucci-logo-1 1.png';
import prada from '../../public/prada-logo-1 1.png';
import calvinklein from '../../public/Group (2).png';

export default function About() {
  return (
    <div className="min-h-screen sm:h-auto md:h-auto bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#F0F0F0] px-6 pt-16 md:px-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold text-black mb-4">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black sm:mb-10 mb-4 text-white px-10 py-3 rounded-3xl shadow-lg">
            Shop Now
          </button>
        </div>
        <div className="flex-1 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[800px] w-full md:w-[50%] overflow-hidden">
          <Image
            src={hero}
            fill={true}
            alt="Clothing Models"
            className="object-cover object-center"
          />
        </div>
        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <Image
            priority
            src="/bigstar.png"
            height={104}
            width={104}
            alt="big star"
            className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
          />
          <Image
            priority
            src="/smallstar.png"
            height={56}
            width={56}
            alt="small star"
            className="absolute left-44 md:-left-[650px] top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
          />
        </section>
      </div>
      <div className="bg-black py-4">
        <div className="flex items-center justify-around text-white flex-wrap gap-4">
          <span className="text-lg font-semibold">
            <Image src={versace} alt="versace" className="h-12 w-auto" />
          </span>
          <span className="text-lg font-semibold">
            <Image src={zara} alt="zara" className="h-12 w-auto" />
          </span>
          <span className="text-lg font-semibold">
            <Image src={gucci} alt="gucci" className="h-12 w-auto" />
          </span>
          <span className="text-lg font-semibold">
            <Image src={prada} alt="prada" className="h-12 w-auto" />
          </span>
          <span className="text-lg font-semibold">
            <Image src={calvinklein} alt="calvinklein" className="h-12 w-auto" />
          </span>
        </div>
      </div>
    </div>
  );
}


