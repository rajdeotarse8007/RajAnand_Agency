export default function TopHeader() {
  return (
    <div
      className="text-white text-sm py-3 px-4"
      style={{
        background: "linear-gradient(90deg, #4A0E0E, #8B1A1A, #D62828)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT */}
        <div className="w-1/3 text-left font-semibold tracking-wide whitespace-nowrap">
          Raj & Anand Agency
        </div>

        {/* CENTER */}
        <div className="w-1/3 text-center font-bold tracking-widest text-[12px] uppercase">
          Now Available for Home Delivery
        </div>

        {/* RIGHT */}
        <div className="w-1/3 text-right text-xs tracking-wide opacity-90">
          Authentic Spice Specialists
        </div>

      </div>
    </div>
  );
}
