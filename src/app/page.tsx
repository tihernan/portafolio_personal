import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import homeImage from "/public/images/cat.jpg"


export default function Home() {
  return (
    <Hero imgData={homeImage} imgAlt="Cat in the forest" title="Bienvenidos a mi portafolio personal"/>
  )
}