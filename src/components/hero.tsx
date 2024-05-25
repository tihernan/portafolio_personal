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

      <div className="home">
        <div className="home-gradient-bg">
          <h1 className="home-title">{props.title}</h1>
        </div>
      </div>
    </div>
  );
}