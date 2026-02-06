export default function TopHeader() {
    return (
      <div className="bg-red-700 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LEFT */}
          <div className="w-1/3 text-left font-semibold whitespace-nowrap">
            RajAnand Agency
          </div>
  
          {/* CENTER */}
          <div className="w-1/3 text-center font-bold tracking-wide">
            NOW AVAILABLE FOR HOME DELIVERY
          </div>
  
          {/* RIGHT (empty for spacing) */}
          <div className="w-1/3"></div>
  
        </div>
      </div>
    );
  }
  