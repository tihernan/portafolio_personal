import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
     <div className="absolute -z-10 inset-0">
      <Image
        src={props.imgData}
        alt={props.imgAlt}
        layout="fill"
        objectFit="cover"
      />
     </div>
     <div className="pt-12 md:pt-48 flex justify-center items-center z-20">
       <h1 className="text-white text-4xl md:text-6xl text-center align-middle mb-4">{props.title}</h1>
     </div>
     <div className="absolute inset-0 bg-gradient-to-r from-[#24262b]"></div>
    </div>
  );
}