import Link from "next/link";
import Image from "next/image";
import hero from "../../public/hero.jpg";
import versace from '../../public/Group (1).png';
import zara from '../../public/zara-logo-1 1.png';
import gucci from '../../public/gucci-logo-1 1.png';
import prada from '../../public/prada-logo-1 1.png';
import calvinklein from '../../public/Group (2).png';

export default function About() {
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#F2F0F1] px-6 pt-16 lg:px-16 w-full max-w-[1440px] mx-auto">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-black mb-4">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-500 text-base sm:text-lg mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link href="/onsales"><button className="bg-black mb-2 text-white px-8 sm:px-10 py-3 rounded-3xl shadow-lg">
            Shop Now
          </button></Link>
        </div>
        <div className="flex-1 relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] w-full overflow-hidden">
          <Image
            src={hero}
            fill={true}
            alt="Clothing Models"
            className="object-cover object-center"
          />
        </div>
           <section className="relative px-4 min-h-[350px] sm:min-h-[400px] md:min-h-[428px] bg-cover bg-top sm:bg-center bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]"> 
             <Image 
               priority 
               src="/bigstar.png" 
               height={104} 
               width={104} 
               alt="big star" 
               className="absolute right-4 sm:right-7 xl:right-0 top-8 sm:top-12 max-w-[60px] sm:max-w-[76px] xl:max-w-[104px] animate-[spin_4s_infinite]" 
             /> 
             <Image 
               priority 
               src="/smallstar.png" 
               height={56} 
               width={56} 
               alt="small star" 
               className="absolute left-20 sm:left-32  md:-left-[600px] top-28 sm:top-36 md:top-44 lg:top-56 max-w-9 sm:max-w-11 md:max-w-14 animate-[spin_3s_infinite]" 
             /> 
           </section>

        </div>
      <div className="bg-black py-6">
        <div className="flex items-center justify-around text-white flex-wrap gap-6 max-w-[1440px] mx-auto px-4">
          <Image src={versace} alt="Versace" className="h-10 sm:h-12 w-auto" />
          <Image src={zara} alt="Zara" className="h-10 sm:h-12 w-auto" />
          <Image src={gucci} alt="Gucci" className="h-10 sm:h-12 w-auto" />
          <Image src={prada} alt="Prada" className="h-10 sm:h-12 w-auto" />
          <Image src={calvinklein} alt="Calvin Klein" className="h-10 sm:h-12 w-auto" />
        </div>
      </div>
    </div>
  );
}
