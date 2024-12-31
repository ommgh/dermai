import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[600px] rounded-lg overflow-hidden">
          <Image
            src="/face-two.png"
            alt="Natural beauty"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="relative space-y-8">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 text-[24px] text-gray-300 font-light">
            +
          </div>
          <div className="absolute bottom-12 right-12 text-[24px] text-gray-300 font-light">
            +
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-[72px] font-light leading-[1.1]">
            <span className="text-yellow-500">Customised</span> for Your Skin
          </h2>

          <p className="text-gray-600 text-lg max-w-md font-light">
            At DermAI, we believe that skincare should be as unique as you are.
            Using cutting-edge artificial intelligence, DermAI analyzes your
            facial skin images to provide personalized skincare recommendations
            tailored to your skin's needs. Whether you're dealing with acne,
            pigmentation, dryness, or other skin concerns, DermAI is here to
            help you achieve the glowing skin you've always dreamed of.
          </p>

          <Button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 transition-colors">
            Learn More
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
