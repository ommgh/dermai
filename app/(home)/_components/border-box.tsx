export default function BorderBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen p-8">
      <div className="relative h-full border border-black">
        {/* Corner dots */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#070707]" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#080807]" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#080808]" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#080808]" />

        {/* Content */}
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}
