import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative px-6 pt-8 lg:pt-12 pb-24 max-w-7xl mx-auto">
      {/* Decorative elements */}
      <div className="absolute top-20 right-[28%] text-[24px] text-gray-300 font-light">
        +
      </div>
      <div className="absolute top-[40%] left-[22%] text-[24px] text-gray-300 font-light">
        +
      </div>
      <div className="absolute top-[60%] right-[35%] text-[24px] text-gray-300 font-light">
        +
      </div>
      <div className="absolute top-12 right-8 text-[24px] text-gray-300 font-light">
        +
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-light leading-[1.1]">
            Your <span className="inline-block">Personalized Skincare</span>{" "}
            <span className="text-yellow-500"> Solution</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-md font-light">
            Discover Your Best Skin With AI-Powered Precision
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <Link href="/dashboard">
              <Button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200">
                Discover
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] lg:h-[600px]">
          <Image
            src="/dual.png"
            alt="Skincare product"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
