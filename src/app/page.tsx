import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ContactForm from "@/components/ContactForm/ContactForm";
import Services from "@/components/Services/Services";
import Brand from '@/components/Brand/Brand'

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Brand/>
        <Card />
        <Carousel />
        <Services />
        <ContactForm />
        <Contact />
      </div>
    </>
  );
}
