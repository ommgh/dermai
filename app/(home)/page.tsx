import Header from "@/app/(home)/_components/header";
import Hero from "@/app/(home)/_components/hero";
import About from "@/app/(home)/_components/about";
import Discover from "@/app/(home)/_components/discover";
import Testimonials from "@/app/(home)/_components/testimonials";
import CTA from "@/app/(home)/_components/cta";
import Footer from "@/app/(home)/_components/footer";
import BorderBox from "@/app/(home)/_components/border-box";

export default function Home() {
  return (
    <BorderBox>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <About />
        <Discover />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </BorderBox>
  );
}
