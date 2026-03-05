import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Before from "@/components/Before";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Before />
        <HowItWorks />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
