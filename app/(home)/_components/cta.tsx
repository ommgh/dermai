import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#1A1A1A] text-white">
      <div className="relative px-6 py-20 max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-12 right-1/4 text-[24px] text-white/20 font-light">
          +
        </div>
        <div className="absolute bottom-12 left-1/3 text-[24px] text-white/20 font-light">
          +
        </div>
        <div className="absolute bottom-1/3 right-12 text-[24px] text-white/20 font-light">
          +
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-light leading-[1.1]">
              Let's Controlling Your Skin Today!{" "}
              <span className="inline-block">With Health and</span>{" "}
              <span className="inline-flex items-center">
                Organic
                <span className="inline-block ml-2 text-[24px] text-white/20">
                  +
                </span>
              </span>
            </h2>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors text-black">
              Discover Now
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/product-cta.png"
              alt="Product in hand"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
