export default function ChartSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4 py-10">
      {/* Left Text Section */}
      <div className="max-w-lg text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 drop-shadow-lg">
          Support That Understands You
        </h1>
        <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          Redefining mental wellness with practical tools, expert guidance, and communities that foster growth and transformation.
        </p>
      </div>

      {/* Rotating Circles */}
      <div className="relative w-[300px] sm:w-[400px] lg:w-[450px] h-[300px] sm:h-[400px] lg:h-[450px] animate-spin-slow">
        {/* Circle 1 */}
        <div
          className="absolute w-1/2 h-1/2 bg-[#FF5500]/40 rounded-full border-2 border-orange-500 flex items-center justify-center text-white font-bold text-center p-2 z-10"
          style={{ top: "0%", left: "25%" }}
        >
         Mind-Body Wellness Programs
        </div>

        {/* Circle 2 */}
        <div
          className="absolute w-1/2 h-1/2 bg-[#FFE143] rounded-full border-2 border-[#CCAC00] flex items-center justify-center text-orange-500/80 font-bold text-center p-2"
          style={{ top: "25%", left: "50%" }}
        >
          Individual <br /> Wellness <br /> Coaching
        </div>
        {/* Circle 3 */}
        <div
          className="absolute w-1/2 h-1/2 bg-[#02839F]/40 rounded-full border-2 border-[#02839F] flex items-center justify-center text-white font-bold text-center p-2"
          style={{ top: "25%", left: "0%" }}
        >
          Safe Space <br /> Circles
        </div>

        {/* Circle 4 */}
        <div
          className="absolute w-1/2 h-1/2 bg-[#6B5AFF]/40 rounded-full border-2 border-purple-500 flex items-center justify-center text-white font-bold text-center p-2"
          style={{ top: "50%", left: "25%" }}
        >
          Growth Toolkits
        </div>
      </div>
    </div>
  );
}
