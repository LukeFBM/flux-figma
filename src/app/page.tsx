import Container from "@/components/elements/Container";
import CallToAction from "@/components/extensive/CallToAction";
import DoubleHero from "@/components/extensive/DoubleHero";
import Footer from "@/components/extensive/Footer";
import Hero from "@/components/extensive/Hero";
import Logos from "@/components/extensive/Logos";
import Navbar from "@/components/extensive/Navbar";
import Testimonials from "@/components/extensive/Testimonials";

export default function Home() {
  return (
    <main className="bg-primary h-full">
      <Container className="flex flex-col gap-14">
        <Navbar />
        <Hero />
        <Logos />
        <DoubleHero />
        <Testimonials />
        <CallToAction />
        <Footer />
      </Container>
      <div className="bg-gradient-to-r from-blue_button to-alternative w-full h-4" />
    </main>
  );
}
