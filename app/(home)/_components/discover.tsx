import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Discover() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-light">Discover Our More Product</h2>
      </div>

      <div className="space-y-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-[300px,1fr,300px] gap-8 items-center">
          <div className="relative h-[300px] rounded border border-gray-200">
            <Image
              src="/model-yellow.jpg"
              alt="Glowing skin model"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-light leading-[1.1] text-center md:text-left">
            Make Your <span className="text-yellow-500">Skin Glowing</span>
          </h2>

          <div className="space-y-4 text-center md:text-left">
            <p className="text-gray-600 font-light">
              We present our exclusive range of skincare products for Your Skin
            </p>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors mx-auto md:mx-0">
              More Product
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr,1fr] gap-4">
          {/* Left Column */}
          <div className="relative h-[500px] border border-gray-200">
            <Image
              src="/product-1.jpg"
              alt="Skincare product with fabric"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            <div className="relative h-[240px] border border-gray-200">
              <Image
                src="/product-2.jpg"
                alt="White tube product"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="relative h-[240px] border border-gray-200">
              <Image
                src="/product-3.jpg"
                alt="Dropper bottle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[500px] border border-gray-200">
            <Image
              src="/product-4.jpg"
              alt="White cream tube"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
