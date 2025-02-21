import Card from "@/components/Card/Card";
import Carousel from "@/components/Carousel/Carousel";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import ContactForm from "@/components/ContactForm/ContactForm";
import Services from "@/components/Services/Services";
import Brand from '@/components/Brand/Brand'
import Footer from "@/components/Footer/Footer";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <Brand/>
        <Card />
        <AboutUs/>
        <Carousel />
        <Services />
        <ContactForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
