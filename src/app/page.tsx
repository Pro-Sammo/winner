import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Showcase from "@/components/Showcase/Showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Card />
      <Showcase />
      <Showcase />
      <Carousel />
      <Contact />
      <Footer/>
    </>
  );
}
