import Image from "next/image";

export default function Discover() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <div className="space-y-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-[300px,1fr,300px] gap-8 items-center">
          <div className="relative h-[300px] rounded">
            <Image
              src="/perfect_face.png"
              alt="Glowing skin model"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-light leading-[1.1] text-center md:text-left">
            Make Your <span className="text-yellow-500">Skin Glowing</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr,1fr] gap-4">
          {/* Left Column */}
          <div className="relative h-[500px] border border-black">
            <Image
              src="/DISCOVER-1.png"
              alt="Skincare product with fabric"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            <div className="relative h-[240px] border border-black">
              <Image
                src="/DISCOVER-2.png"
                alt="White tube product"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="relative h-[240px] border border-black">
              <Image
                src="/DISCOVER-3.png"
                alt="Dropper bottle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[500px] border border-black">
            <Image
              src="/DISCOVER-4.png"
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
